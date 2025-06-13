import HexGrid from "@/components/hexgrid";
import Mailexample from "@/components/mailexample";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-[300vh]">
            <Navbar />
            <section className="flex flex-col mt-[10vh] justify-center items-center">
                <div className="flex justify-center mb-8">
                    <div className="w-fit rounded-xl px-4 py-2 shadow-lg flex gap-2 justify-center">
                        <Send />
                        <p className="text-center font-medium gradient-text">
                            Design your messages
                        </p>
                    </div>
                </div>
                <h1 className="text-center text-7xl font-extrabold text-balance">
                    The Platform for Automated
                </h1>
                <h1 className="text-center text-7xl font-extrabold text-balance gradient-text">
                    Invoice Reminders
                </h1>
                <div className="mt-4 mb-16 flex justify-center">
                    <p className="text-muted-foreground text-xl text-center">
                        Stop wasting hours chasing overdue invoices.
                    </p>
                </div>
                <Link href={"#"}>
                    <Button className="py-6 px-8 mb-12 rounded-full text-md hover:scale-105 duration-200 hover:cursor-pointer bg-gradient-100 hover:bg-gradient-100 hover-glow">
                        Get Started
                    </Button>
                </Link>
                <Mailexample />
                <HexGrid />
            </section>
        </div>
    );
}
