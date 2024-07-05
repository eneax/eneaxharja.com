import * as React from "react";

import debounce from "@/lib/debounce";

interface UseInfiniteScrollProps<T> {
  data: T[];
  itemsPerPage: number;
}

interface UseInfiniteScrollReturn<T> {
  items: T[];
  hasMore: boolean;
  loaderRef: React.RefObject<HTMLDivElement>;
}

export default function useInfiniteScroll<T>({
  data,
  itemsPerPage,
}: UseInfiniteScrollProps<T>): UseInfiniteScrollReturn<T> {
  const [items, setItems] = React.useState<T[]>(data.slice(0, itemsPerPage));
  const [hasMore, setHasMore] = React.useState(data.length > itemsPerPage);
  const loaderRef = React.useRef<HTMLDivElement>(null);

  const loadMoreItems = React.useCallback(
    debounce(() => {
      const newItems = data.slice(items.length, items.length + itemsPerPage);
      setItems((prevItems) => [...prevItems, ...newItems]);
      if (newItems.length < itemsPerPage) {
        setHasMore(false);
      }
    }, 200),
    [data, items.length, itemsPerPage]
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreItems();
      }
    });
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    return () => {
      observer.disconnect();
      if (loadMoreItems.cancel) loadMoreItems.cancel();
    };
  }, [hasMore, loadMoreItems]);

  return { items, hasMore, loaderRef };
}
