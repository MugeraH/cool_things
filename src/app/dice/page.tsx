"use client";
import { SvgLoader } from "@/components/icons";
import { AnimatePresence } from "framer-motion";
import React from "react";
import DiceSpotComponent from "./DiceSpotComponent";

function Dice() {
  const [number, setNumber] = React.useState<number | undefined>(undefined);
  const [lastNumber, setLastNumber] = React.useState<number | undefined>(
    undefined
  );
  const [isRolling, setIsRolling] = React.useState(false);

  const rollDice = () => {
    setIsRolling(true);

    // If we have a last number, make it less likely to repeat
    let weights = Array(6).fill(1);
    if (lastNumber !== undefined) {
      weights[lastNumber - 1] = 0.2; // Reduce probability of last number
    }

    // Calculate total weight for normalization
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);

    // Generate random number based on weights
    let random = Math.random() * totalWeight;
    let newNumber = 1;

    for (let i = 0; i < weights.length; i++) {
      if (random < weights[i]) {
        newNumber = i + 1;
        break;
      }
      random -= weights[i];
    }

    // Add a small delay to show rolling animation
    setTimeout(() => {
      setLastNumber(number);

      setNumber(newNumber);
      setIsRolling(false);
    }, 500);
  };
  return (
    <div className="p-10 flex flex-col  items-center gap-10">
      <div className=" flex justify-center items-center gap-4">
        <div className=" rounded-sm p-5 flex justify-center items-center">
          {number !== undefined ? (
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
          ) : (
            <>
              <div className="shadow-md text-black bg-white h-[200px] w-[200px] rounded-sm p-3 flex justify-center items-center">
                {" "}
                <h4 className="text-[35px] font-semibold text-black">?</h4>
              </div>
            </>
          )}
        </div>
      </div>

      <div>
        <button
          onClick={rollDice}
          disabled={isRolling}
          className="border-2 border-white transition-all font-semibold text-sm  px-6 py-2 rounded-sm w-[150px]"
        >
          {isRolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    </div>
  );
}

export default Dice;
