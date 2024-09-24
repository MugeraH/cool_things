"use client";
import { useEffect, useState } from "react";
// @ts-ignore
import Minisearch from "minisearch";

export default function useSearchIndex(
  data: any,
  miniSearchOptions: {},
  searchOptions = {}
) {
  const [results, setResults] = useState([]);
  const [searchIndex, setSearchIndex] = useState(null);

  useEffect(() => {
    const index = new Minisearch(miniSearchOptions);
    if (index) {
      index.addAll(data);

      setSearchIndex(index);
    }
  }, []);

  const search = (value: any) => {
    // @ts-ignore
    const newResults = searchIndex?.search(value, searchOptions);
    setResults(newResults);
  };

  return { results, search, searchIndex };
}
