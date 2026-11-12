import { TableCell, TableRow } from "../ui/table";
import type { Employee } from "../types/employee";

interface EmployeeCardProps {
  employee: Employee;
  onRowClick: () => void;
}

export default function EmployeeCard({ employee, onRowClick }: EmployeeCardProps) {
  const { name, role, department, email } = employee;

  return (
    <TableRow onClick={onRowClick} className="cursor-pointer hover:bg-muted/50">
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>{department}</TableCell>
      <TableCell>
        <a
          className="text-primary underline-offset-4 hover:underline"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </TableCell>
    </TableRow>
  );
}
