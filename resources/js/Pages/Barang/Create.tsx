import { Head, useForm } from "@inertiajs/react";

export default function CreateBarangPage() {
    const { data, setData, post, processing, errors } = useForm({
        nama_barang: "",
        kategori: "",
        deskripsi: "",
        stok: "",
        status_tersedia: "",
        status_sedang_dipinjam: "",
        status_rusak: "",
        lokasi: "",
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(data);
        post(route("barang.store")); // route dari Laravel
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <Head title="Daftar Barang" />
            <h1 className="text-2xl font-bold mb-4">Tambah Barang</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Nama Barang:</label>
                    <input
                        type="text"
                        value={data.nama_barang}
                        onChange={(e) => setData("nama_barang", e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    {errors.nama_barang && (
                        <div className="text-red-500 text-sm">
                            {errors.nama_barang}
                        </div>
                    )}
                </div>

                <div>
                    <label>Kategori:</label>
                    <input
                        type="text"
                        value={data.kategori}
                        onChange={(e) => setData("kategori", e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    {errors.kategori && (
                        <div className="text-red-500 text-sm">
                            {errors.kategori}
                        </div>
                    )}
                </div>

                <div>
                    <label>Deskripsi:</label>
                    <textarea
                        value={data.deskripsi}
                        onChange={(e) => setData("deskripsi", e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    {errors.deskripsi && (
                        <div className="text-red-500 text-sm">
                            {errors.deskripsi}
                        </div>
                    )}
                </div>

                <div>
                    <label>Stok:</label>
                    <input
                        type="number"
                        value={data.stok}
                        onChange={(e) => setData("stok", e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    {errors.stok && (
                        <div className="text-red-500 text-sm">
                            {errors.stok}
                        </div>
                    )}
                </div>

                <div>
                    <label>Status Tersedia:</label>
                    <input
                        type="number"
                        value={data.status_tersedia}
                        onChange={(e) =>
                            setData("status_tersedia", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                    />
                    {errors.status_tersedia && (
                        <div className="text-red-500 text-sm">
                            {errors.status_tersedia}
                        </div>
                    )}
                </div>

                <div>
                    <label>Status Sedang Dipinjam</label>
                    <input
                        type="number"
                        value={data.status_sedang_dipinjam}
                        onChange={(e) =>
                            setData("status_sedang_dipinjam", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                    />
                    {errors.status_sedang_dipinjam && (
                        <div className="text-red-500 text-sm">
                            {errors.status_sedang_dipinjam}
                        </div>
                    )}
                </div>

                <div>
                    <label>Status Rusak</label>
                    <input
                        type="number"
                        value={data.status_rusak}
                        onChange={(e) =>
                            setData("status_rusak", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                    />
                    {errors.status_rusak && (
                        <div className="text-red-500 text-sm">
                            {errors.status_rusak}
                        </div>
                    )}
                </div>

                <div>
                    <label>Lokasi:</label>
                    <input
                        type="text"
                        value={data.lokasi}
                        onChange={(e) => setData("lokasi", e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                    {errors.lokasi && (
                        <div className="text-red-500 text-sm">
                            {errors.lokasi}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    {processing ? "Menyimpan..." : "Simpan"}
                </button>
            </form>
        </div>
    );
}
