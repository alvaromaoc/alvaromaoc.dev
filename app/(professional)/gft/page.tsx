import React from "react";
import type {Metadata} from "next";
import StoryPathWithGlowingBoxes from "@/components/storypath/StoryPathWithGlowingBoxes";

export const metadata: Metadata = {
    title: "Backend Software Engineering at GFT",
    description: "The place where I grew up, where my responsibilities got bigger and my duties more relevant.",
};

export default function LifePath() {
    const story = [
        {
            title: "Started as Junior",
            subtitle: "Feb 2023",
            content: <p className="text-secondary"><em>Empty</em></p>
        },
        {
            title: "Promoted to Mid",
            subtitle: "Apr 2024",
            content: <p className="text-secondary"><em>Empty</em></p>
        },
        {
            title: "Leave",
            subtitle: "Oct 2024",
            content: <p className="text-secondary"><em>Empty</em></p>
        },
    ]

    return (
        <section className="my-container">
            <h1 className={"font-bold text-2xl pb-3 text-gradient"}>
                {metadata.title?.toString()}
            </h1>
            <p className="text-secondary"><em>Empty</em></p>
            <StoryPathWithGlowingBoxes items={story}></StoryPathWithGlowingBoxes>
        </section>
    )
}