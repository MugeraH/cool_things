"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
type Props = {};
let tabs = [
  {
    id: "world",
    label: "World",
    tabContent: {
      title: "World news",
      content: ` mmy text of the printing and typesetting industry. Lorem Ipsum has              been the standard dummy text ever since the 1500s, when an unknown rinter took a galley of type and scrambled it to make a type              specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unch`,
    },
  },
  {
    id: "ny",
    label: "N.Y",
    tabContent: {
      title: "New York",
      content: ` printing and typesetting industry. Lorem Ipsum has
              been the standard dummy text ever since the 1500s, when an`,
    },
  },
  {
    id: "business",
    label: "Business",
    tabContent: {
      title: "Business Class",
      content: `  of type andn the standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              mmy text of the printing and typesetting industry. Lorem Ipsum has
              been the standard dummy text ever since the 1500s, when an`,
    },
  },
  {
    id: "arts",
    label: "Arts",
    tabContent: {
      title: "Business Class",
      content: `   n the standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type andn the standard dummy text known
              printer took a galley of type andn the standardknown printer took
              a galley of type andn the standardknown printer took a galley of
              type andn the standard a galley of type and
              mmy text of the printing and typesetting industry. Lorem Ipsum has
              been the standard dummy text ever since the 1500s, when an`,
    },
  },
  {
    id: "science",
    label: "Science",
    tabContent: {
      title: "Business Class",
      content: `    the standard dummy text ever since the 1500s, when an unknown
              printer took a gall n the standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type andn the standardknown printer took
              a galley of type andn the standardknown printer took a galley of
              type andn the standard dummy text`,
    },
  },
];

function Tabs({}: Props) {
  let [activeTab, setActiveTab] = React.useState(tabs[0].id);
  return (
    <div>
      <h3>Tabs</h3>

      <div className="mt-10  mx-1 flex justify-center border-b-2 bodrer-white border-opacity-2 pb-3">
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

      <div className="mt-5 text-center">
        <AnimatePresence>
          {tabs.map((tab) => (
            <div key={tab.id}>
              {activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ x: 15, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -15, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-4 mt-4"
                >
                  <p className="font-semibold ">{tab.tabContent.title}</p>

                  <span className="text-balance text-sm">
                    {tab.tabContent.content}
                  </span>
                </motion.div>
              )}
            </div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Tabs;
