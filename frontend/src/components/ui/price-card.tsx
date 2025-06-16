import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

export default function PriceCard({
    tier,
    price,
    description,
    advantages,
    buttonText,
    highTier,
}: {
    tier: string;
    price: number;
    description: string;
    advantages: string[];
    buttonText: string;
    highTier?: boolean;
}) {
    return (
        <div
            className={`flex flex-col rounded-xl p-8 shadow-2xl w-[359px] ${
                highTier
                    ? "bg-gradient-to-b from-gradient-1 to-gradient-2 text-white"
                    : "bg-background border"
            }`}
        >
            <h4 className={`font-medium text-2xl mb-8`}>{tier}</h4>
            <h3 className="font-medium text-5xl">${price}</h3>
            <p className="opacity-80 mb-6">Per user/month, billed monthly</p>
            <p className="font-medium mb-2">{description}</p>
            {advantages.map((text, idx) => (
                <div
                    key={idx}
                    className="flex gap-2 text-base font-normal mb-2 opacity-90"
                >
                    <Check className="border rounded-sm w-5 h-5 p-0.5 mt-[2px]" />
                    {text}
                </div>
            ))}
            <div className="mt-auto">
                <Link href={"#sign-up"}>
                    <Button
                        className={`w-full h-12 mt-8 text-[17px] rounded-xl cursor-pointer ${
                            highTier &&
                            "bg-white text-black hover:text-white hover:bg-black"
                        }`}
                    >
                        {buttonText}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
