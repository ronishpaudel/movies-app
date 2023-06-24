import { useQuery, QueryFunction } from "@tanstack/react-query";
import { API } from "./api";
import { TMovie } from "@/types/TMovie";

export const searchResultKeys = {
  all: ["searchResult"] as const,
  search: (query: string) => [...searchResultKeys.all, { query }] as const,
};

type TSearchQueryKey = ReturnType<typeof searchResultKeys.search>;

const fetchMovieData: QueryFunction<TMovie[], TSearchQueryKey> = async (
  _context
) => {
  const query = _context.queryKey[1].query;
  const response = await API.get(`search/movie?query=${query}`);
  return response.data.results;
};

const useMovieSearch = (
  searchInput: string
  // { onSuccess, cacheTime }: { onSuccess: () => void; cacheTime: number }
) => {
  const moviesQuery = useQuery({
    queryKey: searchResultKeys.search(searchInput),
    queryFn: fetchMovieData,
    // onSuccess,
    // cacheTime,
  });
  return moviesQuery;
};

export { useMovieSearch };
