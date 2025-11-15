import { Ruler, Weight } from "lucide-react";
import { formatHeight, formatWeight } from "@/lib/pokemon-utils";

interface PokemonPhysicalStatsProps {
  height: number;
  weight: number;
}

export const PokemonPhysicalStats = ({ height, weight }: PokemonPhysicalStatsProps) => {
  return (
    <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
          <Ruler className="h-4 w-4" />
          <span className="text-sm">Height</span>
        </div>
        <p className="text-2xl font-semibold text-foreground">
          {formatHeight(height)}
        </p>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
          <Weight className="h-4 w-4" />
          <span className="text-sm">Weight</span>
        </div>
        <p className="text-2xl font-semibold text-foreground">
          {formatWeight(weight)}
        </p>
      </div>
    </div>
  );
};

