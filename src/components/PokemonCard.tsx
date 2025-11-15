import { Pokemon } from "@/domain-models/Pokemon";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { extractPokemonId, getPokemonImageUrl } from "@/lib/pokemon-utils";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const navigate = useNavigate();
  const pokemonId = extractPokemonId(pokemon.url);
  const imageUrl = getPokemonImageUrl(pokemonId);

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.name}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-200 bg-card"
    >
      <div className="w-32 h-32 mb-4 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={pokemon.name}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-card-foreground mb-1">
        {pokemon.name}
      </h3>
    </Card>
  );
};
