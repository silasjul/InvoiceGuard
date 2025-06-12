import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <div className="h-[300vh]">
            <Navbar />
            <section>
                <div className="mt-[30vh] flex-col justify-center">
                    <h1 className="text-center text-6xl font-extrabold text-balance">
                        The Platform for Automated Invoice Reminders
                    </h1>
                </div>
            </section>
        </div>
    );
}
