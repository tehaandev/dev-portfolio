import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
            <h2 className="text-lg font-semibold mb-2">Loading...</h2>
            <p className="text-sm text-muted-foreground text-center">
              Please wait while we load the content for you.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

