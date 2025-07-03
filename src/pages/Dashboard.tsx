import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";

const Dashboard = () => {
  type CardData = {
    date: Date;
    logs: string[];
  };

  const [cards, setCards] = useState<CardData[]>([]);

  const eventSourceRef = useRef<EventSource | null>(null);

  async function startPipeline() {
    try {
      const res = await fetch("/api/run", {
        method: "POST",
      });

      if (res.status === 202) {
        alert("Pipeline has started!");
        setCards((prevCards) => [...prevCards, { date: new Date(), logs: [] }]);

        if (eventSourceRef.current) {
          eventSourceRef.current.close();
        }

        const evtSource = new EventSource("/api/logs");

        evtSource.onmessage = (e) => {
          const { level, message, timestamp } = JSON.parse(e.data);
          const line = `[${timestamp}] ${level.toUpperCase()}: ${message}`;

          setCards((prevCards) => {
            if (prevCards.length === 0) return prevCards;
            const updated = [...prevCards];
            const lastIndex = updated.length - 1;
            updated[lastIndex] = {
              ...updated[lastIndex],
              logs: [...updated[lastIndex].logs, line],
            };
            return updated;
          });
        };

        evtSource.onerror = () => {
          console.error("Log stream lost; browser will retry automatically");
        };

        eventSourceRef.current = evtSource;
      } else if (res.status === 409) {
        alert("Pipeline is already running");
      } else {
        const { message } = await res.json();
        alert(`Unexpected response: ${message}`);
      }
    } catch (err) {
      alert("Could not reach backend: " + (err as Error).message);
    }
  }

  useEffect(() => {
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
    const year = date.getFullYear();
    const weekday = date
      .toLocaleDateString("en-US", { weekday: "long" })
      .toLowerCase();
    return `${day}-${month}-${year}-${weekday}`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="absolute inset-0 w-full h-full bg-[length:200%_200%] bg-belgium-gradient-full animate-background-pan" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center min-h-screen py-8">
        <div className="w-full max-w-4xl px-4 mb-12">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <Button onClick={startPipeline}>Start New Pipeline</Button>
          </div>
        </div>
        <div className="w-full max-w-4xl px-4">
          <div className="space-y-8">
            {cards.map((data, index) => (
              <Card
                key={index}
                className="bg-transparent border-secondary shadow-lg backdrop-blur-lg"
              >
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{formatDate(data.date)}</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {formatTime(data.date)}
                  </span>
                </CardHeader>
                <CardContent>
                  {data.logs.length === 0 ? (
                    <p className="text-muted-foreground">Waiting for logs...</p>
                  ) : (
                    <pre className="text-xs whitespace-pre-wrap">
                      {data.logs.join("\n")}
                    </pre>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
