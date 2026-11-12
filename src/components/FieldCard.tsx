import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "../ui/field";

const FieldCard = () => {
  return (
    <div>
      <Dialog>
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
        <DialogContent className="sm:max-w-[425px]">
          <FieldSet>
            <FieldLegend className="font-bold">Add Employee</FieldLegend>
            <FieldDescription>
              Fill in the details below to create a new employee.
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="firstname">First Name</FieldLabel>
                <input
                  type="text"
                  id="firstname"
                  placeholder="e.g. John"
                  name="firstname"
                  className="p-2 border rounded-md"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="lastname">Last Name</FieldLabel>
                <input
                  type="text"
                  id="lastname"
                  placeholder="e.g. Doe"
                  name="lastname"
                  className="p-2 border rounded-md"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <input
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  name="email"
                  className="p-2 border rounded-md"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="department">Department</FieldLabel>
                <input
                  type="text"
                  id="department"
                  placeholder="e.g. Engineering"
                  name="department"
                  className="p-2 border rounded-md"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone</FieldLabel>
                <input
                  type="tel"
                  id="phone"
                  placeholder="000-000-0000"
                  name="phone"
                  className="p-2 border rounded-md"
                  required
                />
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
              <Field>
                <FieldLabel htmlFor="startdate">Start Date</FieldLabel>
                <input
                  type="date"
                  id="startdate"
                  placeholder="Start Date"
                  name="startdate"
                  className="p-2 border rounded-md"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Button type="submit">Submit</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FieldCard;
