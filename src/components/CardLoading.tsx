import { Skeleton } from "../ui/skeleton";

const CardLoading = () => {
  return (
    <div className="flex flex-col space-y-3 w-87.5 p-4 border rounded-xl">
      <div className="space-y-2">
        {/* Visual placeholders for text lines */}
        <Skeleton className="h-4 w-62.5" />
        <Skeleton className="h-4 w-50" />
      </div>
    </div>
  );
};

export default CardLoading;
