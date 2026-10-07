import Header from "./components/layout/Header";
// import Sidebar from "./components/layout/SideBar";
import MainContent from "./components/layout/MainContent";
import Footer from "./components/layout/Footer";
import { employees } from "./data/employee";
import EmployeeCard from "./components/EmployeeCard";
import { Card } from "./ui/card";
import Searchbox from "./components/Searchbox";

export default function App() {
  return (
    <div className="m-2">
      <Header />
      <div className="">
        {/* <Sidebar /> */}
        <MainContent>
          <Searchbox />
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            {employees.map((employee) => (
              <Card >
              <EmployeeCard key={employee.id} employee={employee} />
              </Card>
            ))}
          </div>
        </MainContent>
      </div>
      <Footer />
    </div>
  );
}
