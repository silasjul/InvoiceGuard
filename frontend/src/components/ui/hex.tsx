"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

export default function Hex({
    posX,
    posY,
    size,
    delay,
}: {
    posX: number;
    posY: number;
    size: number;
    delay: number;
}) {
    const container = useRef<SVGGElement>(null);

    useGSAP(() => {
        if (!container.current) return;

        const randomDirection = () => {
            const direction = Math.random() > 0.5 ? 1 : -1;
            return `+=${30 * direction}`;
        };

        gsap.timeline()
            .to(container.current, {
                delay: delay,
                duration: 2,
                opacity: 1,
                ease: "power1.inOut",
            })
            .to(container.current, {
                duration: 4,
                opacity: 0.4,
                x: () => randomDirection(),
                y: () => randomDirection(),
                yoyo: true,
                repeat: -1,
                ease: "power1.inOut",
            });
    });

    return (
        <svg
            className={`absolute overflow-visible rotate-90`}
            style={{ left: posX, top: posY, width: size, height: size }}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 800 800"
            opacity="1"
        >
            <defs>
                <filter
                    id="nnneon-filter"
                    x="-100%"
                    y="-100%"
                    width="400%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feGaussianBlur
                        stdDeviation="13 14"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        in="SourceGraphic"
                        edgeMode="none"
                        result="blur"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="nnneon-filter2"
                    x="-100%"
                    y="-100%"
                    width="400%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feGaussianBlur
                        stdDeviation="32 55"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        in="SourceGraphic"
                        edgeMode="none"
                        result="blur"
                    ></feGaussianBlur>
                </filter>
            </defs>
            <g
                ref={container}
                strokeWidth="24"
                stroke="hsl(205, 78%, 53%)"
                fill="none"
                className="opacity-0"
            >
                <path
                    d="M400.00001525878906 120.5628662109375L642.0000307224329 260.2814365380505V539.7185771922766L400.00001525878906 679.4371475193896L157.99999979514524 539.7185771922766V260.2814365380505L400.00001525878906 120.5628662109375Z "
                    filter="url(#nnneon-filter)"
                ></path>
                <path
                    d="M400.00001525878906 120.5628662109375L642.0000307224329 260.2814365380505V539.7185771922766L400.00001525878906 679.4371475193896L157.99999979514524 539.7185771922766V260.2814365380505L400.00001525878906 120.5628662109375Z "
                    filter="url(#nnneon-filter2)"
                ></path>
                <path
                    d="M400.00001525878906 120.5628662109375L642.0000307224329 260.2814365380505V539.7185771922766L400.00001525878906 679.4371475193896L157.99999979514524 539.7185771922766V260.2814365380505L400.00001525878906 120.5628662109375Z "
                    filter="url(#nnneon-filter2)"
                ></path>
                <path d="M400.00001525878906 120.5628662109375L642.0000307224329 260.2814365380505V539.7185771922766L400.00001525878906 679.4371475193896L157.99999979514524 539.7185771922766V260.2814365380505L400.00001525878906 120.5628662109375Z "></path>
            </g>
        </svg>
    );
}
