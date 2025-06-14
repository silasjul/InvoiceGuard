import React from "react";
import PriceCard from "./ui/price-card";

export default function Pricing() {
    return (
        <div className="flex gap-4 bg-gray-100">
            <PriceCard
                tier={"Free"}
                price={0}
                description={"Try our service for free"}
                advantages={[
                    "Manage reminders for up to 3 active invoices",
                    "Access to professional message templates",
                    "Basic 1-step reminder schedule",
                    "Basic reminder delivery tracking",
                    "InvoicePilot branding on emails",
                ]}
            />
            <PriceCard
                tier={"Basic"}
                price={19}
                description={"Great for freelancers"}
                advantages={[
                    "Manage reminders for up to 10 active invoices",
                    "Create your own custom messages",
                    "Customizable 3-step reminder sequences",
                    "Detailed email performance tracking",
                    "No InvoicePilot branding on emails",
                ]}
            />
            <PriceCard
                tier={"Pro"}
                price={99}
                description={"Advanced automation for growing teams"}
                advantages={[
                    "Unlimited active invoices for reminders",
                    "Custom and AI-powered message generation",
                    "Fully customizable reminder sequences",
                    "Detailed email performance tracking",
                    "No InvoicePilot branding on emails",
                ]}
            />
        </div>
    );
}
