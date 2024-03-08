import { PlusIcon } from "@heroicons/react/24/outline";

export function Dropbox() {
  return (
    <div className="hidden items-center justify-center fixed top-0 z-40 w-full h-screen bg-black/70 backdrop-blur" id="dropbox">
      <p className="flex items-center text-md md:text-xl text-white space-x-2">
        <PlusIcon className="w-10 h-10" aria-hidden="true" />
        <span>Drop key file here to upload</span>
      </p>
    </div>
  );
};