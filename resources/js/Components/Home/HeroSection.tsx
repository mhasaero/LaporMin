import React from "react";
import { Button } from "../ui/button";
import StuffItem from "./StatusItem";
import ItemStatusList from "./StatusItemsList";
import HeroBanner from "./HeroBanner";

export default function HeroSection() {
    return (
        <section className="flex flex-col gap-10">
            <HeroBanner />
            <ItemStatusList />
        </section>
    );
}
