import { Pokemon } from "@/domain-models/Pokemon";
import { PokemonCard } from "./PokemonCard";
import { PokemonCardSkeleton } from "./PokemonCardSkeleton";

interface PokemonGridProps {
  pokemons: Pokemon[];
  isLoading: boolean;
  itemsPerPage?: number;
}

export const PokemonGrid = ({ pokemons, isLoading, itemsPerPage = 10 }: PokemonGridProps) => {
  if (isLoading) {
    return (
      <>
        {Array.from({ length: itemsPerPage }).map((_, index) => (
          <PokemonCardSkeleton key={`skeleton-${index}`} />
        ))}
      </>
    );
  }

  return (
    <>
      {pokemons.map((pokemon: Pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </>
  );
};

