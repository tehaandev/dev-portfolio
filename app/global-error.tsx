"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Header />
          <main className="flex-grow flex items-center justify-center px-4 py-16">
            <div className="container max-w-2xl mx-auto">
              <Card className="border-destructive/50">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Error</CardTitle>
                  <CardDescription className="text-base">
                    An error occurred that prevented the application from
                    loading properly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Error details for development */}
                  {process.env.NODE_ENV === "development" && (
                    <div className="rounded-lg bg-muted p-4">
                      <h3 className="font-semibold text-sm mb-2">
                        Error Details (Development Only):
                      </h3>
                      <p className="text-sm font-mono text-muted-foreground break-all">
                        {error.message}
                      </p>
                      {error.digest && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Error ID: {error.digest}
                        </p>
                      )}
                      {error.stack && (
                        <details className="mt-2">
                          <summary className="text-xs cursor-pointer hover:text-foreground">
                            Stack Trace
                          </summary>
                          <pre className="text-xs mt-2 whitespace-pre-wrap overflow-auto max-h-40">
                            {error.stack}
                          </pre>
                        </details>
                      )}
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={reset} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Reload Application
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="flex items-center gap-2 bg-transparent"
                    >
                      <Link href="/">
                        <Home className="h-4 w-4" />
                        Go Home
                      </Link>
                    </Button>
                  </div>

                  {/* Additional help */}
                  <div className="text-center text-sm text-muted-foreground">
                    <p>
                      {`This is a critical system error. If reloading doesn't
                      help, please`}
                      <Link
                        href="/contact"
                        className="text-primary hover:underline"
                      >
                        contact me
                      </Link>{" "}
                      with details about what you were doing when this occurred.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
          <Footer />
        </div>

        {/* Include minimal CSS for styling */}
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          html,
          body {
            margin: 0;
            padding: 0;
            font-family:
              -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
              "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
          }
        `}</style>
      </body>
    </html>
  );
}

