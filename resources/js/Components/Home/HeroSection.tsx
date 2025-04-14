import React from "react";
import { Button } from "../ui/button";
import StuffItem from "./StatusItem";
import StatusItemList from "./StatusItemsList";
import HeroBanner from "./HeroBanner";

export default function HeroSection() {
    return (
        <section className="flex flex-col w-full gap-6 h-[100vh] items-center justify-center mt-10">
            <HeroBanner />
            <StatusItemList />
        </section>
    );
}
