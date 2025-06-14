import React from "react";
import PriceCard from "./ui/price-card";
import Hex from "./ui/hex";

export default function Pricing() {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center relative">
            <div
                className="absolute w-[800px] h-[130%] bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%  rounded-lg z-[1]
                  top-0 -translate-y-[10%] shadow-lg"
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
            <div className="flex flex-wrap gap-8 justify-center mx-10 z-10">
                <PriceCard
                    tier={"Free"}
                    price={0}
                    description={"Try our service for free"}
                    advantages={[
                        "Up to 3 active invoices",
                        "Access to professional message templates",
                        "Basic 1-step reminder schedule",
                        "Basic reminder delivery tracking",
                        "InvoicePilot branding on emails",
                    ]}
                    buttonText={"Get started for free"}
                />
                <PriceCard
                    tier={"Basic"}
                    price={20}
                    description={"Great for freelancers"}
                    advantages={[
                        "Up to 10 active invoices",
                        "Create your own custom messages",
                        "Customizable 3-step reminder sequences",
                        "Detailed email performance tracking",
                        "No InvoicePilot branding on emails",
                    ]}
                    buttonText={"Get started with Basic"}
                />
                <PriceCard
                    tier={"Pro"}
                    price={85}
                    description={"Advanced automation for growing teams"}
                    advantages={[
                        "Unlimited active invoices",
                        "Custom and AI-powered message generation",
                        "Fully customizable reminder sequences",
                        "Detailed email tracking",
                        "No InvoicePilot branding on emails",
                    ]}
                    buttonText={"Get started with Pro"}
                    highTier={true}
                />
            </div>
        </div>
    );
}
