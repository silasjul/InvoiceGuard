"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import Text from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, Text);

export default function AnimatedText({
    startText,
    endText,
}: {
    startText: string;
    endText: string;
}) {
    const ref = useRef(null);

    useGSAP(() => {
        gsap.timeline()
            .to(ref.current, {
                delay: 1,
                duration: 1.5,
                text: endText,
                ease: "none",
            })
            .to(ref.current, {
                delay: 2,
                duration: 1.5,
                text: startText,
                ease: "none",
            });
    }, [endText]);

    return (
        <span
            ref={ref}
            className="inline-block whitespace-nowrap font-normal bg-accent rounded-lg px-1 py-0.5"
        >
            {startText}
        </span>
    );
}
