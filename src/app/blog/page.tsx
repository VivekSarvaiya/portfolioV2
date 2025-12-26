import { BlogList } from "@/components/blog/BlogList";
import { Navbar } from "@/components/layout/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lab | Engineering Thoughts",
  description: "Artifacts of engineering decisions. Optimizing for clarity over brevity.",
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <BlogList />
      </main>
    </div>
  );
}

