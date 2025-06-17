import React from "react";

export default function SectionDivider({ vh }: { vh: number }) {
    return <div className="bg-gray-100" style={{ height: `${vh}vh` }} />;
}
