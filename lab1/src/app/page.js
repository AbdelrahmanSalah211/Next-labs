import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-144px)] p-8 pb-20 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Welcome to EchoWords</h1>
      </div>
    </div>
  );
}
