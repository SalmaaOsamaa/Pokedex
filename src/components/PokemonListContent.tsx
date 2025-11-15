import { Pokemon } from "@/domain-models/Pokemon";
import { PokemonCardComponent } from "./PokemonCard";
import { PokemonCardSkeleton } from "./PokemonCardSkeleton";
import { InfiniteScrollObserver } from "./InfiniteScrollObserver";
import { InfiniteScrollLoader } from "./InfiniteScrollLoader";

interface PokemonListContentProps {
  viewMode: "page" | "infinite";
  pagePokemons: Pokemon[];
  allPokemons: Pokemon[];
  isLoading: boolean;
  isLoadingInfinite: boolean;
  observerRef: React.RefObject<HTMLDivElement>;
  isFetchingNextPage: boolean;
  itemsPerPage: number;
}

export class PokemonListContent {
  static render({
    viewMode,
    pagePokemons,
    allPokemons,
    isLoading,
    isLoadingInfinite,
    observerRef,
    isFetchingNextPage,
    itemsPerPage,
  }: PokemonListContentProps) {
    if (viewMode === "page") {
      return (
        <>
          {isLoading
            ? Array.from({ length: itemsPerPage }).map((_, index) => (
                <PokemonCardSkeleton.render key={`skeleton-${index}`} />
              ))
            : pagePokemons.map((pokemon: Pokemon) => (
                <PokemonCardComponent key={pokemon.name} pokemon={pokemon} />
              ))}
        </>
      );
    }

    return (
      <>
        {isLoadingInfinite && allPokemons.length === 0
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <PokemonCardSkeleton.render key={`skeleton-${index}`} />
            ))
          : allPokemons.map((pokemon: Pokemon) => (
              <PokemonCardComponent key={pokemon.name} pokemon={pokemon} />
            ))}
        {InfiniteScrollObserver.render({ observerRef })}
        {InfiniteScrollLoader.render({ isFetching: isFetchingNextPage })}
      </>
    );
  }
}

