import { Button } from "@/components/ui/button";

interface ViewModeToggleProps {
  viewMode: "page" | "infinite";
  onViewModeChange: (mode: "page" | "infinite") => void;
}

export const ViewModeToggle = ({ viewMode, onViewModeChange }: ViewModeToggleProps) => {
  return (
    <div className="flex gap-3 justify-center">
      <Button
        variant={viewMode === "page" ? "default" : "secondary"}
        onClick={() => onViewModeChange("page")}
      >
        Page Controls
      </Button>
      <Button
        variant={viewMode === "infinite" ? "default" : "secondary"}
        onClick={() => onViewModeChange("infinite")}
      >
        Infinite Scroll
      </Button>
    </div>
  );
};

