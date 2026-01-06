"use client";

import { useRef } from "react";
import { Spotlight } from "../ui/spotlight";
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero'; // Adjust the import path as needed

export function Hero() {
  // const containerRef = useRef<HTMLDivElement>(null);

  // return (
  //   <section
  //     ref={containerRef}
  //     className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-background"
  //   >
  //     <Spotlight
  //       title="VIVEK SARVAIYA"
  //       subtitle="Building scalable and efficient software solutions, Designing for scale, ambiguity, and impact."
  //       titleClassName="text-5xl md:text-6xl font-extrabold"
  //       subtitleClassName="text-lg md:text-xl max-w-[600px]"
  //       actionsClassName="mt-8"
  //     />
  //   </section>
  // );
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PRODUCT', href: '#' },
    { label: 'STORE', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <MinimalistHero
      logoText="mnmlst."
      navLinks={navLinks}
      mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus."
      readMoreLink="#"
      imageSrc="https://ik.imagekit.io/fpxbgsota/image%2013.png?updatedAt=1753531863793"
      imageAlt="A portrait of a person in a black turtleneck, in profile."
      overlayText={{
        part1: 'Vivek',
        part2: 'Sarvaiya',
      }}
      socialLinks={socialLinks}
      locationText="Arlington Heights, IL"
    />
  );

}
