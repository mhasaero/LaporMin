import { Head, router } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import BoxCardItem from "@/Components/Box/BoxCardItem";
import BoxLayout from "@/Layouts/BoxLayout";
import { useEffect, useState } from "react";

type BoxItem = {
    barang: {
        id: number;
        nama_barang: string;
    };
    quantity: number;
};

type Props = {
    box?: string;
};

export default function Index({ box }: Props) {
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const handleToggle = (id: number, checked: boolean) => {
        setSelectedIds((prev) =>
            checked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };

    const handleConfirm = () => {
        const selectedItems =
            box &&
            Array.from(box).filter((item: any) =>
                selectedIds.includes(item.barang.id)
            );
        // console.log(selectedItems);
        router.visit("/box-confirm", {
            data: { selectedBox: selectedItems },
            method: "post",
        });
    };

    // useEffect(() => {
    //     console.log(selectedIds);
    // }, [selectedIds]);

    return (
        <BoxLayout>
            <Head title="Box Peminjaman" />
            <section className="flex flex-col">
                <div className="flex flex-col w-full gap-16 h-screen mt-24">
                    <div className="">
                        <div className="shadow-lg border-1 border-[#23318C] p-6 rounded-t-2xl bg-[#23318C] text-white">
                            <label className="text-2xl space-x-4">
                                <input
                                    type="checkbox"
                                    className="size-5"
                                    disabled
                                />
                                <span>Barang yang Dipinjam</span>
                            </label>
                        </div>

                        {box &&
                            Array.from(box).map((item: any) => (
                                <BoxCardItem
                                    key={item.barang.id}
                                    id={item.barang.id}
                                    name={item.barang.nama_barang}
                                    quantity={item.quantity}
                                    onToggle={handleToggle}
                                />
                            ))}
                    </div>
                    <Button
                        onClick={handleConfirm}
                        className="self-end px-12 text-2xl h-14"
                    >
                        Konfirmasi Pinjam Barang
                    </Button>
                </div>
            </section>
        </BoxLayout>
    );
}
