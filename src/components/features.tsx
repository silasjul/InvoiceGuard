import React, { useRef } from "react";
import FeatureCard from "./ui/feature-card";
import {
    CalendarArrowUp,
    FastForward,
    HeartHandshake,
    SlidersHorizontal,
} from "lucide-react";
import Hex from "./ui/hex";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Features() {
    const header = useRef<HTMLDivElement>(null);
    const cards = useRef<HTMLDivElement>(null);

    const iconSize = 40;
    const iconColor = "#0575e6";

    useGSAP(() => {
        if (header.current) {
            gsap.from(header.current.children, {
                scrollTrigger: {
                    trigger: header.current,
                    start: "bottom bottom",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power1.inout",
            });
        }

        if (cards.current) {
            gsap.from(cards.current.children, {
                scrollTrigger: {
                    trigger: cards.current,
                    start: "top center",
                },
                y: 70,
                rotateX: -90,
                opacity: 0,
                duration: .8,
                stagger: 0.25,
                ease: "power1.inout",
            });
        }
    });

    return (
        <section className="bg-gray-100 flex justify-center">
            <div className="absolute left-0 opacity-80">
                <Hex posX={-100} posY={500} size={300} delay={0} />
                <Hex posX={0} posY={200} size={200} delay={0.5} />
            </div>
            <div className="absolute right-0 opacity-80">
                <Hex posX={-120} posY={400} size={300} delay={0} />
            </div>
            <div className="w-3/4 xl:w-3/5 z-10">
                <div ref={header}>
                    <h5 className="font-medium text-lg text-gradient-1">
                        Custom Automated Messaging
                    </h5>
                    <h3 className="font-bold text-5xl lg:text-6xl mb-16">
                        We help you Save Time & Gain{<br />}Financial Clarity
                    </h3>
                </div>
                <div
                    ref={cards}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                >
                    <FeatureCard
                        icon={<FastForward size={iconSize} color={iconColor} />}
                        header={"Automate Reminders, Accelerate Payments"}
                    >
                        Stop manual chasing! InvoiceGuard automatically sends
                        your payment reminders via email. Customize timing and
                        frequency to significantly reduce overdue payments.
                    </FeatureCard>

                    <FeatureCard
                        icon={
                            <HeartHandshake size={iconSize} color={iconColor} />
                        }
                        header={
                            "Personalized Communication, Stronger Relationships"
                        }
                    >
                        Foster strong client relationships with personalized,
                        on-brand reminders. Effortlessly craft messages with AI,
                        choose from professional templates, or tailor your own
                        unique text. Define precisely which message goes out on
                        each specific day to adjust tone and optimize
                        engagement.
                    </FeatureCard>

                    <FeatureCard
                        icon={
                            <CalendarArrowUp
                                size={iconSize}
                                color={iconColor}
                            />
                        }
                        header={"Gain Clarity, Save Time & Resources"}
                    >
                        Gain a clear overview of your reminder process.
                        InvoiceGuard lets you easily see which clients have
                        received specific reminders. Efficiently manage your
                        follow-up list by instantly removing recipients who've
                        paid or no longer need nudges.
                    </FeatureCard>
                    <FeatureCard
                        icon={
                            <SlidersHorizontal
                                size={iconSize}
                                color={iconColor}
                            />
                        }
                        header={"Precise Debtor & Reminder Control"}
                    >
                        Gain ultimate control over automated reminders. Easily
                        add clients to your list of follow-ups. Remove
                        recipients if an invoice is paid or no longer needs
                        nudges, ensuring perfectly timed and relevant
                        communication.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
}
