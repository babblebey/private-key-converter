"use client";

import { useState, Fragment } from "react";
import { Title } from "@/components/Title";
import { Error } from "@/components/Error";
import { Cog6ToothIcon, ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

import { convert_PKCS1_to_PKCS8 } from "./actions";
import { Success } from "@/components/Success";

const keyTypes = {
  pkcs1: {
    title: "PKCS#1",
    placeholder: "-----BEGIN RSA PRIVATE KEY-----"
  },
  pkcs8: {
    title: "PKCS#8",
    placeholder: "-----BEGIN PRIVATE KEY-----"
  }
}

export default function Home() {
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false); 

  const [inputKey, setInputKey] = useState("");
  const [outputKey, setOutputKey] = useState(null);
  const [inputFormat, setInputFormat] = useState("pkcs1");
  const [outputFormat, setOutputFormat] = useState("pkcs8");

  async function handleSubmit() {
    setError(false);
    setLoading(true);

    const { key, error } = await convert_PKCS1_to_PKCS8(inputKey);
    if (key) {
      setOutputKey(key);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    if (error) {
      setError(error);
      document.querySelector("#error")?.scrollIntoView();
    };

    setLoading(false);
  };

  return (
    <div className="container px-8 mx-auto mt-16 lg:mt-32">
      {outputKey ? (
        <>
          <Success />

          <div className="max-w-4xl mx-auto">
            <pre className="px-4 py-3 mt-8 font-mono text-left bg-transparent border rounded border-zinc-600 focus:border-zinc-100/80 focus:ring-0 sm:text-sm text-zinc-100">
              <div className="flex items-start px-1 pt-6 relative text-sm">
                <label for="inputKey" className="absolute top-0 text-xs font-medium text-zinc-100">
                  { keyTypes[outputFormat].title }
                </label>
                <div aria-hidden="true" className="pr-4 font-mono border-r select-none border-zinc-300/5 text-zinc-700">
                  {Array.from({
                    length: outputKey.split("\n").length,
                  }).map((_, index) => (
                    <Fragment key={index}>
                      {(index + 1).toString().padStart(2, "0")}
                      <br />
                    </Fragment>
                  ))}
                </div>
                <div>
                  <pre className="flex overflow-x-auto">
                    <code className="px-4 text-left">{outputKey}</code>
                  </pre>
                </div>
              </div>
            </pre>

            <div className="flex items-center justify-end gap-4 mt-4">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 -ml-px space-x-2 text-sm font-medium duration-150 border rounded text-zinc-300 border-zinc-300/40 hover:border-zinc-300 focus:outline-none hover:text-white"
                onClick={() => {
                  setInputKey("");
                  setOutputKey(null);
                }}
              >
                Convert another
              </button>
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 -ml-px space-x-2 text-sm font-medium duration-150 border rounded text-zinc-700 border-zinc-300 bg-zinc-50 hover focus:border-zinc-500 focus:outline-none hover:text-zinc-50 hover:bg-zinc-900"
                onClick={() => {
                  navigator.clipboard.writeText(outputKey);
                  setCopied(true);
                }}
              >
                {copied ? (
                  <ClipboardDocumentCheckIcon className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <ClipboardDocumentIcon className="w-5 h-5" aria-hidden="true" />
                )}{" "}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <form
          className="max-w-3xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Title>Convert Private Key</Title>

          <pre className="px-4 py-3 mt-8 font-mono text-left bg-transparent border rounded border-zinc-600 focus:border-zinc-100/80 focus:ring-0 sm:text-sm text-zinc-100">
            <div className="flex items-start px-1 text-sm pt-6 relative">            
              <label for="inputKey" className="absolute top-0 text-xs font-medium text-zinc-100">
                { keyTypes[inputFormat].title }
              </label>
              <div aria-hidden="true" className="pr-4 font-mono border-r select-none border-zinc-300/5 text-zinc-700">
                {Array.from({
                  length: inputKey?.split("\n").length,
                }).map((_, index) => (
                  <Fragment key={index}>
                    {(index + 1).toString().padStart(2, "0")}
                    <br />
                  </Fragment>
                ))}
              </div>
              <textarea
                type="text"
                name="inputKey"
                id="inputKey"
                required
                placeholder={keyTypes[inputFormat].placeholder}
                className="w-full pl-4 p-0 text-base bg-transparent border-0 appearance-none resize-none hover:resize text-zinc-100 placeholder-zinc-500 focus:ring-0 sm:text-sm"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                minLength={1}
                rows={Math.max(5, inputKey?.split("\n").length)}
              />
            </div>
          </pre>

          <div className="flex flex-col items-center justify-between w-full gap-4 mt-4 sm:flex-row">
            <div className="relative w-full h-16 px-3 py-2 duration-150 border rounded sm:w-2.5/5 hover:border-zinc-100/80 border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0">
              <div className="flex items-center justify-between h-full">
                <label for="inputFormat" className="block text-xs font-medium text-zinc-100">
                  FROM
                </label>
                <select
                  id="inputFormat"
                  name="inputFormat"
                  className="h-full py-0 pl-2 bg-transparent border-0 border-transparent rounded pr-8 -mr-3 text-zinc-500 focus:ring-0 sm:text-sm"
                  onChange={(e) => {}}
                  defaultValue="pkcs1"
                >
                  <option value="pkcs1">PKCS#1</option>
                </select>
              </div>
            </div>
            <div className="relative w-full h-16 px-3 py-2 duration-150 border rounded sm:w-2.5/5 hover:border-zinc-100/80 border-zinc-600 focus-within:border-zinc-100/80 focus-within:ring-0 ">
              <div className="flex items-center justify-between h-full">
                <label for="outputFormat" className="block text-xs font-medium text-zinc-100">
                  TO
                </label>
                <select
                  id="outputFormat"
                  name="outputFormat"
                  className="h-full py-0 pl-2 bg-transparent border-0 border-transparent rounded pr-8 -mr-3 text-zinc-500 focus:ring-0 sm:text-sm"
                  onChange={(e) => {}}
                  defaultValue="pkcs8"
                >
                  <option value="pkcs8">PKCS#8</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-8 w-full h-12 inline-flex justify-center items-center transition-all rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800 bg-zinc-200 ring-1 duration-150 hover:text-black hover:drop-shadow-cta hover:bg-white 
            ${ loading && "animate-pulse" }
            `}
            >
            <span>{loading ? <Cog6ToothIcon className="w-5 h-5 animate-spin" /> : "Convert"}</span>
          </button>
        </form>
      )}

      <div id="error">
        {error && <Error />}
      </div>
    </div>
  )
}
