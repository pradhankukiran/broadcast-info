import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Broadcast = () => {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="absolute inset-0 w-full h-full bg-[length:200%_200%] bg-belgium-gradient-full animate-background-pan" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center min-h-screen py-8">
        
        <h1 className="text-5xl font-bold mb-12">Broadcasts</h1>
        <div className="w-full max-w-4xl px-4">
          <div className="space-y-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <Card key={index} className="bg-transparent border-secondary shadow-lg backdrop-blur-lg">
                <CardHeader>
                  <CardTitle>Broadcast {index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is a placeholder for broadcast details.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broadcast; 