import { Loader2 } from "lucide-react";

interface InfiniteScrollLoaderProps {
  isFetching: boolean;
}

export class InfiniteScrollLoader {
  static render({ isFetching }: InfiniteScrollLoaderProps) {
    if (!isFetching) return null;

    return (
      <div className="col-span-full flex flex-col items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary mb-3" />
        <p className="text-muted-foreground text-lg font-medium">
          Loading more Pokémon...
        </p>
      </div>
    );
  }
}

