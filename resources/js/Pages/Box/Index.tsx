import { Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import BoxCardItem from "@/Components/Box/BoxCardItem";
import { Box } from "lucide-react";

type Props = {
    box?: string;
};

export default function Index({ box }: Props) {
    console.log(box);

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

                        {box &&
                            Array.from(box).map((item: any) => (
                                <BoxCardItem
                                    key={item.barang.id}
                                    name={item.barang.nama_barang}
                                    quantity={item.quantity}
                                />
                            ))}
                    </div>
                    <Button className="self-end px-12 text-2xl h-14">
                        konfirmasi Pinjam barang
                    </Button>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
