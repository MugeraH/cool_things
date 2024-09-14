"use client";
import React from "react";
import Link from "next/link";

import { Camera, Apple, Drill } from "lucide-react";
type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex w-full justify-between py-4 px-6 bg-black">
      <Drill />

      <Link href="/">
        <button className="border-2 border-black transition-colors hover:border-2 hover:border-white px-4 py-1 text-sm rounded-sm">
          {" "}
          Back
        </button>
      </Link>
    </nav>
  );
}
