"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};
let tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y" },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];
function Tabs({}: Props) {
  let [activeTab, setActiveTab] = React.useState(tabs[0].id);
  return (
    <div>
      <h3>Tabs</h3>

      <div className="mt-10  mx-10">
        <div className="flex space-x-1 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/50"
              } relative rounded-full
            px-3 py-1.5 text-sm font-medium text-white outline-2 transition outline-sky-400 focus-visible:outline
            `}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute  bg-white inset-0"
                  style={{
                    borderRadius: 9999,
                  }}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10 mix-blend-exclusion">
                {" "}
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
