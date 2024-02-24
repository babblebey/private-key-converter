"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bottom-0 border-t inset-2x-0 mt-6 border-zinc-500/10">
      <div className="flex flex-col gap-1 px-6 py-12 mx-auto text-xs text-center text-zinc-700 max-w-7xl lg:px-8">
        <p>
          Built by{" "}
          <Link href="https://twitter.com/babblebey" className="font-semibold duration-150 hover:text-zinc-200">
            @babblebey
          </Link>
          {" "}inspired by{" "}
          <Link
            href="https://github.com/gr2m/universal-github-app-jwt"
            className="underline duration-150 hover:text-zinc-200"
          >
            gr2m/universal-github-app-jwt{" "}
          </Link>
        </p>
        <p>
          UI boilerplated from{" "}
          <Link target="_blank" href="https://github.com/chronark/envshare" className="underline duration-150 hover:text-zinc-200">
            chronark/envshare
          </Link>
        </p>
      </div>
    </footer>
  );
}