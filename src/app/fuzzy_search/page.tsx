"use client";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import Fuse from "fuse.js";
import { heroData } from "./data";
import useFuseSearch from "./useFuseSearch";

type Props = {};

const options = {
  keys: ["name", "superpower", "age"],
};

function FuzzySearch({}: Props) {
  const [inputValue, setInputValue] = React.useState("");
  const [resultData, setResultData] = React.useState<any[]>();

  const { results } = useFuseSearch(heroData!, inputValue, options);

  return (
    <Container>
      <div className="mb-4">
        <h4>Fuzzy search</h4>
        <p className="text-xs text-slate-400">
          Search implemantation using Fuse Js package
        </p>
      </div>

      <div className="">
        <input
          type="text"
          className="py-2 px-4 block w-full text-white border text-md bg-transparent border-slate-400 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Search hero"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
          {results.length >= 1 ? (
            <>
              {results?.map((hero) => (
                <div
                  key={hero.item?.name}
                  className="flex gap-2 border-2 p-3 rounded-sm"
                >
                  <div className="h-14 w-16 rounded-sm ">
                    <Image
                      src={hero.item.picture!}
                      width={60}
                      height={60}
                      objectFit="cover"
                      className="relative rounded-full"
                      alt="logo"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4>
                      <span className="text-slate-400 text-xs">
                        Hero Name :{" "}
                      </span>
                      {hero.item.name}
                    </h4>
                    <h5>
                      <span className="text-slate-400 text-xs">Power : </span>
                      {hero.item.superpower}
                    </h5>
                    <h5>
                      <span className="text-slate-400 text-xs">
                        Hero Age :{" "}
                      </span>
                      {hero.item.age}
                    </h5>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {heroData?.map((hero) => (
                <div
                  key={hero?.name}
                  className="flex gap-2 border-2 p-3 rounded-sm"
                >
                  <div className="h-14 w-16 rounded-sm ">
                    <Image
                      src={hero.picture!}
                      width={60}
                      height={60}
                      objectFit="cover"
                      className="relative rounded-full"
                      alt="logo"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h4>
                      <span className="text-slate-400 text-xs">
                        Hero Name :{" "}
                      </span>
                      {hero.name}
                    </h4>
                    <h5>
                      <span className="text-slate-400 text-xs">Power : </span>
                      {hero.superpower}
                    </h5>
                    <h5>
                      <span className="text-slate-400 text-xs">
                        Hero Age :{" "}
                      </span>
                      {hero.age}
                    </h5>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </Container>
  );
}

export default FuzzySearch;
