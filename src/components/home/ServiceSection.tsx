import Component from '@/components/ui/stacking-card';

const services = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive, interactive user interfaces with modern frameworks like React, Next.js, and TypeScript. Creating seamless user experiences with pixel-perfect designs, smooth animations, and optimized performance across all devices.',
    link: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Backend Development',
    description:
      'Designing robust server-side architectures with Node.js, Express, and RESTful APIs. Implementing secure authentication, efficient data processing, and scalable microservices to power your applications.',
    link: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Database Design & Management',
    description:
      'Architecting efficient database solutions with MongoDB, MySQL, and PostgreSQL. Optimizing queries, ensuring data integrity, and implementing secure data storage strategies for high-performance applications.',
    link: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'API Development & Integration',
    description:
      'Creating RESTful and GraphQL APIs with comprehensive documentation. Integrating third-party services, implementing webhooks, and ensuring seamless communication between frontend and backend systems.',
    link: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'DevOps & Deployment',
    description:
      'Streamlining deployment pipelines with CI/CD, containerization using Docker, and cloud infrastructure management. Ensuring reliable, scalable, and secure production environments with automated testing and monitoring.',
    link: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop',
  },
];

function ServiceSection() {
  return (
    <section id="services" className="py-32 px-6 md:px-12">
      <Component projects={services} />
    </section>
  );
}

export { ServiceSection };
