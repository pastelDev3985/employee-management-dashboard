import Header from "./components/layout/Header";
// import Sidebar from "./components/layout/SideBar";
import MainContent from "./components/layout/MainContent";
import Footer from "./components/layout/Footer";
import { useState } from "react";
import type { Employee } from "./types/employee";
import { employees as initialEmployees } from "./data/employee";
import StatusFilter from "./components/StatusFilter";
import { AddEmployee } from "./components/AddEmployee";
import CardLoading from "./components/CardLoading";

export default function App() {
  const [employees] = useState<Employee[]>(initialEmployees);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Simulate loading state for demonstration purposes
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div className="flex min-h-screen flex-col">
      <Header query={searchQuery} onQueryChange={setSearchQuery} />
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
              {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                  <CardLoading />
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <AddEmployee />
                  <StatusFilter searchQuery={searchQuery} />
                </div>
              )}
            </div>
          )}
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}
