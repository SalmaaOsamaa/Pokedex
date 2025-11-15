import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "@/network/getSinglePokemon";
import { getPokemonDetailImageUrl } from "@/lib/pokemon-utils";
import { BackButton } from "@/components/BackButton";
import { PokemonHeader } from "@/components/PokemonHeader";
import { PokemonImage } from "@/components/PokemonImage";
import { PokemonTypes } from "@/components/PokemonTypes";
import { PokemonPhysicalStats } from "@/components/PokemonPhysicalStats";
import { PokemonStats } from "@/components/PokemonStats";
import { PokemonAbilities } from "@/components/PokemonAbilities";
import { PokemonExperience } from "@/components/PokemonExperience";
import NotFound from "./NotFound";

const PokemonDetails = () => {
  const { name } = useParams<{ name: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => getPokemon(name!),
    enabled: !!name,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (error || !data) {
    return <NotFound />;
  }

  const pokemon = data;
  const imageUrl = getPokemonDetailImageUrl(pokemon);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <BackButton />

        <Card className="overflow-hidden">
          <PokemonHeader name={pokemon?.name || ''} id={pokemon?.id || 0} />

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <PokemonImage imageUrl={imageUrl} name={pokemon?.name || ''} />
                <PokemonTypes types={pokemon?.types || []} />
                <PokemonPhysicalStats
                  height={pokemon?.height || 0}
                  weight={pokemon?.weight || 0}
                />
              </div>

              <div>
                <PokemonStats stats={pokemon?.stats || []} />
                <PokemonAbilities abilities={pokemon?.abilities || []} />
                <PokemonExperience baseExperience={pokemon?.base_experience || 0} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PokemonDetails;
