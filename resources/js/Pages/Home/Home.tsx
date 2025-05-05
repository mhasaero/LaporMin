import Footer from "@/Components/Home/Footer";
import HeroSection from "@/Components/Home/HeroSection";
import InventarisSection from "@/Components/Home/InventarisSection";
import PengaduanForm from "@/Components/Home/PengaduanForm";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

type Props = {
    statusBarang?: string;
};

export default function Home({ statusBarang }: Props) {
    const { errors } = usePage().props as { errors: Record<string, string> };

    useEffect(() => {
        if (errors.barang_id) {
            toast.success("Barang sudah ada dalam box!");
        }
    }, [errors]);
    return (
        <AuthenticatedLayout>
            <div className="flex flex-col">
                <HeroSection statusBarang={statusBarang} />
                <InventarisSection barang={statusBarang} />
                <PengaduanForm />
                <Footer />
            </div>
        </AuthenticatedLayout>
    );
}
