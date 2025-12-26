export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  status: "Evergreen" | "Draft" | "Archived";
  tags: string[];
  content: string; // HTML string for mockup purposes
}

export const blogPosts: BlogPost[] = [
  {
    id: "0x001",
    slug: "consistency-vs-availability-in-practice",
    title: "The Illusion of Immediate Consistency",
    summary: "Why we accepted eventual consistency for our notification engine and how it saved us 50% in infrastructure costs.",
    date: "2024-03-12",
    readTime: "8 min read",
    status: "Evergreen",
    tags: ["Distributed Systems", "Architecture", "CAP Theorem"],
    content: `
      <p class="lead">We are often taught the CAP theorem as a rigid triangle where you pick two. In practice, it's a spectrum of trade-offs defined by failure modes we are willing to tolerate.</p>
      
      <h3>The Constraint</h3>
      <p>When designing the notification engine for our high-throughput platform, the initial requirement was "immediate delivery." This implies strong consistency: if a user triggers an event, the notification must exist everywhere immediately.</p>
      
      <p>However, at 50k requests per second, "immediately" is a dangerous word. It requires locking, coordination, and latency.</p>
      
      <h3>The Pivot to Eventual Consistency</h3>
      <p>We realized that for a notification system, a 500ms delay is imperceptible to a human user but an eternity for a database lock. By moving to an eventually consistent model using Kafka and independent consumers, we decoupled the ingestion from the processing.</p>
      
      <pre><code>
// Conceptual change from Synchronous to Asynchronous
// BEFORE: 
await db.notifications.create(data); // Blocks response

// AFTER:
await producer.send('notifications', data); // Returns immediately
      </code></pre>

      <h3>The Trade-off</h3>
      <p>We traded <strong>system simplicity</strong> (synchronous code is easier to debug) for <strong>system resilience</strong> and <strong>throughput</strong>. The complexity moved to the operational layer: monitoring lag, handling dead letters, and ensuring idempotency.</p>
      
      <blockquote>
        "Complexity is never removed, only displaced. The job of the architect is to displace it to where it does the least harm."
      </blockquote>

      <h3>Conclusion</h3>
      <p>Consistency is expensive. Before you pay for it, ask if your user actually notices the receipt.</p>
    `
  },
  {
    id: "0x002",
    slug: "rethinking-state-management",
    title: "Local State First: A Rebellion Against Global Stores",
    summary: "Moving away from giant Redux blobs towards co-located logic and server state. A look at the mental model shift.",
    date: "2024-01-28",
    readTime: "6 min read",
    status: "Evergreen",
    tags: ["Frontend", "State", "React"],
    content: `
      <p class="lead">For years, we dumped everything into a global store. User sessions, form inputs, cache data. It felt organized, but it was actually a tightly coupled monolith on the client.</p>
      
      <h3>The Problem with "One Source of Truth"</h3>
      <p>When everything is global, the boundaries of your components blur. A button deep in the tree depends on a reducer defined five folders away. Refactoring becomes a game of Jenga.</p>
      
      <h3>The Server State Revolution</h3>
      <p>Tools like TanStack Query taught us that 80% of what we thought was "app state" was actually just "server cache." By treating it as such—data that can be stale, needs revalidation, and belongs to a URL—we deleted thousands of lines of boilerplate.</p>
      
      <h3>When Global Matters</h3>
      <p>We didn't kill the global store entirely. We just reserved it for things that truly are global: theme preferences, active user session, and feature flags. Everything else pushed down to the component or pulled from the server.</p>
    `
  },
  {
    id: "0x003",
    slug: "micro-interactions-physics",
    title: "The Physics of UI: Why Linear Transitions Feel Cheap",
    summary: "Exploring spring physics vs. bezier curves in animation. How to make software feel like it has mass and friction.",
    date: "2023-11-15",
    readTime: "5 min read",
    status: "Draft",
    tags: ["Design", "UX", "Motion"],
    content: `
      <p class="lead">In the real world, nothing moves linearly. Things accelerate, decelerate, and settle. When software ignores this, it feels alien.</p>
      
      <p>Using spring physics instead of duration-based animation allows interfaces to react to the user's velocity. It's the difference between a "video" of a movement and a "simulation" of a material.</p>
    `
  }
];
