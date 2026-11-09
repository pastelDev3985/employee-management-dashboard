import { Search } from "lucide-react";

interface SearchboxProps {
  query: string;
  onQueryChange: (query: string) => void;
}

function Searchbox({ query, onQueryChange }: SearchboxProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
      />
      <input
        type="text"
        placeholder="Search employees..."
        aria-label="Search employees"
        className="h-10 w-full rounded-full border border-input bg-background px-4 pl-10 text-sm outline-none"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
}

export default Searchbox;
