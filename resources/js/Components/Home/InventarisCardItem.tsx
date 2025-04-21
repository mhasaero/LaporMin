import React from "react";
import { string } from "zod";

type Props = {
    name: string;
    deskripsi: string;
    kategori: string;
    lokasi: string;
    stok: string;
    status: string;
};

export default function InventarisCardItem({
    name,
    deskripsi,
    kategori,
    lokasi,
    stok,
    status,
}: Props) {
    return (
        <div className="flex items-end w-full h-52 lg:h-72 xl:h-80 bg-white rounded-3xl shadow-xl overflow-hidden group text-[#23318C] cursor-pointer">
            <div className="flex w-full items-center justify-center flex-col h-1/3 bg-gray-100 group-hover:h-full ease-in-out transition-all">
                <p className="text-xl block group-hover:hidden ease-in-out transition-all">
                    {name}
                </p>
                <p className="text-sm block group-hover:hidden ease-in-out transition-all">
                    Tersedia {status} {kategori}
                </p>
                <div className="text-xl hidden group-hover:grid grid-cols-2 gap-2 ease-in-out transition-all overflow-hidden">
                    <h1>Nama Barang: </h1> <span>{name}</span>
                    <h1>Deskripsi: </h1> <span>{deskripsi}</span>
                    <h1>Kategori: </h1> <span>{kategori}</span>
                    <h1>Lokasi: </h1> <span>{lokasi}</span>
                    <h1>Stok: </h1> <span>{stok}</span>
                </div>
            </div>
        </div>
    );
}
