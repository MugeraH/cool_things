"use client";
import SearchInput from "@/components/SearchInput";
import { shuffle } from "@/lib/utils";
import React, { useState, useCallback } from "react";

type Props = {};

function Hooks({}: Props) {
  const allUsers = ["john", "alex", "george", "simon", "james"];

  const [users, setUsers] = useState(allUsers);
  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );
  return (
    <div>
      <div className="text-md font-bold">Hooks</div>

      <div className="m-2 border border-white p-5 rounded-sm">
        <div className="text-md capitalize mb-4">useCallback</div>

        <p className="my-5 text-sm">
          useCallback is a React hook that helps with performance optimization
          by memoizing functions
        </p>

        <div className="flex gap-2">
          <button
            className="py-1.5 px-2.5 bg-blue-600 text-white rounded-sm text-center items-center"
            onClick={() => setUsers(shuffle(allUsers))}
          >
            Shuffle
          </button>

          <SearchInput onChange={handleSearch} placeholder="Search users..." />
        </div>

        <div className="mt-5 flex flex-col gap-2">
          {users.map((user) => (
            <h4 key={user}>{user}</h4>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hooks;
