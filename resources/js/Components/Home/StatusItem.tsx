import React from "react";
import { Button } from "../ui/button";
import DialogInfoButton from "./DialogInfoButton";

type Props = {
    name?: any;
    deskripsi?: any;
    kategori?: any;
    lokasi?: any;
    stock?: any;
    statusTersedia?: any;
    statusRusak?: any;
    statusSedangDipinjam?: any;
};

export default function StatusItem({
    name,
    deskripsi,
    kategori,
    lokasi,
    stock,
    statusRusak,
    statusTersedia,
    statusSedangDipinjam,
}: Props) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-xl bg-gray-400"></div>
                <p>{name}</p>
            </div>
            <DialogInfoButton
                name={name}
                deskripsi={deskripsi}
                kategori={kategori}
                lokasi={lokasi}
                stock={stock}
                statusTersedia={statusTersedia}
                statusRusak={statusRusak}
                statusSedangDipinjam={statusSedangDipinjam}
            />
        </div>
    );
}
