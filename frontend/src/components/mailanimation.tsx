"use client";

import React, { useEffect, useState } from "react";
import AnimatedText from "@/components/ui/animated-text";

interface MailExample {
    day: number;
    client_name: string;
    invoice_number: number;
    amount: number;
    due_date: Date;
    invoice_id: number;
}

const mailExamples: MailExample[] = [
    {
        day: 7,
        client_name: "Acme Corp.",
        invoice_number: 1923,
        amount: 500.0,
        due_date: new Date("2025-06-15"),
        invoice_id: 9183,
    },
    {
        day: 14,
        client_name: "Innovate Solutions",
        invoice_number: 1001,
        amount: 1250.75,
        due_date: new Date("2025-08-25"),
        invoice_id: 1243,
    },
    {
        day: 21,
        client_name: "Global Brands Ltd.",
        invoice_number: 2893,
        amount: 75.5,
        due_date: new Date("2025-04-12"),
        invoice_id: 12354,
    },
    {
        day: 28,
        client_name: "Local Artisans Co.",
        invoice_number: 9183,
        amount: 200.0,
        due_date: new Date("2025-03-01"),
        invoice_id: 81245,
    },
];

export default function Mailanimation() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => {
                const newIndex = (prev + 1) % mailExamples.length;
                console.log(newIndex);
                return newIndex;
            });
        }, 7000);

        // Cleanup
        return () => {
            console.log("Clearing interval:", intervalId);
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="p-8 border rounded-xl w-3/4 lg:w-[40vw] 2xl:w-[30vw]">
            <h3 className="font-semibold mb-2">
                Your day-
                {
                    <AnimatedText
                        startText={"{{day}}"}
                        endText={mailExamples[index].day.toString()}
                    />
                }{" "}
                due mail:
            </h3>
            <p className="text-gray-700 mb-2">
                Hi{" "}
                {
                    <AnimatedText
                        startText="{{client_name}}"
                        endText={mailExamples[index].client_name}
                    />
                }
                ,
            </p>
            <p className="text-gray-700 mb-2">
                Just a friendly reminder that Invoice INV-
                {
                    <AnimatedText
                        startText="{{invoice_number}}"
                        endText={mailExamples[index].invoice_number.toString()}
                    />
                }{" "}
                for $
                {
                    <AnimatedText
                        startText="{{amount}}"
                        endText={mailExamples[index].amount.toString()}
                    />
                }{" "}
                was due on{" "}
                {
                    <AnimatedText
                        startText="{{due_date}}"
                        endText={mailExamples[index].due_date.toDateString()}
                    />
                }
                .
            </p>
            <p className="text-gray-700 mb-2">
                You can view your invoice and make a payment here:
            </p>
            <p className="text-blue-600 underline cursor-pointer mb-4">
                https://yourcompany.com/pay/
                {
                    <AnimatedText
                        startText="{{invoice_id}}"
                        endText={mailExamples[index].invoice_id.toString()}
                    />
                }
            </p>
            <p className="text-gray-700">
                Please let us know if you have any questions or require further
                assistance.
            </p>
            <p className="text-gray-700 mt-4">Best regards,</p>
            <p className="font-medium text-gray-800">Your Company Name</p>
        </div>
    );
}
