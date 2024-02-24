import { CheckCircleIcon } from "@heroicons/react/24/outline";

export function Success({ message = "Conversion has been completed successfully." }) {
  return (
    <div className="flex items-center justify-center my-8 lg:my-16">
      <span className="flex items-center space-x-1.5 px-4 py-2 text-green-500 border rounded border-green-500/50 bg-green-500/10">
        <CheckCircleIcon  className="w-5 h-5" aria-hidden="true" />
        <span>{ message }</span>
      </span>
    </div>
  );
};