import HeroSection from "@/Components/Home/HeroSection";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

type Props = {
    statusBarang?: string;
};

export default function Home({ statusBarang }: Props) {
    return (
        <AuthenticatedLayout>
            <div className="flex flex-col gap-40">
                <HeroSection statusBarang={statusBarang} />
                <h1>Investaris</h1>
            </div>
        </AuthenticatedLayout>
    );
}
