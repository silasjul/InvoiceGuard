"use client";

import React, { useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Logo from "./logo";
import { Sections } from "@/app/page";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar({
    scrollToSection,
}: {
    scrollToSection: (sections: Sections) => void;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.timeline({ defaults: { duration: 1, delay: 0 } })
            .to(containerRef.current, { opacity: 1 }, "A")
            .from(
                containerRef.current,
                {
                    y: "-50",
                },
                "A"
            );
    });

    return (
        <div
            ref={containerRef}
            className="hidden md:flex justify-center items-center m-8 opacity-0"
        >
            <div className="mr-auto">
                <Logo />
            </div>
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
            <div className="flex gap-4 ml-auto">
                <Link href={"#"}>
                    <Button className="py-5 bg-accent text-primary hover:text-background hover:cursor-pointer rounded-full">
                        Login
                    </Button>
                </Link>
                <Link href={"#"}>
                    <Button className="py-5 border hover:cursor-pointer bg-gradient-100 hover:bg-gradient-80 rounded-full">
                        Sign Up
                    </Button>
                </Link>
            </div>
        </div>
    );
}
