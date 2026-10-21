import { Search } from "lucide-react";
import { useState } from "react";

function Searchbox() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }
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
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Searchbox;
