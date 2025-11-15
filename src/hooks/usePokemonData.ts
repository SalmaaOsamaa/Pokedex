import { useMemo } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getPokemons } from "@/network/getPokemons";
import { Pokemon } from "@/domain-models/Pokemon";

const CARDS_PER_PAGE = 10;

export const usePokemonData = (
  currentPage: number,
  viewMode: "page" | "infinite"
) => {
  const offset = useMemo(() => (currentPage - 1) * CARDS_PER_PAGE, [currentPage]);

  const { data, isLoading } = useQuery({
    queryKey: ['pokemon', currentPage],
    queryFn: () => getPokemons(CARDS_PER_PAGE, offset),
    enabled: viewMode === "page",
  });

  const {
    data: infiniteData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isLoadingInfinite,
  } = useInfiniteQuery({
    queryKey: ['pokemon-infinite'],
    queryFn: ({ pageParam = 0 }) => getPokemons(CARDS_PER_PAGE, pageParam),
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const url = new URL(lastPage.next);
      const offsetParam = url.searchParams.get('offset');
      return offsetParam ? parseInt(offsetParam) : undefined;
    },
    enabled: viewMode === "infinite",
    initialPageParam: 0,
  });

  const allPokemons = useMemo(() => {
    if (viewMode === "infinite" && infiniteData?.pages) {
      return infiniteData.pages.flatMap((page) => page.results || []);
    }
    return [];
  }, [infiniteData, viewMode]);

  const pagePokemons = useMemo(() => data?.results || [], [data?.results]);

  const totalPages = useMemo(() => {
    if (viewMode === "page" && data?.count) {
      return Math.ceil(data.count / CARDS_PER_PAGE);
    }
    return 1;
  }, [data?.count, viewMode]);

  return {
    pagePokemons,
    allPokemons,
    isLoading,
    isLoadingInfinite,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    totalPages,
  };
};

export { CARDS_PER_PAGE };

