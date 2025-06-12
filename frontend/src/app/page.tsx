import Navbar from "@/components/navbar";
import { Send } from "lucide-react";

export default function Home() {
    return (
        <div className="h-[300vh]">
            <Navbar />
            <section className="flex-col mt-[10vh] justify-center">
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
                <div className="mt-4 flex justify-center">
                    <p className="text-muted-foreground text-xl text-center w-1/2">
                        Stop wasting hours chasing overdue invoices.
                    </p>
                </div>
            </section>
        </div>
    );
}
