import HeroSection from "@/Components/Home/HeroSection";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <AuthenticatedLayout>
            <HeroSection />
        </AuthenticatedLayout>
    );
}
