import { motion } from "framer-motion";
import React from "react";

type Props = {
  className: string;
};

function DiceSpotComponent({ className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{ opacity: { duration: 0.2 } }}
      className={`rounded-full bg-black w-8 h-8 absolute ${className}`}
    ></motion.div>
  );
}

export default DiceSpotComponent;
