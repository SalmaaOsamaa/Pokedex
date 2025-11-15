interface InfiniteScrollObserverProps {
  observerRef: React.RefObject<HTMLDivElement>;
}

export const InfiniteScrollObserver = ({ observerRef }: InfiniteScrollObserverProps) => {
  return <div ref={observerRef} className="col-span-full h-10" />;
};

