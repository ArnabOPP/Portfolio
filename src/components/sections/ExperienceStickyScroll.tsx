"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { GraduationCap, BookOpen, Star, Binary, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExperienceStickyScroll({ isLowPowerMode = false }: { isLowPowerMode?: boolean }) {
    const journeyContent = [
        {
            label: "Higher Education • Current",
            title: "Institute of Engineering & Management",
            description: "Pursuing B.Tech in Computer Science Engineering with AI & ML specialization at IEM Saltlake, Kolkata. Actively building projects across AI, full-stack, IoT, and mobile domains, and participating in hackathons and technical communities.",
            content: (
                <div className="h-full w-full flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 relative group overflow-hidden border border-white/10">
                    {/* Background Logo */}
                    <div className="absolute inset-0">
                        <Image
                            src="/achievements/logo-2.png"
                            alt="IEM"
                            fill
                            className="object-cover opacity-50 dark:opacity-40 blur-[2px] scale-110"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-black/50 to-black/80" />
                    </div>

                    {/* Animated Background Element */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative mb-6">
                            <GraduationCap className={cn("w-20 h-20 text-white drop-shadow-lg", !isLowPowerMode && "animate-pulse")} />
                            <Binary className={cn("w-8 h-8 text-blue-400 absolute -top-2 -right-2 opacity-80", !isLowPowerMode && "animate-bounce")} />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {["B.Tech CSE", "AI & ML", "Saltlake, Kolkata"].map(s => (
                                <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-white/10 text-white border border-white/20 font-mono font-bold backdrop-blur-md shadow-lg">
                                    {s}
                                </span>
                            ))}
                        </div>
                        <p className="text-[10px] font-mono text-white/60 uppercase tracking-widest bg-black/20 px-2 py-1 rounded">IEM Saltlake</p>
                    </div>

                    {/* Holographic Scan Effect */}
                    {!isLowPowerMode && (
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-scan z-20" />
                    )}
                </div>
            ),
        },
        {
            label: "Foundation • Class 1 – 12",
            title: "Howrah Zilla School",
            description: "Completed schooling from Class 1 to Class 12 at Howrah Zilla School. Pursued the Science stream in higher secondary with focus on Physics, Chemistry, Mathematics and Computer Science, building strong analytical and logical foundations.",
            content: (
                <div className="h-full w-full flex items-center justify-center p-8 bg-black/5 dark:bg-white/5 relative group overflow-hidden border border-white/10">
                    <div className="absolute inset-0">
                        <Image
                            src="/achievements/images.jpeg"
                            alt="Howrah Zilla School"
                            fill
                            className="object-cover opacity-30 dark:opacity-20 blur-[2px] scale-110"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 via-rose-900/30 to-black/80" />
                    </div>

                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative mb-6">
                            <BookOpen className="w-20 h-20 text-white drop-shadow-lg hover:rotate-6 transition-transform duration-500" />
                            <Sparkles className={cn("w-6 h-6 text-yellow-400 absolute -bottom-2 -left-2", !isLowPowerMode && "animate-pulse")} />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {["Science Stream", "Howrah", "Class 1–12"].map(s => (
                                <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-white/10 text-white border border-white/20 font-mono font-bold backdrop-blur-md shadow-lg">
                                    {s}
                                </span>
                            ))}
                        </div>
                        <p className="text-[10px] font-mono text-white/60 uppercase tracking-widest bg-black/20 px-2 py-1 rounded">Howrah Zilla School</p>
                    </div>
                </div>
            ),
        }
    ];

    return (
        <div className="w-full">
            <StickyScroll content={journeyContent} isLowPowerMode={isLowPowerMode} />
        </div>
    );
}
