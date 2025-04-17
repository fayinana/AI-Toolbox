// app/tools/[toolId]/not-found.js
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ToolNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold mb-4">Tool Not Found</h1>
        <p className="mb-6">
          The requested AI tool doesn't exist in our toolbox.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild variant="default">
            <Link href="/toolbox">Browse All Tools</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
