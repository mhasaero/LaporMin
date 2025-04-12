import React from "react";
import { Button } from "../ui/button";

export default function HeroBanner() {
    return (
        <div className="w-full h-fit bg-[#23318C] px-20 py-6 flex flex-col gap-4 rounded-3xl">
            <p className="text-white text-xl">
                LaporMin merupakan website sistem peminjaman dan pengaduan
                inventaris barang di Fakultas Ilmu Komputer Universitas
                Sriwijaya Indralaya.
            </p>
            <Button
                variant={"default"}
                className="w-fit rounded-xl px-6 py-2 cursor-pointer text-xl"
            >
                Pinjam Barang
            </Button>
        </div>
    );
}
