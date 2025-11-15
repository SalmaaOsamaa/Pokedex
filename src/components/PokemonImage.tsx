interface PokemonImageProps {
  imageUrl: string;
  name: string;
}

export const PokemonImage = ({ imageUrl, name }: PokemonImageProps) => {
  return (
    <div className="w-64 h-64 flex items-center justify-center mb-6 bg-muted/30 rounded-full">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

