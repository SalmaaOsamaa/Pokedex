import { useEffect, useRef } from "react";

interface UseInfiniteScrollProps {
  enabled: boolean;
  hasNextPage: boolean;
  isFetching: boolean;
  fetchNextPage: () => void;
}

export const useInfiniteScroll = ({
  enabled,
  hasNextPage,
  isFetching,
  fetchNextPage,
}: UseInfiniteScrollProps) => {
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [enabled, hasNextPage, isFetching, fetchNextPage]);

  return observerTarget;
};

