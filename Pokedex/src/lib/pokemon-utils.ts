export const extractPokemonId = (url: string): string | undefined => {
  const match = /pokemon\/(\d+)\//.exec(url);
  return match?.[1];
};

export const getPokemonImageUrl = (pokemonId: string | undefined): string => {
  if (!pokemonId) return '';
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
};

export const getPokemonDetailImageUrl = (pokemon: any): string => {
  return (
    pokemon?.sprites?.other?.['official-artwork']?.front_default ||
    pokemon?.sprites?.front_default ||
    ''
  );
};

export const getTypeColor = (type: string): string => {
  const colors: Record<string, string> = {
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    bug: "bg-lime-600",
    normal: "bg-gray-400",
    electric: "bg-yellow-500",
    poison: "bg-purple-500",
    ground: "bg-amber-600",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    ice: "bg-cyan-400",
    dragon: "bg-violet-600",
    dark: "bg-gray-700",
    fairy: "bg-pink-300",
    fighting: "bg-red-700",
    rock: "bg-amber-800",
    ghost: "bg-purple-700",
    steel: "bg-gray-500",
  };
  return colors[type.toLowerCase()] || "bg-primary";
};

export const formatHeight = (height: number): string => {
  return height ? `${(height / 10).toFixed(1)} m` : 'N/A';
};

export const formatWeight = (weight: number): string => {
  return weight ? `${(weight / 10).toFixed(1)} kg` : 'N/A';
};

export const getStatValue = (stats: any[], statName: string): number => {
  const stat = stats?.find((s: any) => s.stat.name === statName);
  return stat?.base_stat || 0;
};

export const getRegularAbilities = (abilities: any[]): string[] => {
  return abilities
    ?.filter((a: any) => !a.is_hidden)
    ?.map((a: any) => a.ability.name) || [];
};

export const getHiddenAbility = (abilities: any[]): string | undefined => {
  return abilities?.find((a: any) => a.is_hidden)?.ability?.name;
};
