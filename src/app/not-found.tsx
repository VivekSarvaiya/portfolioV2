import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 border-white/10 bg-white/5">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-display font-bold text-white">404 Page Not Found</h1>
          </div>

          <p className="mt-4 font-mono text-sm text-muted-foreground">
            The requested resource could not be found.
          </p>
          
          <div className="mt-6">
             <Link href="/" className="text-sm font-mono uppercase tracking-widest text-white hover:text-white/70 underline">
                Return Home
             </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

