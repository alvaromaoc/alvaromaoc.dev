import {ReactNode} from "react";

export default function GlowingBox({children}: { children: ReactNode }) {
    return (
        <div className={"w-full h-full bg-gradient-to-br from-accent to-accentSidecar rounded-lg box-border p-[1px] hover:shadow-lg hover:shadow-accent/30 transition-shadow"}>
            <div className="bg-secondary rounded-lg w-full h-full">
                {children}
            </div>
        </div>
    )
}