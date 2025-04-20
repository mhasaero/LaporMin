import React from "react";

export default function ItemsCard({ barang }: any) {
    if (!barang) {
        return (
            <div className="text-center text-gray-500">
                Tidak ada data barang untuk ditampilkan.
            </div>
        );
    }

    return (
        <div className="flex items-center w-3xl rounded-3xl p-6 shadow-lg bg-white cursor-pointer hover:shadow-md transition-shadow duration-300">
            <div className="w-24 h-24 bg-gray-600 rounded-xl flex-shrink-0 border mr-4" />
            <div className="ml-4 flex flex-col text-black">
                <p className="text-lg font-semibold">{barang.nama_barang}</p>
                <p className="text-sm text-gray-700">Jumlah: {barang.stok}</p>
                <p className="text-base mt-2">Lokasi: {barang.lokasi}.</p>
            </div>
        </div>
    );
}
