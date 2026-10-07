import { Search } from "lucide-react";

function Searchbox() {
  return (
    <div className="flex items-center gap-2 relative">
      <Search className="absolute text-gray-500 items-center ml-3 " />
      <input
        type="text"
        placeholder="Search employees..."
        className="p-2 border  border-gray-300 rounded-full pl-10 w-full"
      />
    </div>
  );
}

export default Searchbox;
