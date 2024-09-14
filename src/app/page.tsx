"use client";

import Link from "next/link";

export default function Home() {
  const myLinks = ["animated_carousel", "cool_cards", "tabs"];
  return (
    <main className=" flex   flex-col items-center justify-between py-16 px-10">
      <div className="  w-full relative flex flex-col gap-10">
        <h1 className="text-[1.6rem] text-6xl font-manrope font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
          {" "}
          COOL STUFF I RECREATED
        </h1>{" "}
        <div className="w-full grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4 ">
          {myLinks.map((link) => (
            <div key={link} className=" flex  justify-center ">
              <Link
                className="text-white text-center relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                href={`/${link}`}
              >
                {link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
