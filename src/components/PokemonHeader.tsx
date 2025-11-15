interface PokemonHeaderProps {
  name: string;
  id: number;
}

export const PokemonHeader = ({ name, id }: PokemonHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-center">
      <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-2 mb-2 capitalize">
        <span>⚡</span>
        {name}
      </h1>
      <p className="text-white/80 text-lg">
        #{id.toString().padStart(4, "0")}
      </p>
    </div>
  );
};

