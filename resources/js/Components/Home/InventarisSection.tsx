import React from "react";
import { Input } from "../ui/input";
import InventarisCards from "./InventarisCards";
import { Button } from "../ui/button";

type Props = {
    barang?: string;
};

export default function InventarisSection({ barang }: Props) {
    return (
        <section id="inventaris">
            <div className="flex flex-col w-full items-center gap-12 mt-30">
                <h1 className="text-4xl font">Inventaris</h1>
                <div className="flex w-full justify-between gap-10">
                    <p className="w-1/2 text-[#23318C]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore..
                    </p>
                    <Input
                        type="text"
                        placeholder="Cari"
                        className="w-1/2 h-full"
                    />
                </div>
                <InventarisCards barang={barang} />
                <Button className="py-1 px-10 rounded-xl border-[#23318C] border-2 bg-[#23318C] text-white hover:bg-[#384ac1] mb-10">
                    Lihat Lebih Banyak
                </Button>
            </div>
        </section>
    );
}
