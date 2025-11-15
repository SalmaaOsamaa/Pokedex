import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export class ErrorFallbackComponent {
  static render({ error, resetErrorBoundary }: ErrorFallbackProps) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-muted p-4">
        <Card className="p-8 max-w-md w-full text-center">
          <h1 className="mb-4 text-4xl font-bold text-destructive">
            Something went wrong
          </h1>
          <p className="mb-4 text-lg text-muted-foreground">
            We encountered an unexpected error
          </p>
          <details className="mb-4 text-left">
            <summary className="cursor-pointer text-sm font-semibold mb-2">
              Error Details
            </summary>
            <pre className="text-xs bg-muted p-2 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
          <Button onClick={resetErrorBoundary} className="w-full">
            Try Again
          </Button>
        </Card>
      </div>
    );
  }
}

