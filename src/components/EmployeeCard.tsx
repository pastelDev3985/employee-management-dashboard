import type { Employee } from "../types/employee";


interface EmployeeCardProps {
  employee: Employee;
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  const { name, role, department, email } = employee;

  return (
    <article className="m-4 p-2">
      <h2 className="font-bold text-2xl">{name}</h2>
      <p>{role}</p>
      <p>{department}</p>
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </article>
  );
}