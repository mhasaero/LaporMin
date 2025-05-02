import { Head, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
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

export default function ReturnApproval({ peminjamans }: Props) {
    const handleApproveReturn = (item: Peminjaman) => {
        router.post(`/admin/pengembalian-approval/${item.id}/approve`);
    };

    return (
        <AdminLayout>
            <Head title="Approval Pengembalian" />
            <div className="pt-24 space-y-8 p-6">
                <h1 className="text-3xl font-bold">Approval Pengembalian</h1>
                {peminjamans.length === 0 && (
                    <p>Tidak ada pengembalian yang perlu diproses.</p>
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
                            <div>Status: {item.status}</div>
                            <Button
                                className="bg-blue-500 hover:bg-blue-600 w-fit"
                                onClick={() => handleApproveReturn(item)}
                            >
                                Setujui Pengembalian
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
