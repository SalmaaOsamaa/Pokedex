import { Progress } from "@/components/ui/progress";
import { getStatValue } from "@/lib/pokemon-utils";

interface PokemonStatsProps {
  stats: any[];
}

const STATS = [
  { label: "HP", value: "hp" },
  { label: "Attack", value: "attack" },
  { label: "Defense", value: "defense" },
  { label: "Sp. Attack", value: "special-attack" },
  { label: "Sp. Defense", value: "special-defense" },
  { label: "Speed", value: "speed" },
];

export class PokemonStats {
  static render({ stats }: PokemonStatsProps) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Base Stats</h2>
        <div className="space-y-4 mb-8">
          {STATS.map((stat) => {
            const value = getStatValue(stats, stat.value);
            return (
              <div key={stat.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">
                    {stat.label}
                  </span>
                  <span className="text-sm text-muted-foreground">{value}</span>
                </div>
                <Progress value={(value / 120) * 100} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

