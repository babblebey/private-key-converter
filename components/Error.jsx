import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export function Error({ message = "An error occured!" }) {
  return (
    <div className="flex items-center justify-center my-8 lg:my-16">
      <span className="flex items-center space-x-1.5 px-4 py-2 text-red-500 border rounded border-red-500/50 bg-red-500/10">
        <ExclamationCircleIcon className="w-5 h-5" aria-hidden="true" />
        <span>{ message }</span>
      </span>
    </div>
  );
};