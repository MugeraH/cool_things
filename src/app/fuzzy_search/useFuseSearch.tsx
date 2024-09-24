import Fuse from "fuse.js";

export default function useFuseSearch(
  data: any[],
  searchValue: any,
  options: {}
) {
  const fuse = new Fuse(data!, options);

  const results = fuse.search(searchValue);

  return { results };
}
