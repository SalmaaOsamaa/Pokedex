import { Skeleton } from "@/components/ui/skeleton";

export class PageSkeleton {
  static render() {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-64 mx-auto mb-3" />
            <Skeleton className="h-6 w-96 mx-auto mb-6" />
            <div className="flex gap-3 justify-center">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="p-6 flex flex-col items-center justify-center bg-card rounded-lg border">
                <Skeleton className="w-32 h-32 mb-4 rounded-full" />
                <Skeleton className="h-6 w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export const PageSkeletonComponent = () => {
  return PageSkeleton.render();
};

