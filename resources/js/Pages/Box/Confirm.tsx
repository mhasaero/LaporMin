import { Head, router } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import BoxLayout from "@/Layouts/BoxLayout";
import { Input } from "@/Components/ui/input";
import { useState } from "react";

type BoxItem = {
    barang: {
        id: number;
        nama_barang: string;
    };
    quantity: number;
};

type Props = {
    selectedBox: BoxItem[];
};

export default function Confirm({ selectedBox }: Props) {
    const [ruangan, setRuangan] = useState("");
    const [alasan, setAlasan] = useState("");

    function handleSubmit() {
        router.post("/peminjaman", {
            selectedBox,
            ruangan,
            alasan,
        });
    }

    return (
        <BoxLayout>
            <Head title="Konfirmasi Box Peminjaman" />
            <section className="flex flex-col pt-24 ">
                <div className="flex flex-col w-full gap-12 h-full">
                    {/* Informasi Peminjam */}
                    <div className="shadow-lg border-1 border-[#23318C] bg-[#23318C] text-white p-6 rounded-t-2xl">
                        <h1 className="text-2xl font-semibold mb-2">
                            Peminjam
                        </h1>
                        <div className="space-y-1 text-lg">
                            <p>Miranti (+6282278424181)</p>
                            <p>
                                Fakultas Ilmu Komputer - Teknik Informatika -
                                09021282328073
                            </p>
                        </div>
                    </div>

                    {/* List Barang Dipinjam */}
                    <div className="shadow-lg border-1 border-[#23318C] p-6 rounded-2xl">
                        <h2 className="text-2xl font-semibold mb-6">
                            Barang yang Dipinjam
                        </h2>

                        <div className="flex flex-col gap-6">
                            {selectedBox.map((item) => (
                                <div
                                    key={item.barang.id}
                                    className="flex items-center gap-4 p-4 border-2 rounded-xl border-[#23318C]"
                                >
                                    <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>{" "}
                                    {/* Gambar Placeholder */}
                                    <div className="flex flex-col">
                                        <span className="text-xl font-medium">
                                            {item.barang.nama_barang}
                                        </span>
                                        <span className="text-md text-gray-600">
                                            Jumlah: {item.quantity}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Input Ruangan & Alasan */}
                    <div className="shadow-lg border-1 border-[#23318C] p-6 rounded-2xl space-y-8">
                        <div className="flex flex-col gap-2">
                            <label className="text-lg font-semibold">
                                Ruangan Kelas
                            </label>
                            <Input
                                type="text"
                                placeholder="Masukkan ruangan kelas"
                                className="bg-[#D9D9D9] placeholder:text-[#686868] text-xl rounded-xl h-14"
                                value={ruangan}
                                onChange={(e) => setRuangan(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-lg font-semibold">
                                Alasan Peminjaman
                            </label>
                            <Input
                                type="text"
                                placeholder="Masukkan alasan peminjaman"
                                className="bg-[#D9D9D9] placeholder:text-[#686868] text-xl rounded-xl h-14"
                                value={alasan}
                                onChange={(e) => setAlasan(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Tombol Submit */}
                    <div className="flex justify-end">
                        <Button
                            onClick={handleSubmit}
                            className="px-12 text-2xl h-14 rounded-xl bg-[#23318C] text-white"
                        >
                            Ajukan Peminjaman
                        </Button>
                    </div>
                </div>
            </section>
        </BoxLayout>
    );
}
