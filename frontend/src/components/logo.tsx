import Link from "next/link";
import React from "react";

export default function Logo() {
    return (
        <Link className="flex gap-1 items-center" href={"/"}>
            <img src={"/logo.png"} alt={"logo"} width={33} height={33} />
            <h3 className="font-semibold">InvoicePilot</h3>
        </Link>
    );
}
