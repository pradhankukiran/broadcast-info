import { useEffect, useState } from "react";

export function useBackendStatus(pollInterval = 3000) {
  const [ready, setReady] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    let isMounted = true;

    async function fetchStatus() {
      try {
        const res = await fetch("/api/status", { cache: "no-store" });
        if (!isMounted) return;
        if (res.ok) {
          const data = await res.json();
          setReady(Boolean(data?.ready));
        } else {
          setReady(false);
        }
      } catch {
        if (isMounted) setReady(false);
      }
    }

    fetchStatus();
    const id = setInterval(fetchStatus, pollInterval);

    return () => {
      isMounted = false;
      clearInterval(id);
    };
  }, [pollInterval]);

  return ready;
} 