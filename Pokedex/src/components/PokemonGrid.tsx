import { Pokemon } from "@/domain-models/Pokemon";
import { PokemonCardComponent } from "./PokemonCard";
import { PokemonCardSkeleton } from "./PokemonCardSkeleton";

interface PokemonGridProps {
  pokemons: Pokemon[];
  isLoading: boolean;
  itemsPerPage?: number;
}

export class PokemonGrid {
  static render({ pokemons, isLoading, itemsPerPage = 10 }: PokemonGridProps) {
    if (isLoading) {
      return (
        <>
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <PokemonCardSkeleton.render key={`skeleton-${index}`} />
          ))}
        </>
      );
    }

    return (
      <>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonCardComponent key={pokemon.name} pokemon={pokemon} />
        ))}
      </>
    );
  }
}

