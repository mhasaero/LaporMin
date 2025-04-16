import React from "react";

export default function InventarisCardItem() {
    return (
        <div className="flex items-end w-full lg:h-72 xl:h-80 bg-white rounded-3xl shadow-xl overflow-hidden group text-[#23318C] cursor-pointer">
            <div className="flex w-full items-center justify-center flex-col h-1/3 bg-gray-100 group-hover:h-full ease-in-out transition-all">
                <p className="text-xl block group-hover:hidden ease-in-out transition-all">
                    Baju
                </p>
                <p className="text-sm block group-hover:hidden ease-in-out transition-all">
                    Tersedia
                </p>
                <p className="text-xl hidden group-hover:block ease-in-out transition-all">
                    Pinjam Barang
                </p>
            </div>
        </div>
    );
}
