import React, { useRef } from "react";
import PriceCard from "./ui/price-card";
import Hex from "./ui/hex";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Pricing() {
    const prices = useRef<HTMLDivElement>(null);
    const bg = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (prices.current) {
            gsap.from([prices.current.children], {
                scrollTrigger: {
                    trigger: prices.current,
                    start: "top bottom", // when the top of the trigger hits the bottom of the viewport
                    end: "bottom center", // when the bottom of the trigger hits the top of the viewport
                    scrub: true,
                },
                y: 100,
                duration: 1,
            });
        }
    });

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center relative">
            <div
                ref={bg}
                className="absolute w-full xl:w-[800px] h-[115%] xl:h-[130%] bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%  xl:rounded-lg z-[1]
                  top-0 -translate-y-[5%] xl:-translate-y-[10%] shadow-lg"
            />
            <div className="absolute z-[0]">
                <Hex posX={200} posY={-300} size={800} delay={0} />
                <Hex posX={-600} posY={-300} size={300} delay={1} />
            </div>
            <div className="z-10">
                <h5 className="font-medium text-lg text-white opacity-60 text-center">
                    Get Paid Faster
                </h5>
                <h3 className="font-bold text-6xl mb-16 text-center">
                    Plans and pricing
                </h3>
            </div>
            <div
                ref={prices}
                className="flex flex-wrap gap-8 justify-center mx-10 z-10"
            >
                <PriceCard
                    tier={"Free"}
                    price={0}
                    description={"Try our service for free"}
                    advantages={[
                        "Up to 3 active clients",
                        "Access to professional message templates",
                        "Basic 1-step reminder schedule",
                        "Email delivery tracking",
                        "InvoicePilot branding on emails",
                    ]}
                    buttonText={"Get started for free"}
                />
                <PriceCard
                    tier={"Basic"}
                    price={12}
                    description={"Great for freelancers"}
                    advantages={[
                        "Up to 25 active clients",
                        "Create your own custom messages",
                        "Customizable 3-step reminder schedules",
                        "Email delivery tracking",
                        "No InvoicePilot branding on emails",
                    ]}
                    buttonText={"Get started with Basic"}
                />
                <PriceCard
                    tier={"Pro"}
                    price={29}
                    description={"Advanced automation for growing teams"}
                    advantages={[
                        "Everything in Basic",
                        "Unlimited active clients",
                        "Custom and AI-powered message generation",
                        "Fully customizable reminder schedules",
                        "Advanced email open tracking",
                    ]}
                    buttonText={"Get started with Pro"}
                    highTier={true}
                />
            </div>
        </div>
    );
}
