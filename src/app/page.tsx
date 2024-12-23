import MainContent from "@/components/MainContent";

export default function Home() {
  const myLinks = [
    "tabs",
    "todo",
    "form",
    "fuzzy_search",
    "infinite_scroll",
    "wysiwyg_editor",
    "sidebar",
    "textStream",
    "react-hooks",
    "zustand",
    "dice"
  ];
  return (
    <main className=" flex flex-col items-center justify-between py-16 px-10">
      <div className="  w-full relative flex flex-col gap-10">
        <h1 className="text-[1.6rem] text-6xl font-manrope font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400">
          {" "}
          COOL STUFF I RECREATED
        </h1>{" "}
        <div className="w-full grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4 ">
          <MainContent links={myLinks} />
        </div>
      </div>
    </main>
  );
}
