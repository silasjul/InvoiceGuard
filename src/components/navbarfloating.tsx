"use client";

import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Sections } from "@/app/page";
gsap.registerPlugin(ScrollTrigger);

export default function NavbarFloating({
    scrollToSection,
}: {
    scrollToSection: (sections: Sections) => void;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const pointerAuto = () => {
            if (!containerRef.current) return;
            console.log("entered");
            containerRef.current.style.pointerEvents = "auto";
        };
        const pointerNone = () => {
            if (!containerRef.current) return;
            console.log("back in");
            containerRef.current.style.pointerEvents = "none";
        };

        gsap.to(containerRef.current, {
            scrollTrigger: {
                start: "+=700",
                end: "+=300",
                scrub: true,
                onEnter: pointerAuto,
                onEnterBack: pointerNone,
                onLeaveBack: pointerNone,
                onLeave: pointerAuto,
            },
            opacity: 1,
        });
    });

    return (
        <div
            ref={containerRef}
            className={
                "flex justify-center items-center fixed z-20 left-1/2 -translate-x-1/2 top-8 w-fit mx-auto px-4 py-3 bg-background border rounded-full opacity-0 pointer-events-none"
            }
        >
            <Link className="flex gap-1 items-center mr-8" href={"/"}>
                <img src={"/logo.png"} alt={"logo"} width={33} height={33} />
            </Link>
            <div className="flex gap-12 font-medium *:hover:underline *:underline-offset-3 *:opacity-80 *:hover:opacity-100 *:duration-75">
                <div
                    className="hover:cursor-pointer"
                    onClick={() => scrollToSection("features")}
                >
                    Features
                </div>
                <div
                    className="hover:cursor-pointer"
                    onClick={() => scrollToSection("prices")}
                >
                    Pricing
                </div>
                <div
                    className="hover:cursor-pointer"
                    onClick={() => scrollToSection("contact")}
                >
                    Contact
                </div>
            </div>
            <Link className="ml-8" href={"#"}>
                <Button className="py-5 rounded-full text-base border hover:cursor-pointer bg-gradient-100 hover:bg-gradient-80">
                    Get Started
                </Button>
            </Link>
        </div>
    );
}
