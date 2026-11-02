import { Button } from "../ui/button";
import { Field } from "../ui/field";
import { Input } from "../ui/input";
import { useState } from "react";
import type { Employee } from "../types/employee";

export function AddEmployee() {
  const [addEmployee, setAddEmployee] = useState<Employee[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddEmployee = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newEmployee: Employee = {
        id: Date.now(),
        name: inputValue.trim(),
        role: "Frontend Developer",
        department: "Engineering",
        email: `${inputValue.toLowerCase().replace(/\s+/g, ".")}@company.com`,
      };
      setAddEmployee([...addEmployee, newEmployee]);
      setInputValue("");
    }
  };

  return (
    <div className="my-6">
      <form onSubmit={handleAddEmployee}>
        <Field
          orientation="horizontal"
          className="w-1/2 flex items-center justify-center gap-2 p-2 "
        >
          <Input
            type="text"
            placeholder="Add Employee..."
            className="w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button type="submit">Add Employee</Button>
        </Field>
      </form>
    </div>
  );
}
