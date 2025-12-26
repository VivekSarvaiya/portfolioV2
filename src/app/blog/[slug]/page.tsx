import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: ["Your Name"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.summary,
    author: {
      "@type": "Person",
      name: "Your Name",
    },
    keywords: post.tags.join(", "),
  };

  return (
    <article className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <ReadingProgress />
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-3xl mx-auto pt-32 px-6 md:px-12 pb-20">
        <Link 
          href="/#blog" 
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-white transition-colors mb-12 uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Lab
        </Link>

        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="flex flex-wrap gap-4 mb-6">
            {post.tags.map(tag => (
               <span key={tag} className="font-mono text-xs border border-white/20 px-2 py-1 text-muted-foreground rounded-full">
                 {tag}
               </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 font-mono text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
            <span className={`uppercase tracking-wider ${post.status === 'Evergreen' ? 'text-green-400' : 'text-yellow-400'}`}>
               ● {post.status}
            </span>
          </div>
        </header>

        <div 
          className="prose prose-invert prose-lg max-w-none font-serif 
            prose-headings:font-display prose-headings:font-bold 
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-strong:text-white prose-strong:font-semibold
            prose-code:font-mono prose-code:text-white/80 prose-code:bg-white/10 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10
            prose-blockquote:border-l-white/20 prose-blockquote:text-white/80 prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}

