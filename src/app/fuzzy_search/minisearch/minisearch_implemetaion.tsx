"use client";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
// @ts-ignore
import MiniSearch from "minisearch";

type Props = {};

const heroData = [
  {
    id: 1,
    name: "Thunderbolt",
    superpower: "Electrokinesis",
    age: 28,
    picture: "/img/hero_images/lightning.png",
  },
  {
    id: 2,
    name: "Shadowmancer",
    superpower: "Shadow manipulation",
    age: 35,
    picture: "/img/hero_images/shadow.png",
  },
  {
    id: 3,
    name: "Quantum Girl",
    superpower: "Teleportation",
    age: 22,
    picture: "/img/hero_images/quantum-computing.png",
  },
  {
    id: 4,
    name: "Ironclad",
    superpower: "Invulnerability",
    age: 45,
    picture: "/img/hero_images/armour.png",
  },
  {
    id: 5,
    name: "Flora",
    superpower: "Plant control",
    age: 30,
    picture: "/img/hero_images/flower.png",
  },
  {
    id: 6,
    name: "Mindweaver",
    superpower: "Telepathy",
    age: 40,
    picture: "/img/hero_images/mind-map.png",
  },
  {
    id: 7,
    name: "Velocity",
    superpower: "Super speed",
    age: 25,
    picture: "/img/hero_images/arrows.png",
  },
  {
    id: 8,
    name: "Graviton",
    superpower: "Gravity manipulation",
    age: 50,
    picture: "/img/hero_images/astronaut.png",
  },
  {
    id: 9,
    name: "Chameleon",
    superpower: "Shape-shifting",
    age: 33,
    picture: "/img/hero_images/chameleon.png",
  },
  {
    id: 10,
    name: "Phoenix",
    superpower: "Resurrection and pyrokinesis",
    age: 200,
    picture: "/img/hero_images/phoenix.png",
  },
];

const miniSearchOptions = {
  fields: ["name", "superpower", "age"],
  storeFields: ["name", "superpower", "age"],
  searchOptions: {
    boost: { name: 2, superpower: 1 },
    prefix: true,
    fuzzy: 0.2,
  },
};

function FuzzySearch({}: Props) {
  const [inputValue, setInputValue] = React.useState("");

  // const { results, search, searchIndex } = useSearchIndex(
  //   heroData,
  //   miniSearchOptions,
  //   {}
  // );

  // console.log(results);

  const searchIndex = new MiniSearch({
    //fields to index for full-text search
    fields: ["name", "superpower"],
    //fields to return with search results
    storeFields: ["name", "superpower", "age"],
    searchOptions: {
      //set weights of the fields in your data
      boost: { name: 2, superpower: 1 },
      //Prefix search (so that 'moto' will match 'motorcycle')
      prefix: true,
      //Hgher number === terms can be less accurate
      fuzzy: 0.25,
      idField: "name",
    },
  });

  searchIndex.addAll(heroData);
  // //   searchIndex.add()
  // //   searchIndex.addAllAsync()

  let searchResults = searchIndex.search(inputValue, {
    // filter: (result) => result.tags.includes("girl"),
  });

  //   other operations
  //   searchIndex.documentCount
  //   searchIndex.remove(heroData[0])

  //AutoSuggest takes the same options as .search but instead of returning results
  //it returns suggested queries based on the given input
  //This is what you'd want to use for something
  //like an autocomplete drop down
  // const suggestions = searchIndex.autoSuggest("th");

  console.log(searchResults[0]);

  return (
    <Container>
      <div className="mb-4">
        <h4>Fuzzy search</h4>
        <p className="text-xs text-slate-400">
          Search implemantation using Minisearch package
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
          {/* {results.length ? (
            <>
              {results.map((hero) => (
                <div
                  key={hero.name}
                  className="flex gap-2 border-2 p-3 rounded-sm"
                >
                  <div className="h-14 w-16 rounded-sm ">
                    <Image
                      src={hero.picture}
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
          ) : (
            <>
              {heroData.map((hero) => (
                <div
                  key={hero.name}
                  className="flex gap-2 border-2 p-3 rounded-sm"
                >
                  <div className="h-14 w-16 rounded-sm ">
                    <Image
                      src={hero.picture}
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
          )} */}
        </div>
      </div>
    </Container>
  );
}

export default FuzzySearch;
