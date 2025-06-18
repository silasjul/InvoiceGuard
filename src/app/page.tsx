"use client";

import Contact from "@/components/contact";
import Features from "@/components/features";
import HexGrid from "@/components/hexgrid";
import Mailexample from "@/components/mailexample";
import Navbar from "@/components/navbar";
import NavbarFloating from "@/components/navbarfloating";
import Pricing from "@/components/pricing";
import { Button } from "@/components/ui/button";
import Hex from "@/components/ui/hex";
import SectionDivider from "@/components/ui/section-divider";
import { Send } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(SplitText);

export default function Home() {
    const refH1A = useRef<HTMLHeadingElement>(null);
    const refH1B = useRef<HTMLHeadingElement>(null);
    const refP = useRef<HTMLParagraphElement>(null);
    const refDesign = useRef<HTMLDivElement>(null);
    const refBtn = useRef<HTMLAnchorElement>(null);
    const refPoweredAI = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const splitP = SplitText.create(refP.current, {
            type: "chars",
        });

        gsap.from([refH1A.current, refH1B.current, refDesign.current], {
            opacity: 0,
            delay: 0.5,
            duration: 1,
            y: 50,
            ease: "power1.out",
        });
        gsap.from(splitP.chars, { opacity: 0, delay: 1.2, stagger: 0.03 });
        gsap.from([refBtn.current, refPoweredAI.current], {
            opacity: 0,
            delay: 1.2,
            duration: 2,
            y: 50,
        });
    });

    return (
        <div>
            <Navbar />
            <NavbarFloating />
            <section className="flex flex-col mt-[10vh] justify-center items-center bg-gradient-to-b from-transparent to-gray-100 ">
                <div ref={refDesign} className="flex justify-center mb-8">
                    <div className="w-fit rounded-xl px-4 py-2 shadow-lg flex gap-2 justify-center">
                        <Send />
                        <p className="text-center font-medium gradient-text">
                            Design your messages
                        </p>
                    </div>
                </div>
                <h1
                    ref={refH1A}
                    className="text-center text-7xl font-extrabold text-balance"
                >
                    The Platform for Automated
                </h1>
                <h1
                    ref={refH1B}
                    className="text-center text-7xl font-extrabold text-balance gradient-text"
                >
                    Invoice Reminders
                </h1>
                <div className="mt-4 mb-16 flex justify-center">
                    <p
                        ref={refP}
                        className="text-muted-foreground text-xl text-center"
                    >
                        Stop wasting hours chasing overdue invoices.
                    </p>
                </div>
                <div className="absolute left-0 -translate-x-1/2 top-1/4 z-[-1]">
                    <Hex posX={-200} posY={500} delay={0.5} size={400} />
                    <Hex posX={100} posY={600} delay={0.3} size={300} />
                </div>
                <div className="absolute right-0 -translate-x-1/2 top-1/4 z-[-1]">
                    <Hex posX={-450} posY={600} delay={0.5} size={200} />
                    <Hex posX={-200} posY={440} delay={0.5} size={400} />
                </div>
                <Link ref={refBtn} href={"#"}>
                    <Button className="py-6 px-8 mb-12 rounded-full text-md hover:scale-105 duration-150 hover:cursor-pointer bg-gradient-100 hover:bg-gradient-100 hover-glow">
                        Get Started
                    </Button>
                </Link>
                <HexGrid />
                <Mailexample />
                <p ref={refPoweredAI} className="opacity-30 font-medium mt-4">
                    Powered by AI
                </p>
            </section>
            <SectionDivider vh={20} />
            <Features />
            <SectionDivider vh={35} />
            <Pricing />
            <SectionDivider vh={30} />
            <Contact />
        </div>
    );
}
