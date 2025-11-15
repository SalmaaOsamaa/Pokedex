import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Pagination } from "@/components/Pagination";
import { PokemonListContent } from "@/components/PokemonListContent";
import { usePokemonData, CARDS_PER_PAGE } from "@/hooks/usePokemonData";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"page" | "infinite">("page");

  const {
    pagePokemons,
    allPokemons,
    isLoading,
    isLoadingInfinite,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    totalPages,
  } = usePokemonData(currentPage, viewMode);

  const observerTarget = useInfiniteScroll({
    enabled: viewMode === "infinite",
    hasNextPage: hasNextPage ?? false,
    isFetching: isFetchingNextPage,
    fetchNextPage,
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <PageHeader viewMode={viewMode} onViewModeChange={setViewMode} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <PokemonListContent
            viewMode={viewMode}
            pagePokemons={pagePokemons}
            allPokemons={allPokemons}
            isLoading={isLoading}
            isLoadingInfinite={isLoadingInfinite}
            observerRef={observerTarget}
            isFetchingNextPage={isFetchingNextPage}
            itemsPerPage={CARDS_PER_PAGE}
          />
        </div>

        {viewMode === "page" && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            itemsPerPage={CARDS_PER_PAGE}
          />
        )}
      </div>
    </div>
  );
};

export default MainPage;
