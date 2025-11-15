import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export class BackButton {
  static render({ onNavigate }: { onNavigate: (path: string) => void }) {
    return (
      <Button
        variant="ghost"
        onClick={() => onNavigate("/")}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to List
      </Button>
    );
  }
}

export const BackButtonComponent = () => {
  const navigate = useNavigate();
  return BackButton.render({ onNavigate: navigate });
};

