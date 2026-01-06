import Component from '@/components/ui/stacking-card';

const services = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive, interactive user interfaces with modern frameworks like React, Next.js, and TypeScript. Creating seamless user experiences with pixel-perfect designs, smooth animations, and optimized performance across all devices.',
    link: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1000&auto=format&fit=crop',
  },
  {
    title: 'Backend Development',
    description:
      'Designing robust server-side architectures with Node.js, Express, and RESTful APIs. Implementing secure authentication, efficient data processing, and scalable microservices to power your applications.',
    link: 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=1000&auto=format&fit=crop',
  },
  {
    title: 'Database Design & Management',
    description:
      'Architecting efficient database solutions with MongoDB, MySQL, and PostgreSQL. Optimizing queries, ensuring data integrity, and implementing secure data storage strategies for high-performance applications.',
    link: 'https://images.unsplash.com/photo-1639322537231-2f206e06af84?w=1000&auto=format&fit=crop',
  },
  {
    title: 'DevOps & Deployment',
    description:
      'Streamlining deployment pipelines with CI/CD, containerization using Docker, and cloud infrastructure management. Ensuring reliable, scalable, and secure production environments with automated testing and monitoring.',
    link: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?w=1000&auto=format&fit=crop',
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
