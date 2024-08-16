"use client";
import React from "react";
import Link from "next/link";

import { Camera, Apple } from "lucide-react";
type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex w-full justify-between py-6 px-6 bg-slate-700">
      <h4>logo</h4>
      <Link href="/">
        <Apple />
      </Link>
    </nav>
  );
}
