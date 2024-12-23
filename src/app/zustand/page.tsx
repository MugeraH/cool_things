"use client";
import { useCounterStore } from "@/zustand/store";
import { useEffect } from "react";

type Props = {};

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count", count);
};

const setCount = () => {
  useCounterStore.setState({ count: 10 });
};

function Zustand({}: Props) {
  const count = useCounterStore((state) => state.count);
  return (
    <div>
      Zustand-code implementation
      <div className="my-10  w-full">
        <OtherComponent count={count} />
      </div>
    </div>
  );
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    setCount();
  }, []);
  return (
    <div className="text-lg font-bold w-[300px] mx-auto flex flex-col justify-center items-center gap-7">
      <div className="text-[40px]">{count}</div>

      <div className="flex gap-4">
        <button
          className="w-10 h-10 rounded-sm bg-green-400 text-[30px] text-center flex justify-center"
          onClick={incrementAsync}
        >
          +
        </button>
        <button
          className="w-10 h-10 rounded-sm bg-red-400 text-[40px] text-center flex justify-center"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Zustand;
