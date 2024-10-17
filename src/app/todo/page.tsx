"use client";
import React from "react";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";


let x = 3;
function Todo() {
  type Todo = {
    name: string;
    isComplete: boolean;
  };

  const [todos, setTodos] = React.useState([1, 2, 3]);
  const [items, setItems] = React.useState<any[]>([1, 2, 3]);
  const [toggle, setToggle] = React.useState(false);

  function addTodo() {
    x++;
    setTodos((todo) => [...todos, x]);
  }

  function removeTodo(todo: number) {
    setTodos(
      todos.filter((i) => {
        return i !== todo;
      })
    );
  }
  function addItem() {
    x++;
    setItems((item) => [...items, x]);
  }

  function removeItem(item: number) {
    setItems(
      items.filter((i) => {
        return i !== item;
      })
    );
  }

  return (
    <div className="max-w-[90%] mx-auto px-2 pt-20 md:max-w-[60rem] md:px-8">
    

      {/* tables */}

      <div className="mt-10 ">
        <div className="flex justify-end">
          <button
            onClick={addItem}
            className="px-3 py-2 text-sm rounded bg-green-400"
          >
            Add
          </button>
        </div>

        <table cellPadding={0} className="mt-8 w-full p-2 rounded">
          <thead>
            <tr>
              <th>Col 1</th>
              <th> Col 2</th>
              <th>Col 3</th>
            </tr>
          </thead>
          {items && (
            <tbody className="relative">
              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <TR key={item} item={item} removeItem={removeItem} />
                ))}
              </AnimatePresence>
            </tbody>
          )}
        </table>

        {/* <div className="mt-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
            voluptate. Itaque magnam, nam veritatis odit debitis sapiente
            veniam, architecto dignissimos eaque harum, explicabo quidem dolor
            rem. Culpa similique provident rerum!
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Todo;

{
  /* 
      <motion.ul
        layout
        transition={{ layout: { duration: 2 } }}
        className=" border p-8 rounded-lg overflow-hidden"
      >
        <AnimatePresence initial={false}>
          {todos.map((todo) => (
            <motion.li
              key={todo}
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0 }}
              transition={{ layout: { duration: 2 } }}
              //   transition={{ layout: { type: "spring" } }}
              className=" flex justify-between items-center border-b  py-2"
            >
              <span> Todo {todo}</span>
              <button
                className="border rounded py-0.5 px-3"
                onClick={() => removeTodo(todo)}
              >
                &times;
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul> */
}

// @ts-ignore
const TR = ({ item, removeItem }) => {
  let isPresent = useIsPresent();

  return (
    <motion.tr
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{ opacity: { duration: 0.2 } }}
      style={{
        position: isPresent ? "relative" : "absolute",
        display: isPresent ? "table-row" : "flex",
        alignItems: isPresent ? "" : "center",
      }}
      className="w-full"
    >
      <td className="w-1/3"> 1: item {item}</td>{" "}
      <td className="w-1/3">2: item {item}</td>{" "}
      <td className="w-1/3 text-center">
        <button
          onClick={() => removeItem(item)}
          className="w-8 h-7 border rounded"
        >
          &times;
        </button>
      </td>
    </motion.tr>
  );
};
