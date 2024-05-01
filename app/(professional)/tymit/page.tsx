import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Java Backend Engineer at Tymit",
};

export default function LifePath() {
    return (
        <section className="my-container">
            <h1 className={"font-bold text-2xl pb-3 text-gradient"}>
                {metadata.title?.toString()}
            </h1>
            <p className="text-secondary"><em>Empty</em></p>
        </section>
    )
}