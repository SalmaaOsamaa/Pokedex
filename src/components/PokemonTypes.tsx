import { Badge } from "@/components/ui/badge";
import { getTypeColor } from "@/lib/pokemon-utils";

interface PokemonTypesProps {
  types: any[];
}

export class PokemonTypes {
  static render({ types }: PokemonTypesProps) {
    return (
      <div className="flex gap-2 mb-6">
        {types?.map((type: any, index: number) => (
          <Badge
            key={index}
            className={`${getTypeColor(type.type.name)} text-white`}
          >
            {type.type.name}
          </Badge>
        ))}
      </div>
    );
  }
}

