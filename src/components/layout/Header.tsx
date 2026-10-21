import Searchbox from "../Searchbox";

function Header() {
  return (
    <header className="flex flex-col gap-4 border-b px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <h1 className="text-center text-2xl font-bold sm:text-left sm:text-3xl">
        Employee Management Dashboard
      </h1>
      <Searchbox />
    </header>
  );
}

export default Header;
