"use client";
import React from "react";
import { Play, RotateCcw, Pause } from "lucide-react";

import { getNextChars, useAnimatedText, useInterval } from "./hooks";

let delay = 1000;
let characters = 50;
let position = 0;
function TextStream() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [text, setText] = React.useState("");
  let animatedText = useAnimatedText(text);

  useInterval(
    () => {
      let newText = getNextChars(characters, position);
      setText((text) => text + newText);
    },
    isPlaying ? delay : null
  );

  return (
    <div>
      TextStream
      <div className="my-5  w-full  ">
        <div className="flex gap-2">
          <button
            className="border bottom-white border-opacity-5 rounded-sm py-1 px-2 text-sm flex items-center gap-2 hover:border-slate-200"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <>
                <Pause className="size-4" /> Pause
              </>
            ) : (
              <>
                <Play size={14} />
                Start
              </>
            )}
          </button>
          <button
            onClick={() => {
              console.log(text, "clicked");

              setText("");
              setIsPlaying(false);
              position = 0;
            }}
            className="border bottom-white border-opacity-5 rounded-sm py-1 px-2 text-sm flex items-center gap-2"
          >
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className="h-[600px] overflow-y-auto bg-white text-slate-950 p-3 rounded-sm text-sm">
            {text}
          </div>

          <h4 className="mt-2">Text</h4>
        </div>

        <div>
          <div className="h-[600px] overflow-y-auto bg-white text-slate-950 p-3 rounded-sm text-sm">
            {animatedText}
          </div>

          <h4 className="mt-2">useAnimatedText(text)</h4>
        </div>
      </div>
    </div>
  );
}

export default TextStream;
