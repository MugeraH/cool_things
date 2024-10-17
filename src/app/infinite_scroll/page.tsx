"use client";
import { fetchItems } from "@/api/items";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Dot } from "lucide-react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

function InifiniteScroll({}: Props) {
  const { data, status, error, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["items"],
    queryFn: fetchItems,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return status === "pending" ? (
    <div>Loading...</div>
  ) : status === "error" ? (
    <div>{error.message}</div>
  ) : (
    <div className=" h-[600px] overflow-y-scroll px-10">
      <div className="flex flex-col gap-2">
        {data.pages.map((page) => {
          return (
            <div key={page.currentPage} className="flex flex-col gap-2">
              {page.data.map((item) => {
                return (
                  <div key={item.id} className="p-4 bg-gray-700 rounded-md">
                    {item.name}
                  </div>
                );
              })}
            </div>
          );
        })}

        <div ref={ref}>
          {isFetching && (
            <div className="flex mt-10 ">
              <Dot
                size={24}
                className="  animate-bounce transition-all delay-150"
              />{" "}
              <Dot
                size={24}
                className="  animate-bounce transition-all delay-100"
              />{" "}
              <Dot
                size={24}
                className="animate-bounce transition-all delay-75"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InifiniteScroll;
