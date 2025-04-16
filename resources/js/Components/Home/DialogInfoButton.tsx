import React from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Copy } from "lucide-react";

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

export default function DialogInfoButton({
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
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="default"
                    className="w-fit text-md rounded-xl px-8 py-2 cursor-pointer"
                >
                    Info
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Informasi Detail {name}</DialogTitle>
                    {/* <DialogDescription>{deskripsi}</DialogDescription> */}
                </DialogHeader>
                <div className="flex flex-col text-sm">
                    <p>Nama Barang: {name}</p>
                    <p>Deskripsi: {deskripsi}</p>
                    <p>Kategori: {kategori}</p>
                    <div className="py-4">
                        <h3 className="font-semibold">Rincian Stok Barang</h3>
                        <p>Stok: {stock}</p>
                        <p>Tersedia: {statusTersedia}</p>
                        <p>Rusak: {statusRusak}</p>
                        <p>Sedang Dipinjam: {statusSedangDipinjam}</p>
                    </div>
                    <p className="font-semibold">Lokasi: {lokasi}</p>
                </div>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <Button
                            type="button"
                            variant="secondary"
                            className="cursor-pointer"
                        >
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
