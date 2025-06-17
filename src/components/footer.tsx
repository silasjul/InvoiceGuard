import React from "react";
import Logo from "./logo";
import { ArrowUp, Copyright } from "lucide-react";

export default function Footer() {
    return (
        <div className="bg-background py-6 px-20 relative z-10">
            <div className="mb-6">
                <div className="w-fit">
                    <Logo />
                </div>
            </div>
            <div className="flex pt-4 opacity-80 mt-0 border-t border-gray-400">
                <div className="flex gap-1 items-center">
                    <Copyright size={16} /> 2025 InvoicePilot. All rights
                    reserved.
                </div>
                <div className="flex gap-1 items-center ml-auto text-blue-600 hover:underline hover:cursor-pointer underline-offset-6">
                    Back to top <ArrowUp size={20} />
                </div>
            </div>
        </div>
    );
}
