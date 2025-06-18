"use client";

import React, { useEffect, useRef, useState } from "react";
import AnimatedText from "@/components/ui/animated-text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

export default function Mailexample() {
    const [index, setIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % mailExamples.length);
        }, 8000);

        return () => clearInterval(intervalId);
    }, []);

    useGSAP(() => {
        gsap.timeline({ defaults: { duration: 2, delay: 1.2 } })
            .to(containerRef.current, { opacity: 1 }, "A")
            .from(
                containerRef.current,
                {
                    y: "50",
                },
                "A"
            );
    });

    return (
        <div
            ref={containerRef}
            className="border rounded-xl opacity-0 w-3/4 lg:max-w-[45vw] 2xl:max-w-[35vw] bg-background"
        >
            <div className="m-1 min-h-[550] lg:min-h-[480] xl:min-h-[410] rounded-lg border *:px-4">
                <div className="bg-muted w-full py-1 rounded-lg rounded-b-none border-b-1">
                    <h3 className="font-semibold ">New message</h3>
                </div>
                <div className="w-full py-1 rounded-b-none border-b-1">
                    <h3 className="font-normal ">
                        <span className="font-medium">To:</span>{" "}
                        {
                            <AnimatedText
                                startText="{{client_mail}}"
                                endText={mailExamples[index].client_name}
                            />
                        }
                    </h3>
                </div>
                <div className="w-full py-1 rounded-b-none border-b-1">
                    <h3 className="font-normal ">
                        <span className="font-medium">Subject:</span> Follow Up:
                        Invoice{" "}
                        {
                            <AnimatedText
                                startText="{{invoice_number}}"
                                endText={mailExamples[
                                    index
                                ].invoice_number.toString()}
                            />
                        }{" "}
                        is{" "}
                        {
                            <AnimatedText
                                startText={"{{day}}"}
                                endText={mailExamples[index].day.toString()}
                            />
                        }{" "}
                        days Past Due
                    </h3>
                </div>
                <p className="text-gray-700 my-2">
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
                            endText={mailExamples[
                                index
                            ].invoice_number.toString()}
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
                            endText={mailExamples[
                                index
                            ].due_date.toDateString()}
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
                    Please let us know if you have any questions or require
                    further assistance.
                </p>
                <p className="text-gray-700 mt-4">Best regards,</p>
                <p className="font-medium text-gray-800 mb-2">
                    Your Company Name
                </p>
            </div>
        </div>
    );
}
