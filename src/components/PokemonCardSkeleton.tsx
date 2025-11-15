import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export class PokemonCardSkeleton {
  static render() {
    return (
      <Card className="p-6 flex flex-col items-center justify-center bg-card">
        <div className="w-32 h-32 mb-4 flex items-center justify-center">
          <Skeleton className="w-full h-full" />
        </div>
        <Skeleton className="h-6 w-24 mb-1" />
      </Card>
    );
  }
}
