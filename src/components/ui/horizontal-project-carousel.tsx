"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ThermalSense AI",
    category: "AI & Space Tech",
    year: "2025",
    slug: "thermalsense-ai",
    url: "/project/prj1.png",
    accent: "#c1e44a",
  },
  {
    id: 2,
    title: "ESG Auditor 2.0",
    category: "AI & Sustainability",
    year: "2025",
    slug: "esg-auditor-2",
    url: "/project/prj2.png",
    accent: "#4ade80",
  },
  {
    id: 3,
    title: "Attendinn System",
    category: "Full Stack & EdTech",
    year: "2025",
    slug: "attendinn-system",
    url: "/project/prj5.png",
    accent: "#60a5fa",
  },
  {
    id: 4,
    title: "Racing Drone",
    category: "IoT & Embedded",
    year: "2026",
    slug: "fpv-drone-platform",
    url: "/project/prj4.png",
    accent: "#f472b6",
  },
  {
    id: 5,
    title: "StudyX AI",
    category: "Mobile & Health",
    year: "2025",
    slug: "jkfitness-app",
    url: "/project/prj3.png",
    accent: "#fb923c",
  },
];

export function HorizontalProjectCarousel() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-83%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background dark:bg-black">
      {/* Section label */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-10 left-8 md:left-14 z-20 flex items-center gap-4">
          <span className="text-[10px] font-mono font-black tracking-[0.4em] text-muted-foreground uppercase">
            Selected Projects
          </span>
          <div className="h-px w-12 bg-foreground/20" />
          <span className="text-[10px] font-mono font-black tracking-[0.3em] text-muted-foreground">
            {projects.length.toString().padStart(2, "0")}
          </span>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-14">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          <ViewAllCard />
        </motion.div>
      </div>
    </section>
  );
}

function ViewAllCard() {
  return (
    <Link href="/projects">
      <div className="group flex-shrink-0 flex items-center justify-center h-[70vh] w-[28vw] max-w-[360px] min-w-[220px] cursor-pointer">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-violet-600 group-hover:via-indigo-600 group-hover:to-cyan-500 transition-all duration-300"
          >
            <ArrowUpRight className="w-8 h-8 text-white transition-colors" />
          </motion.div>
          <div className="text-center space-y-2">
            <p className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-white/30 group-hover:text-white/50 transition-colors duration-300">
              All Work
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
              View All Projects
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative h-[70vh] w-[55vw] max-w-[700px] min-w-[340px] overflow-hidden bg-neutral-100 dark:bg-neutral-900 flex-shrink-0 cursor-pointer">
        {/* Background image */}
        <div
          style={{ backgroundImage: `url(${project.url})` }}
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Index number — top left */}
        <div className="absolute top-8 left-8 z-20">
          <span className="text-[11px] font-mono font-black tracking-[0.4em] text-white/40 uppercase">
            {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Arrow — top right, appears on hover */}
        <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: project.accent }}
          >
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
        </div>

        {/* Content — bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-10">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-2">
              <span
                className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase"
                style={{ color: project.accent }}
              >
                {project.category}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                {project.title}
              </h3>
            </div>
            <span className="text-[11px] font-mono text-white/30 font-bold tracking-widest shrink-0 pb-1">
              {project.year}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
