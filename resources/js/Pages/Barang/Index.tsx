import { useState } from "react";
import { router } from "@inertiajs/react";

export default function BarangIndex({ barang }: any) {
    const [editModal, setEditModal] = useState(false);
    const [form, setForm] = useState({
        id: null,
        nama_barang: "",
        kategori: "",
        deskripsi: "",
        stok: "",
        status: "",
        lokasi: "",
    });

    const openEditModal = (item: any) => {
        setForm(item);
        setEditModal(true);
    };

    const closeEditModal = () => {
        setEditModal(false);
        setForm({
            id: null,
            nama_barang: "",
            kategori: "",
            deskripsi: "",
            stok: "",
            status: "",
            lokasi: "",
        });
    };

    const handleUpdate = (e: any) => {
        e.preventDefault();
        router.put(route("barang.update", form.id), form, {
            onSuccess: () => closeEditModal(),
        });
    };

    const handleDelete = (id: any) => {
        if (confirm("Yakin ingin menghapus barang ini?")) {
            router.delete(route("barang.destroy", id));
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Daftar Barang</h1>

            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Nama</th>
                        <th className="border p-2">Kategori</th>
                        <th className="border p-2">Deskripsi</th>
                        <th className="border p-2">Stok</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Lokasi</th>
                        <th className="border p-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {barang.map((item: any) => (
                        <tr key={item.id}>
                            <td className="border p-2">{item.nama_barang}</td>
                            <td className="border p-2">{item.kategori}</td>
                            <td className="border p-2">{item.deskripsi}</td>
                            <td className="border p-2">{item.stok}</td>
                            <td className="border p-2">{item.status}</td>
                            <td className="border p-2">{item.lokasi}</td>
                            <td className="border p-2 space-x-2">
                                <button
                                    onClick={() => openEditModal(item)}
                                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal Edit */}
            {editModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Edit Barang</h2>
                        <form onSubmit={handleUpdate} className="space-y-3">
                            <input
                                type="text"
                                placeholder="Nama Barang"
                                className="w-full p-2 border rounded"
                                value={form.nama_barang}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        nama_barang: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Kategori"
                                className="w-full p-2 border rounded"
                                value={form.kategori}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        kategori: e.target.value,
                                    })
                                }
                            />
                            <textarea
                                placeholder="Deskripsi"
                                className="w-full p-2 border rounded"
                                value={form.deskripsi}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        deskripsi: e.target.value,
                                    })
                                }
                            />
                            <input
                                type="number"
                                placeholder="Stok"
                                className="w-full p-2 border rounded"
                                value={form.stok}
                                onChange={(e) =>
                                    setForm({ ...form, stok: e.target.value })
                                }
                            />
                            <select
                                className="w-full p-2 border rounded"
                                value={form.status}
                                onChange={(e) =>
                                    setForm({ ...form, status: e.target.value })
                                }
                            >
                                <option value="tersedia">Tersedia</option>
                                <option value="habis">Habis</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Lokasi"
                                className="w-full p-2 border rounded"
                                value={form.lokasi}
                                onChange={(e) =>
                                    setForm({ ...form, lokasi: e.target.value })
                                }
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={closeEditModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
