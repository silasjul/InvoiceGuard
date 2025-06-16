"use client";

import React from "react";
import ContactForm from "./contact-form";
import Hex from "./ui/hex";
import useWindowWidth from "@/hooks/useWindowHook";

export default function Contacts() {
    const windowWidth = useWindowWidth();

    return (
        <div className="bg-gradient-to-t from-gradient-80 to-gray-100 flex justify-center pb-30 overflow-hidden">
            <div className="absolute left-0 z-0">
                <Hex posX={0} posY={0} size={300} delay={0} />
                <Hex posX={-300} posY={230} size={800} delay={1} />
            </div>
            <div className="absolute right-0 z-0">
                <Hex posX={-350} posY={400} size={350} delay={0.3} />
            </div>
            <div className="relative flex bg-white w-[80%] md:w-[60%] rounded-xl mt-30 shadow-xl">
                <div className="flex-2 m-12">
                    <h5 className="font-medium text-lg text-gradient-1">
                        We'd love to help
                    </h5>
                    <h3 className="font-bold text-5xl mb-16">Contact us</h3>
                    <ContactForm />
                </div>
                <div className="xl:flex-3 flex justify-center items-center bg-[#0A192F] rounded-r-xl">
                    {windowWidth > 1280 && (
                        <div className="">
                            <div className="flex">
                                <div className="relative z-0">
                                    <Hex
                                        posX={30}
                                        posY={-200 + 150}
                                        size={90}
                                        delay={0}
                                    />
                                    <Hex
                                        posX={200}
                                        posY={-190 + 150}
                                        size={80}
                                        delay={2}
                                    />
                                    <Hex
                                        posX={-20}
                                        posY={-70 + 150}
                                        size={100}
                                        delay={0}
                                    />
                                    <Hex
                                        posX={0}
                                        posY={30 + 150}
                                        size={100}
                                        delay={1}
                                    />
                                    <Hex
                                        posX={150}
                                        posY={90 + 150}
                                        size={70}
                                        delay={0}
                                    />
                                </div>
                                <img
                                    className="z-10 mb-5"
                                    src={"/logo.png"}
                                    alt={"logo"}
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <p className="text-center text-white font-medium text-xl opacity-40 mt-2">
                                Get paid on time, every time
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
