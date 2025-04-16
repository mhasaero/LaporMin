import React from "react";
import StatusItem from "./StatusItem";

type Props = {
    statusBarang?: any;
};

export default function StatusItemList({ statusBarang }: Props) {
    // const itemList = [
    //     {
    //         id: 1,
    //         name: "Kabel HDMI",
    //     },
    //     {
    //         id: 2,
    //         name: "Barang 2",
    //     },
    //     {
    //         id: 3,
    //         name: "Barang 3",
    //     },
    //     {
    //         id: 4,
    //         name: "Barang 4",
    //     },
    //     {
    //         id: 5,
    //         name: "Barang 5",
    //     },
    //     {
    //         id: 6,
    //         name: "Barang 6",
    //     },
    // ];

    // statusBarang.map((e: any) =>
    //     console.log(
    //         `tersedia: ${e.status_tersedia}, rusak: ${e.status_rusak} , sedang dipinjam: ${e.status_sedang_dipinjam}`
    //     )
    // );

    return (
        <div className="flex w-full h-[55vh] border-[#23318C] px-10 border-2 rounded-3xl py-6 text-md">
            <div className="w-full px-10 overflow-y-scroll">
                <div className="flex flex-col gap-6 w-full">
                    <h1 className="font-bold text-xl">
                        Status Inventaris FASILKOM Indralaya
                    </h1>
                    <div className="flex flex-col gap-2">
                        {statusBarang.map((e: any) => (
                            <StatusItem
                                key={e.barang.id}
                                name={e.barang.nama_barang}
                                deskripsi={e.barang.deskripsi}
                                kategori={e.barang.kategori}
                                lokasi={e.barang.lokasi}
                                stock={e.barang.stok}
                                statusTersedia={e.status_tersedia}
                                statusRusak={e.status_rusak}
                                statusSedangDipinjam={e.status_sedang_dipinjam}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
