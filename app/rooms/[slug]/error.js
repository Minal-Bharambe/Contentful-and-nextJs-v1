"use client";

export default function Error({ error, reset }) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-red-500 mb-4">
        Something went wrong
      </h2>

      <button
        onClick={() => reset()}
        className="bg-black text-white px-4 py-2"
      >
        Try Again
      </button>
    </div>
  );
}