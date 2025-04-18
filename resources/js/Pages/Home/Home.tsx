import HeroSection from "@/Components/Home/HeroSection";
import InventarisSection from "@/Components/Home/InventarisSection";
import PengaduanForm from "@/Components/Home/PengaduanForm";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

type Props = {
    statusBarang?: string;
};

export default function Home({ statusBarang }: Props) {
    return (
        <AuthenticatedLayout>
            <div className="flex flex-col gap-20">
                <HeroSection statusBarang={statusBarang} />
                <InventarisSection />
                <PengaduanForm />
            </div>
        </AuthenticatedLayout>
    );
}
