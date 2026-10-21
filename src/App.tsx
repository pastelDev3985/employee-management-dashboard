import Header from "./components/layout/Header";
// import Sidebar from "./components/layout/SideBar";
import MainContent from "./components/layout/MainContent";
import Footer from "./components/layout/Footer";
import { useState } from "react";
import type { Employee } from "./types/employee";
import { employees as initialEmployees } from "./data/employee";
import StatusFilter from "./components/StatusFilter";
import { AddEmployee } from "./components/AddEmployee";

export default function App() {
  const [employees] = useState<Employee[]>(initialEmployees);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        {/* <Sidebar /> */}
        <MainContent>
          {employees.length === 0 ? (
            <div className="w-full py-4 flex flex-col items-center justify-center">
              <p className="font-thin text-muted-foreground text-sm">
                No employees found.
              </p>
            </div>
          ) : (
            <div>
              <AddEmployee />
              <StatusFilter />
            </div>
          )}
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}
