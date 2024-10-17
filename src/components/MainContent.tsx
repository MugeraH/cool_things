"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Spotlight, { SpotlightCard } from "./spotlight";

type Props = {
  links: string[];
};

function MainContent({ links }: Props) {
  useEffect(() => {
    const injectorCursorPosition = ({ x, y }: { x: any; y: any }) => {
      //  @ts-ignore
      document.documentElement.style.setProperty("--x", Math.round(x));
      // @ts-ignore
      document.documentElement.style.setProperty("--y", Math.round(y));
    };

    document.body.addEventListener("pointermove", injectorCursorPosition);
  }, []);
  return (
    <>
      {links.map((link) => (
        <Spotlight key={link} className="w-full h-[200px] ">
          {/* Card #1 */}
          <SpotlightCard>
            <Link className="text-white " href={`/${link}`}>
              <div className=" h-full bg-slate-900 p-6 pb-8 capitalize z-20 overflow-hidden flex justify-center items-center">
                {link}
              </div>
            </Link>
          </SpotlightCard>
        </Spotlight>
      ))}
    </>
  );
}

export default MainContent;
