import { getRegularAbilities, getHiddenAbility } from "@/lib/pokemon-utils";

interface PokemonAbilitiesProps {
  abilities: any[];
}

export class PokemonAbilities {
  static render({ abilities }: PokemonAbilitiesProps) {
    const regularAbilities = getRegularAbilities(abilities);
    const hiddenAbility = getHiddenAbility(abilities);

    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Abilities</h2>
        <div className="space-y-2">
          {regularAbilities.map((ability: string, index: number) => (
            <p key={index} className="text-foreground capitalize">
              {ability}
            </p>
          ))}
          {hiddenAbility && (
            <p className="text-muted-foreground capitalize">
              {hiddenAbility} <span className="text-xs">(Hidden)</span>
            </p>
          )}
        </div>
      </div>
    );
  }
}

