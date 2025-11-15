import { ViewModeToggle } from "./ViewModeToggle";

interface PageHeaderProps {
  viewMode: "page" | "infinite";
  onViewModeChange: (mode: "page" | "infinite") => void;
}

export class PageHeader {
  static render({ viewMode, onViewModeChange }: PageHeaderProps) {
    return (
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
          <span className="text-accent">⚡</span>
          Pokédex
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          Discover and explore Pokémon with page controls
        </p>
        {ViewModeToggle.render({ viewMode, onViewModeChange })}
      </div>
    );
  }
}

