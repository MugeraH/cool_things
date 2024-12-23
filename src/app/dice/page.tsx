"use client";
import { SvgLoader } from "@/components/icons";
import { AnimatePresence } from "framer-motion";
import React from "react";
import DiceSpotComponent from "./DiceSpotComponent";

function Dice() {
  const [number, setNumber] = React.useState(0);
  const [isRolling, setIsRolling] = React.useState(false);

  const rollDice = () => {
    setIsRolling(true);

    // Generate random number between 1 and 6
    const newNumber = Math.floor(Math.random() * 6) + 1;

    // Add a small delay to show rolling animation
    setTimeout(() => {
      setNumber(newNumber);
      setIsRolling(false);
    }, 500);
  };
  return (
    <div className="p-10 flex flex-col  items-center gap-10">
      <div className=" flex justify-center items-center gap-4">
        <div className=" rounded-sm p-5 flex justify-center items-center">
          <AnimatePresence initial={false}>
            {" "}
            <div className="shadow-md text-black bg-white h-[200px] w-[200px] rounded-sm p-3 relative">
              {(number == 5 || number == 6 || number == 4) && (
                <DiceSpotComponent className={"top-3 left-3"} />
              )}

              {(number == 5 ||
                number == 6 ||
                number == 3 ||
                number == 2 ||
                number == 4) && (
                <DiceSpotComponent className={"top-3 right-3"} />
              )}

              {(number == 1 || number == 5 || number == 3) && (
                <DiceSpotComponent className={"top-[42%] left-[42%]"} />
              )}

              {number == 6 && (
                <DiceSpotComponent className={"top-[42%] left-3"} />
              )}

              {number == 6 && (
                <DiceSpotComponent className={"top-[42%] right-3"} />
              )}

              {(number == 6 ||
                number == 4 ||
                number == 3 ||
                number == 5 ||
                number == 2) && (
                <DiceSpotComponent className={"bottom-3 left-3"} />
              )}

              {(number == 6 || number == 4 || number == 5) && (
                <DiceSpotComponent className={"bottom-3 right-3"} />
              )}
            </div>
          </AnimatePresence>
        </div>
      </div>

      <div>
        {isRolling ? (
          <button
            onClick={rollDice}
            className="border-2 border-white transition-all font-semibold text-sm  px-6 py-2 rounded-sm w-[150px] flex items-center justify-center"
          >
            <SvgLoader />
          </button>
        ) : (
          <button
            onClick={rollDice}
            className="border-2 border-white transition-all font-semibold text-sm  px-6 py-2 rounded-sm w-[150px]"
          >
            Roll Dice
          </button>
        )}
      </div>

      <div>{number}</div>
    </div>
  );
}

export default Dice;
