import Searchbox from "../Searchbox";

interface HeaderProps {
  query: string;
  onQueryChange: (query: string) => void;
}

function Header({ query, onQueryChange }: HeaderProps) {
  return (
    <header className="flex flex-col gap-4 border-b px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
      <h1 className="text-center text-2xl font-bold sm:text-left sm:text-3xl">
        Employee Management Dashboard
      </h1>
      <Searchbox query={query} onQueryChange={onQueryChange} />
    </header>
  );
}

export default Header;
