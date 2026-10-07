import Searchbox from "../Searchbox";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:flex-row md:justify-between">
      <h1 className="text-3xl font-bold">Employee Management Dashboard</h1>
      <Searchbox />
    </div>
  );
}

export default Header;
