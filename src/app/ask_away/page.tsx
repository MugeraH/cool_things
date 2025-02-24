"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import TextareaAutosize from "react-textarea-autosize";
import { ArrowUp } from "lucide-react";
type Props = {};

function AskAway({}: Props) {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setIsSubmitted(true);
    }
  };

  // const handleReset = () => {
  //   setIsSubmitted(false);
  //   setInputValue("");
  // };

  const sampleInputs = [
    "Brainstorm podcast episode ideas",
    "Explain this code",
    "Help me improve this job description",
    "Teach me to negotiate",
    "Design a database schema",
  ];

  const [sampleInputIndex, setSampleInputIndex] = React.useState(0);

  React.useEffect(() => {
    if (inputValue.length > 0) return;
    const interval = setInterval(() => {
      setSampleInputIndex((prevIndex) => (prevIndex + 1) % sampleInputs.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [inputValue]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-[800px] ">
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: isSubmitted ? -350 : 0,
          scale: isSubmitted ? 0.9 : 1,
        }}
        transition={{
          type: "tween",
          stiffness: 300,
          damping: 20,
        }}
        className="w-full max-w-lg p-4 "
      >
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col space-y-4 relative">
            <div
              data-feedback={inputValue ? "true" : "false"}
              className="[&[data-feedback=true]]:opacity-0"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={sampleInputIndex}
                  aria-hidden
                  className="text-gray-400 text-xs absolute top-8 left-5"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: "spring", bounce: 0 }}
                >
                  {sampleInputs[sampleInputIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <TextareaAutosize
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              minRows={5}
              placeholder="Enter query"
              className="  placeholder:text-white text-white text-sm focus:outline-none  p-2 
                 py-3 px-4 block w-full rounded-xs  border text-md bg-gray-900 border-[#000000] [&::placeholder]:opacity-0
            "
            />{" "}
            {/* <motion.textarea
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter your text here..."
              className="py-2 px-4 block w-full text-white rounded-sm text-md bg-gray-900 
              text-start
    focus:outline-none 
              
              disabled:opacity-50 disabled:pointer-events-none"
              animate={{
                borderColor: isSubmitted ? "#4ade80" : "#d1d5db",
              }}
            /> */}
            {!isSubmitted ? (
              // <></>
              <motion.button
                type="submit"
                className="absolute bottom-2 right-2 flex items-center justify-center px-2 py-2 bg-gray-600  rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={20} className="" />
              </motion.button>
            ) : (
              <div className="flex flex-col space-y-2">
                <motion.button
                  type="submit"
                  className="absolute bottom-6 right-2 flex items-center justify-center px-2 py-2 bg-gray-600  rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp size={20} className="" />
                </motion.button>
              </div>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default AskAway;
