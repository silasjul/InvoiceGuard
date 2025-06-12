import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
    return (
        /* <div className="fixed left-1/2 -translate-x-1/2 top-8 lg:gap-20 sm:gap-10 w-fit mx-auto px-4 py-3 flex justify-center items-center border rounded-full"> */
        <div className="m-8 flex justify-center items-center">
            <Link className="flex gap-1 items-center mr-auto" href={"/"}>
                <img src={"/logo.png"} alt={"logo"} width={33} height={33} />
                <h3 className="font-semibold">InvoiceGuard</h3>
            </Link>
            <div className="flex gap-12 font-medium *:hover:underline *:underline-offset-3 *:opacity-80 *:hover:opacity-100 *:duration-75">
                <div className="hover:cursor-pointer">Features</div>
                <div className="hover:cursor-pointer">Pricing</div>
                <div className="hover:cursor-pointer">Contact</div>
            </div>
            <div className="flex gap-4 ml-auto">
                <Link href={"#"}>
                    <Button className="py-5 bg-accent text-primary hover:text-background border hover:cursor-pointer">
                        Login
                    </Button>
                </Link>
                <Link href={"#"}>
                    <Button className="py-5 border hover:cursor-pointer">
                        Sign Up
                    </Button>
                </Link>
            </div>
        </div>
    );
}
