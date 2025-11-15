interface PokemonExperienceProps {
  baseExperience: number;
}

export const PokemonExperience = ({ baseExperience }: PokemonExperienceProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">
        Base Experience
      </h2>
      <p className="text-3xl font-bold text-primary">
        {baseExperience || 0} XP
      </p>
    </div>
  );
};

