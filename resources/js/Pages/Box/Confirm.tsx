import BoxLayout from "@/Layouts/BoxLayout";
import { Head } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

export default function Confirm() {
    return (
        <BoxLayout>
            <Head title="Konfirmasi Box Peminjaman" />
            <section className="flex flex-col">
                <div className="flex flex-col w-full gap-16 h-screen mt-24 ">
                    <div className="shadow-lg border-1 border-black p-6 space-y-6 text-xl font-medium">
                        <h1 className="font-semibold">Peminjam</h1>
                        <div className="space-y-2">
                            <h1>{`Miranti (+6282278424181)`}</h1>
                            <span>
                                Fakultas Ilmu Komputer - Teknik Informatika -
                                09021282328073
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="shadow-lg border-1 border-black p-6">
                            <label className="text-2xl space-x-4">
                                <span>Barang Dipinjam</span>
                            </label>
                        </div>
                        <div>
                            <div className="shadow-lg border-b-1 border-s-1 border-e-1 border-black space-y-12 py-12">
                                <label className="flex items-center text-2xl space-x-4 px-12">
                                    <input
                                        type="checkbox"
                                        className="size-5"
                                    ></input>
                                    <div className="flex items-center gap-4">
                                        <img src="" alt="" />
                                        <div className="size-24 border-2 border-black"></div>
                                        <span>Barang 1</span>
                                    </div>
                                </label>
                                <div className="p-12 flex items-center gap-4 text-xl border-y-1 border-black">
                                    <span>Ruangan Kelas: </span>
                                    <Input
                                        type="text"
                                        placeholder="Masukkan ruangan kelas peminjam"
                                        className="w-1/3 bg-[#D9D9D9] placeholder:text-[#686868] placeholder:text-xl placeholder:items-center rounded-xl h-14 text-md"
                                    />
                                </div>
                                <div className="px-12 flex justify-end">
                                    <Button className="bg-[#D9D9D9] rounded-xl h-14 text-xl px-12 text-[#686868] border-none">
                                        Pinjam Barang
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BoxLayout>
    );
}
