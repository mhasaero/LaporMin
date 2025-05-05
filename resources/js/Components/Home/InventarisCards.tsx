import React from "react";
import InventarisCardItem from "./InventarisCardItem";

type Props = {
    barang?: string;
};

export default function InventarisCards({ barang }: Props) {
    return (
        <div className="w-full py-4">
            <div className="w-full place-items-center grid grid-cols-3 gap-10">
                {barang &&
                    Array.from(barang).map((item: any, index: number) => (
                        <InventarisCardItem
                            key={index}
                            id={item.status_barang.id}
                            name={item.status_barang.nama_barang}
                            deskripsi={item.barang.deskripsi}
                            kategori={item.barang.kategori}
                            lokasi={item.barang.lokasi}
                            stok={item.barang.stok}
                            status={item.status_tersedia}
                        />
                    ))}
            </div>
        </div>
    );
}
