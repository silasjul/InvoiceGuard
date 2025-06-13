import { Apple } from "lucide-react";
import React, { ReactNode } from "react";

export default function FeatureCard({
    header,
    icon,
    children,
}: {
    icon: ReactNode;
    header: string;
    children: ReactNode;
}) {
    return (
        <div className="rounded-xl border shadow-lg p-8 bg-background">
            <div className="mb-4">{icon}</div>
            <h4 className="font-medium text-lg mb-4">{header}</h4>
            <p className="opacity-80">{children}</p>
        </div>
    );
}
