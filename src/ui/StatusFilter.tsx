import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { employees } from "../data/employee";
import { Button } from "../ui/button";
import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import type { Employee } from "@/types/employee";

export function StatusFilter() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredRoles = employees.filter((employee) => {
    if (statusFilter === "all") {
      return true;
    }
    return employee.department === statusFilter;
  });

  return (
    <div>
      <div className="flex gap-4 m-4 items-center justify-end">
        <Button onClick={() => setStatusFilter("all")}>All</Button>
        <Button onClick={() => setStatusFilter("Engineering")}>
          Engineering
        </Button>
        <Button onClick={() => setStatusFilter("Design")}>Design</Button>
        <Button onClick={() => setStatusFilter("Product")}>Product</Button>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="font-heading font bold">Name</TableHead>
                <TableHead className="font-heading font bold">Role</TableHead>
                <TableHead className="font-heading font bold">
                  Department
                </TableHead>
                <TableHead className="font-heading font bold">Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRoles.map((employee: Employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex justify-center mt-4">
      <p className="text-sm text-muted-foreground">
        Total employees: {filteredRoles.length}
      </p>
      </div>
    </div>
  );
}

export default StatusFilter;
