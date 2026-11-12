import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";
import type { Employee } from "../types/employee";

const employeeSchema = z.object({
  firstname: z.string().trim().min(1, "First name is required."),
  lastname: z.string().trim().min(1, "Last name is required."),
  email: z.email("Enter a valid email address."),
  department: z.string().trim().min(1, "Department is required."),
  phone: z.string().trim().min(1, "Phone number is required."),
  address: z.string().trim().optional(),
  startdate: z.union([z.literal(""), z.iso.date("Enter a valid start date.")]),
});

type FieldName = keyof z.infer<typeof employeeSchema>;
type FieldErrors = Partial<Record<FieldName, string>>;

interface FieldCardProps {
  onEmployeeCreated: (employee: Employee) => void;
}

const FieldCard = ({ onEmployeeCreated }: FieldCardProps) => {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = employeeSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      const fieldErrors: FieldErrors = {};

      for (const issue of result.error.issues) {
        const fieldName = issue.path[0];

        if (typeof fieldName === "string" && fieldName in employeeSchema.shape) {
          fieldErrors[fieldName as FieldName] = issue.message;
        }
      }

      setErrors(fieldErrors);
      return;
    }

    onEmployeeCreated({
      id: Date.now(),
      name: `${result.data.firstname} ${result.data.lastname}`,
      role: "Employee",
      department: result.data.department,
      email: result.data.email,
      phone: result.data.phone,
      address: result.data.address ?? "",
      startDate: result.data.startdate,
    });
    event.currentTarget.reset();
    setErrors({});
    setIsOpen(false);
  };

  const getFieldError = (fieldName: FieldName) =>
    errors[fieldName] ? [{ message: errors[fieldName] }] : undefined;

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <div className="absolute mt-[7.5px]">
            <Button
              variant="default"
              className="m-4 flex items-center justify-end"
            >
              Create Employee
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <form onSubmit={handleSubmit} noValidate>
            <FieldSet>
              <FieldLegend className="font-bold">Add Employee</FieldLegend>
              <FieldDescription>
                Fill in the details below to create a new employee.
              </FieldDescription>
              <FieldGroup>
                <Field data-invalid={!!errors.firstname}>
                  <FieldLabel htmlFor="firstname">First Name</FieldLabel>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="e.g. John"
                    name="firstname"
                    className="p-2 border rounded-md"
                    aria-invalid={!!errors.firstname}
                  />
                  <FieldError errors={getFieldError("firstname")} />
                </Field>
                <Field data-invalid={!!errors.lastname}>
                  <FieldLabel htmlFor="lastname">Last Name</FieldLabel>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="e.g. Doe"
                    name="lastname"
                    className="p-2 border rounded-md"
                    aria-invalid={!!errors.lastname}
                  />
                  <FieldError errors={getFieldError("lastname")} />
                </Field>
                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <input
                    type="email"
                    id="email"
                    placeholder="john.doe@example.com"
                    name="email"
                    className="p-2 border rounded-md"
                    aria-invalid={!!errors.email}
                  />
                  <FieldError errors={getFieldError("email")} />
                </Field>
                <Field data-invalid={!!errors.department}>
                  <FieldLabel htmlFor="department">Department</FieldLabel>
                  <input
                    type="text"
                    id="department"
                    placeholder="e.g. Engineering"
                    name="department"
                    className="p-2 border rounded-md"
                    aria-invalid={!!errors.department}
                  />
                  <FieldError errors={getFieldError("department")} />
                </Field>
                <Field data-invalid={!!errors.phone}>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="000-000-0000"
                    name="phone"
                    className="p-2 border rounded-md"
                    aria-invalid={!!errors.phone}
                  />
                  <FieldError errors={getFieldError("phone")} />
                </Field>
                <Field>
                  <FieldLabel htmlFor="address">Address</FieldLabel>
                  <input
                    type="text"
                    id="address"
                    placeholder="123 Main St, City, State, ZIP"
                    name="address"
                    className="p-2 border rounded-md"
                  />
                </Field>
                <Field data-invalid={!!errors.startdate}>
                  <FieldLabel htmlFor="startdate">Start Date</FieldLabel>
                  <input
                    type="date"
                    id="startdate"
                    placeholder="Start Date"
                    name="startdate"
                    className="p-2 border rounded-md"
                    aria-invalid={!!errors.startdate}
                  />
                  <FieldError errors={getFieldError("startdate")} />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Button type="submit">Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FieldCard;
