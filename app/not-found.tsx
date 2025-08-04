"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, FileQuestion, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="container max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <FileQuestion className="h-8 w-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold">
                Page Not Found
              </CardTitle>
              <CardDescription className="text-base">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Helpful suggestions */}
              <div className="text-center text-sm text-muted-foreground space-y-2">
                <p>Here are some things you can try:</p>
                <ul className="text-left space-y-1 max-w-md mx-auto">
                  <li>• Check the URL for typos</li>
                  <li>• Go back to the previous page</li>
                  <li>• Visit the homepage</li>
                  <li>• Use the navigation menu</li>
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => window.history.back()}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </Button>
                <Button asChild className="flex items-center gap-2">
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    Go Home
                  </Link>
                </Button>
              </div>

              {/* Additional help */}
              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Still can&apos;t find what you&apos;re looking for?{" "}
                  <Link
                    href="/#contact"
                    className="text-primary hover:underline"
                  >
                    Contact me
                  </Link>{" "}
                  and I&apos;ll help you out.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

