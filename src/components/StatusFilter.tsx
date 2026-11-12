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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";

interface StatusFilterProps {
  searchQuery: string;
}

export function StatusFilter({ searchQuery }: StatusFilterProps) {
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<Employee | null>(null);

  const filteredRoles = employees.filter((employee) => {
    const matchesDepartment =
      statusFilter === "all" || employee.department === statusFilter;
    const normalizedQuery = searchQuery.trim().toLowerCase();
    const matchesSearch =
      normalizedQuery.length === 0 ||
      [employee.name, employee.role, employee.department, employee.email].some(
        (value) => value.toLowerCase().includes(normalizedQuery),
      );

    return matchesDepartment && matchesSearch;
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
                <EmployeeCard
                  key={employee.id}
                  employee={employee}
                  onRowClick={() => setSelectedUser(employee)}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <Dialog
        open={!!selectedUser}
        onOpenChange={(open) => !open && setSelectedUser(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Employee Profile
            </DialogTitle>
            <DialogDescription>
              Detailed record for {selectedUser?.name}.
            </DialogDescription>
          </DialogHeader>

          {/* Dialog Body Content */}
          <div className="space-y-3 py-4 text-sm">
            <p>
              <strong>Department:</strong> {selectedUser?.department}
            </p>
            <p>
              <strong>Role:</strong> {selectedUser?.role}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser?.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedUser?.phone}
            </p>
            <p>
              <strong>Address:</strong> {selectedUser?.address}
            </p>
            <p>
              <strong>Start Date:</strong> {selectedUser?.startDate}
            </p>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex justify-center mt-4">
        <p className="text-sm text-muted-foreground">
          Total employees: {filteredRoles.length}
        </p>
      </div>
    </div>
  );
}

export default StatusFilter;
