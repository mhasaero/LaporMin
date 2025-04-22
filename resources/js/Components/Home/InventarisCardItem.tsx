import { Button } from "../ui/button";
import { router } from "@inertiajs/react";

type Props = {
    id: number;
    name: string;
    deskripsi: string;
    kategori: string;
    lokasi: string;
    stok: string;
    status: string;
};

export default function InventarisCardItem({
    id,
    name,
    deskripsi,
    kategori,
    lokasi,
    stok,
    status,
}: Props) {
    const handlePinjam = () => {
        console.log("barang_id", id, "quantity", 1);
        router.post("/", {
            barang_id: id,
            quantity: 1,
        });
    };
    return (
        // <div className="flex items-end w-full h-52 lg:h-72 xl:h-80 bg-white rounded-3xl shadow-xl overflow-hidden group text-[#23318C] cursor-pointer">
        //     <div className="flex w-full items-center justify-center flex-col h-1/3 bg-gray-100 group-hover:h-full ease-in-out transition-all">
        //         <p className="text-xl block group-hover:hidden ease-in-out transition-all">
        //             {name}
        //         </p>
        //         <p className="text-sm block group-hover:hidden ease-in-out transition-all">
        //             Tersedia {status} {kategori}
        //         </p>
        //         <div className=" text-xl hidden group-hover:grid group-hover:grid-cols-2 gap-2 ease-in-out transition-all overflow-hidden">
        //             <h1>Nama Barang: </h1> <span>{name}</span>
        //             <h1>Deskripsi: </h1> <span>{deskripsi}</span>
        //             <h1>Kategori: </h1> <span>{kategori}</span>
        //             <h1>Lokasi: </h1> <span>{lokasi}</span>
        //             <h1>Stok: </h1> <span>{stok}</span>
        //             <Button>Pinjam</Button>
        //         </div>
        //     </div>
        // </div>
        <div className="relative w-full h-52 lg:h-72 xl:h-80 bg-white rounded-3xl shadow-xl overflow-hidden group text-[#23318C] cursor-pointer transition-all duration-300 hover:shadow-2xl">
            <div className="absolute inset-0 bg-[#f8f9fa] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlY2VlZjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00em0tMjQgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6TTAgMGg2MHY2MEgweiIvPjwvZz48L2c+PC9zdmc+')]"></div>

            <div className="absolute bottom-0 w-full h-1/3 bg-white/90 backdrop-blur-sm group-hover:h-full transition-all duration-500 ease-in-out flex flex-col p-4">
                <div className="flex flex-col items-center justify-center h-full group-hover:hidden transition-all">
                    <h3 className="text-xl font-bold truncate max-w-full px-2">
                        {name}
                    </h3>
                </div>

                <div className="hidden group-hover:flex flex-col h-full overflow-y-auto">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">
                        <div className="space-y-1">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#23318C]/60">
                                Nama Barang
                            </h4>
                            <p className="font-medium">{name}</p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#23318C]/60">
                                Kategori
                            </h4>
                            <p className="font-medium">{kategori}</p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#23318C]/60">
                                Lokasi
                            </h4>
                            <p className="font-medium">{lokasi}</p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#23318C]/60">
                                Stok
                            </h4>
                            <p className="font-medium">{stok} unit</p>
                        </div>
                        <div className="col-span-2 space-y-1">
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#23318C]/60">
                                Deskripsi
                            </h4>
                            <p className="text-sm line-clamp-3">{deskripsi}</p>
                        </div>
                    </div>

                    <div className="mt-auto pt-3 border-t border-[#23318C]/10">
                        <Button
                            className="w-full"
                            type="submit"
                            onClick={handlePinjam}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
                            </svg>
                            Pinjam Barang
                        </Button>
                    </div>
                </div>
            </div>

            <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    status === "Tersedia"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                }`}
            >
                {status}
            </div>
        </div>
    );
}
