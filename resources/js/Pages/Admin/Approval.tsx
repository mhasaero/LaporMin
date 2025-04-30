import { Head, router } from "@inertiajs/react";
import BoxLayout from "@/Layouts/BoxLayout";
import { Button } from "@/Components/ui/button";

type Peminjaman = {
    id: number;
    barang: {
        nama_barang: string;
    };
    alasan: string;
    ruangan: string;
    status: string;
};

type Props = {
    peminjamans: Peminjaman[];
};

export default function Approval({ peminjamans }: Props) {
    const handleAccept = (item: Peminjaman) => {
        router.post(`/admin/peminjaman-approval/${item.id}/approve`, { item });
    };

    const handleReject = (item: Peminjaman) => {
        router.post(`/admin/peminjaman-approval/${item.id}/reject`, { item });
    };

    return (
        <BoxLayout>
            <Head title="Approval Peminjaman" />
            <div className="pt-24 space-y-8 p-6">
                <h1 className="text-3xl font-bold">Approval Peminjaman</h1>
                {peminjamans.length === 0 && (
                    <p>Tidak ada peminjaman yang perlu diproses.</p>
                )}
                <div className="space-y-6">
                    {peminjamans.map((item) => (
                        <div
                            key={item.id}
                            className="border p-6 rounded-lg shadow-lg flex flex-col gap-4"
                        >
                            <div className="text-xl font-semibold">
                                {item.barang.nama_barang}
                            </div>
                            <div>Alasan: {item.alasan}</div>
                            <div>Ruangan: {item.ruangan}</div>
                            <div className="flex gap-4">
                                <Button
                                    className="bg-green-500 hover:bg-green-600"
                                    onClick={() => handleAccept(item)}
                                >
                                    Terima
                                </Button>
                                <Button
                                    className="bg-red-500 hover:bg-red-600"
                                    onClick={() => handleReject(item)}
                                >
                                    Tolak
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BoxLayout>
    );
}
