import Features from "@/components/features";
import Footer from "@/components/footer";
import HexGrid from "@/components/hexgrid";
import Mailexample from "@/components/mailexample";
import Navbar from "@/components/navbar";
import NavbarFloating from "@/components/navbarfloating";
import Pricing from "@/components/pricing";
import { Button } from "@/components/ui/button";
import Hex from "@/components/ui/hex";
import { Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Navbar />
            <NavbarFloating />
            <section className="flex flex-col mt-[10vh] justify-center items-center bg-gradient-to-b from-transparent to-gray-100 ">
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
                <div className="absolute left-0 -translate-x-1/2 top-1/4 z-[-1]">
                    <Hex posX={-200} posY={500} delay={0.5} size={400} />
                    <Hex posX={100} posY={600} delay={0.3} size={300} />
                </div>
                <div className="absolute right-0 -translate-x-1/2 top-1/4 z-[-1]">
                    <Hex posX={-450} posY={600} delay={0.5} size={200} />
                    <Hex posX={-200} posY={440} delay={0.5} size={400} />
                </div>
                <Link href={"#"}>
                    <Button className="py-6 px-8 mb-12 rounded-full text-md hover:scale-105 duration-200 hover:cursor-pointer bg-gradient-100 hover:bg-gradient-100 hover-glow">
                        Get Started
                    </Button>
                </Link>
                <HexGrid />
                <Mailexample />
            </section>
            <Features />
            <Pricing />
            <Footer />
        </div>
    );
}
