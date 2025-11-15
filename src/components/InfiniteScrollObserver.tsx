interface InfiniteScrollObserverProps {
  observerRef: React.RefObject<HTMLDivElement>;
}

export class InfiniteScrollObserver {
  static render({ observerRef }: InfiniteScrollObserverProps) {
    return <div ref={observerRef} className="col-span-full h-10" />;
  }
}

