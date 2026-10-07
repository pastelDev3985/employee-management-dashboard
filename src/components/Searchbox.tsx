import { Search } from "lucide-react";

function Searchbox() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search employees..."
        className="p-2 border border-black rounded"
      >
        {" "}
        <Search />
      </input>
    </div>
  );
}

export default Searchbox;
