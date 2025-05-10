import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar flex justify-evenly  bg-gray-800 text-white shadow">
      <Link href={"/"} className="btn btn-ghost">
        Home
      </Link>
      <Link href={"/posts"} className="btn btn-ghost">
        Posts
      </Link>
      <Link href={"/users"} className="btn btn-ghost">
        Users
      </Link>
    </nav>
  );
}
