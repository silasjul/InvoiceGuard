import React from "react";
import Hex from "./ui/hex";

export default function HexGrid() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 z-[-1]">
            {/* Left side */}
            <Hex posX={-400} posY={0} delay={0.2} size={100} />
            <Hex posX={-400} posY={300} delay={0} size={100} />
            <Hex posX={-450} posY={100} delay={0.1} size={150} />
            {/* Right side */}
            <Hex posX={300} posY={0} delay={0.4} size={80} />
            <Hex posX={300} posY={300} delay={0} size={150} />
            <Hex posX={330} posY={100} delay={0.3} size={100} />
        </div>
    );
}
