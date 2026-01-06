import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { SkillsGraph } from "@/components/home/SkillsGraph";
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { ServiceSection } from "@/components/home/ServiceSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ExperienceStream } from "@/components/home/ExperienceStream";
import { BlogList } from "@/components/blog/BlogList";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutMeSection } from "@/components/home/About";

export default function Home() {
  return (
    <div className=" selection:bg-white selection:text-black">
      {/* <Navbar /> */}

      <main>
        <Hero />
        <AboutMeSection />
        <SkillsGraph />
        <ExperienceStream />
        <ProjectShowcase />
        {/* <ServiceSection />
        <ProcessSection />
        <Testimonials /> */}
        <BlogList />
      </main>

      <footer className="py-12 px-6 md:px-12 border-t border-white/10 flex justify-between items-center font-mono text-xs text-muted-foreground">
        <div>
          © {new Date().getFullYear()} DEV_01
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/VivekSarvaiya" className="hover:text-white transition-colors">GITHUB</a>
          <a href="#" className="hover:text-white transition-colors">TWITTER</a>
          <a href="#" className="hover:text-white transition-colors">EMAIL</a>
        </div>
      </footer>
    </div>
  );
}

