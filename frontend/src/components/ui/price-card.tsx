import { Check } from "lucide-react";
import React from "react";

export default function PriceCard({
    tier,
    price,
    description,
    advantages,
}: {
    tier: string;
    price: number;
    description: string;
    advantages: string[];
}) {
    return (
        <div className="border rounded-xl p-4 bg-background shadow-lg">
            <h4 className="font-semibold">{tier}</h4>
            <h3 className="font-bold">${price}</h3>
            <p className="font-medium">{description}</p>
            {advantages.map((text, idx) => (
                <div key={idx} className="flex gap-0.5 text-base font-normal">
                    <Check className="w-10 h-10" size={10} />
                    {text}
                </div>
            ))}
        </div>
    );
}
