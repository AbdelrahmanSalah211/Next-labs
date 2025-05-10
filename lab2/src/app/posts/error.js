"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[calc(100vh-144px)] p-8 flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl text-red-600 font-bold">Something went wrong</h2>
      <p className="text-gray-700 pt-2">{error.message}</p>
      <button
        onClick={() => reset()}
        className="m-4 bg-blue-600 text-white p-2 rounded"
      >
        Try again
      </button>
    </div>
  );
}
