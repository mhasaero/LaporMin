import { Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index() {
    return (
        <AuthenticatedLayout>
            <Head title="Box Peminjaman" />
            <section className="flex flex-col ">
                <div className="flex flex-col w-full gap-16 h-screen mt-24 ">
                    <div className="">
                        <div className="shadow-lg border-1 border-[#23318C] p-6 rounded-t-2xl bg-[#23318C] text-white">
                            <label className="text-2xl space-x-4">
                                <input
                                    type="checkbox"
                                    className="size-5"
                                ></input>
                                <span>Barang yang Dipinjam</span>
                            </label>
                        </div>
                        <div className="flex items-center justify-between border-b-1 border-s-1 border-e-1 border-[#23318C] p-12">
                            <label className="flex items-center text-2xl space-x-4">
                                <input
                                    type="checkbox"
                                    className="size-5"
                                ></input>
                                <div className="flex items-center gap-4">
                                    <img src="" alt="" />
                                    <div className="size-24 border-2 border-[#23318C]"></div>
                                    <span>Barang 1</span>
                                </div>
                            </label>
                            <div className="flex items-center gap-6 text-2xl">
                                <Button className="text-xl">+</Button>
                                <span>1</span>
                                <Button className="text-xl">-</Button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-b-1 border-s-1 border-e-1 border-[#23318C] p-12">
                            <label className="flex items-center text-2xl space-x-4">
                                <input
                                    type="checkbox"
                                    className="size-5"
                                ></input>
                                <div className="flex items-center gap-4">
                                    <img src="" alt="" />
                                    <div className="size-24 border-2 border-[#23318C]"></div>
                                    <span>Barang 2</span>
                                </div>
                            </label>
                            <div className="flex items-center gap-6 text-2xl">
                                <Button className="text-xl">+</Button>
                                <span>1</span>
                                <Button className="text-xl">-</Button>
                            </div>
                        </div>
                    </div>
                    <Button className="self-end px-12 text-2xl h-14">
                        konfirmasi Pinjam barang
                    </Button>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
