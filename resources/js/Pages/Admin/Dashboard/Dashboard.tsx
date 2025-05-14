import AdminLayout from "@/Layouts/AdminLayout";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { Head, router, useForm } from "@inertiajs/react";
import { useState } from "react";

interface DashboardProps {
    barang: any[];
    peminjaman: any[];
    users: any[];
    status: any[];
    pengaduan: any[];
}

export default function Dashboard({
    barang = [],
    peminjaman = [],
    users = [],
    status = [],
    pengaduan = [],
}: DashboardProps) {
    const [activeTab, setActiveTab] = useState("barang");
    const [editing, setEditing] = useState(null);

    const {
        data,
        setData,
        reset,
        post,
        put,
        delete: destroy,
    } = useForm({
        id: "",
        nama_barang: "",
        kategori: "",
        deskripsi: "",
        stok: "",
        lokasi: "",
        gambar: "" as File | string,
        link_gambar: "",
        status_tersedia: "",
        status_sedang_dipinjam: "",
        status_rusak: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (editing) {
            put(`/barang/${data.id}`, {
                onSuccess: () => {
                    reset();
                    setEditing(null);
                },
            });
        } else {
            console.log("Uploading file:", data.gambar);
            const uploadPreset = "lapormin_barang";

            let uploadedUrl = data.link_gambar;

            if (data.gambar instanceof File) {
                uploadedUrl = await uploadToCloudinary(
                    data.gambar,
                    uploadPreset
                );
            }

            console.log("Uploaded URL:", uploadedUrl);

            // Bypass useForm state and send full object directly
            router.post(
                "/barang",
                {
                    ...data,
                    link_gambar: uploadedUrl,
                },
                {
                    onSuccess: () => reset(),
                }
            );
        }
    };

    const handleEdit = (item: any) => {
        setEditing(item);
        setData({
            id: item.id,
            nama_barang: item.nama_barang,
            kategori: item.kategori,
            deskripsi: item.deskripsi,
            stok: item.stok,
            lokasi: item.lokasi,
            gambar: item.gambar,
            link_gambar: item.link_gambar,
            status_tersedia: item.status?.status_tersedia || "",
            status_sedang_dipinjam: item.status?.status_sedang_dipinjam || "",
            status_rusak: item.status?.status_rusak || "",
        });
    };

    const handleDelete = (id: number) => {
        console.log(id);
        if (confirm("Yakin ingin menghapus barang ini?")) {
            destroy(`/barang/${id}`);
        }
    };

    const {
        data: pinjamData,
        setData: setPinjamData,
        reset: resetPinjam,
        post: postPinjam,
        put: putPinjam,
        delete: deletePinjam,
    } = useForm({
        id: "",
        barang_id: "",
        alasan: "",
        ruangan: "",
        tanggal_pengajuan: "",
        tanggal_disetujui: "",
        status: "",
    });

    const [editingPinjam, setEditingPinjam] = useState(null);

    const handleSubmitPinjam = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingPinjam) {
            putPinjam(`/peminjaman/${pinjamData.id}`, {
                onSuccess: () => {
                    resetPinjam();
                    setEditingPinjam(null);
                },
            });
        } else {
            postPinjam("/peminjaman", {
                onSuccess: () => resetPinjam(),
            });
        }
    };

    const handleEditPinjam = (item: any) => {
        setEditingPinjam(item);
        setPinjamData({
            id: item.id,
            barang_id: item.barang_id,
            alasan: item.alasan,
            ruangan: item.ruangan,
            tanggal_pengajuan: item.tanggal_pengajuan,
            tanggal_disetujui: item.tanggal_disetujui,
            status: item.status,
        });
    };

    const handleDeletePinjam = (id: number) => {
        if (confirm("Yakin ingin menghapus peminjaman ini?")) {
            deletePinjam(`/peminjaman/${id}`);
        }
    };

    return (
        <AdminLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6 text-gray-900">
                        {/* Statistik */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-gray-100 p-4 rounded shadow">
                                <h2 className="font-semibold">Total Barang</h2>
                                <p className="text-xl">{barang.length}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded shadow">
                                <h2 className="font-semibold">
                                    Total Peminjaman
                                </h2>
                                <p className="text-xl">{peminjaman.length}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded shadow">
                                <h2 className="font-semibold">
                                    Total Pengguna
                                </h2>
                                <p className="text-xl">{users.length}</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded shadow">
                                <h2 className="font-semibold">
                                    Total Pengaduan
                                </h2>
                                <p className="text-xl">{pengaduan.length}</p>
                            </div>
                        </div>

                        {/* Tab Navigasi */}
                        <div className="flex gap-4 mb-6">
                            <button
                                className={`px-4 py-2 rounded ${
                                    activeTab === "barang"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200"
                                }`}
                                onClick={() => setActiveTab("barang")}
                            >
                                Barang
                            </button>
                            <button
                                className={`px-4 py-2 rounded ${
                                    activeTab === "peminjaman"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200"
                                }`}
                                onClick={() => setActiveTab("peminjaman")}
                            >
                                Peminjaman
                            </button>
                            <button
                                className={`px-4 py-2 rounded ${
                                    activeTab === "pengaduan"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200"
                                }`}
                                onClick={() => setActiveTab("pengaduan")}
                            >
                                Pengaduan
                            </button>
                        </div>

                        {/* CRUD Barang */}
                        {activeTab === "barang" && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4">
                                    Manajemen Barang
                                </h3>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4 mb-6"
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            className="border p-2"
                                            type="text"
                                            placeholder="Nama Barang"
                                            value={data.nama_barang}
                                            onChange={(e) =>
                                                setData(
                                                    "nama_barang",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        <input
                                            className="border p-2"
                                            type="text"
                                            placeholder="Kategori"
                                            value={data.kategori}
                                            onChange={(e) =>
                                                setData(
                                                    "kategori",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        <input
                                            className="border p-2 col-span-2"
                                            type="text"
                                            placeholder="Deskripsi"
                                            value={data.deskripsi}
                                            onChange={(e) =>
                                                setData(
                                                    "deskripsi",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <input
                                            className="border p-2"
                                            type="number"
                                            placeholder="Stok"
                                            value={data.stok}
                                            onChange={(e) =>
                                                setData("stok", e.target.value)
                                            }
                                            required
                                        />
                                        <input
                                            className="border p-2"
                                            type="text"
                                            placeholder="Lokasi"
                                            value={data.lokasi}
                                            onChange={(e) =>
                                                setData(
                                                    "lokasi",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <input
                                            className="border p-2"
                                            type="number"
                                            placeholder="Tersedia"
                                            value={data.status_tersedia}
                                            onChange={(e) =>
                                                setData(
                                                    "status_tersedia",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        <input
                                            className="border p-2"
                                            type="number"
                                            placeholder="Tidak tersedia"
                                            value={data.status_sedang_dipinjam}
                                            onChange={(e) =>
                                                setData(
                                                    "status_sedang_dipinjam",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        <input
                                            className="border p-2"
                                            type="number"
                                            placeholder="Rusak"
                                            value={data.status_rusak}
                                            onChange={(e) =>
                                                setData(
                                                    "status_rusak",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Gambar
                                        </label>
                                        <input
                                            className="border p-2 w-full"
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) =>
                                                setData(
                                                    "gambar",
                                                    e.target.files?.[0] || ""
                                                )
                                            }
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-green-600 text-white rounded"
                                    >
                                        {editing
                                            ? "Update Barang"
                                            : "Tambah Barang"}
                                    </button>
                                </form>

                                <div className="overflow-auto">
                                    <table className="w-full table-auto border border-collapse border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="p-2 border">
                                                    ID
                                                </th>
                                                <th className="p-2 border">
                                                    Nama Barang
                                                </th>
                                                <th className="p-2 border">
                                                    Kategori
                                                </th>
                                                <th className="p-2 border">
                                                    Deskripsi
                                                </th>
                                                <th className="p-2 border">
                                                    Stok
                                                </th>
                                                <th className="p-2 border">
                                                    Lokasi
                                                </th>
                                                <th className="p-2 border">
                                                    Status
                                                </th>
                                                <th className="p-2 border">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {barang.map((b, i) => (
                                                <tr
                                                    key={i}
                                                    className="hover:bg-gray-50"
                                                >
                                                    <td className="p-2 border">
                                                        {b.id}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {b.nama_barang}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {b.kategori}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {b.deskripsi}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {b.stok}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {b.lokasi}
                                                    </td>
                                                    <td className="p-2 border whitespace-pre-line text-sm">
                                                        {b.status
                                                            ? `Tersedia: ${b.status.status_tersedia}\nSedang dipinjam: ${b.status.status_sedang_dipinjam}\nRusak: ${b.status.status_rusak}`
                                                            : "-"}
                                                    </td>
                                                    <td className="p-2 border space-x-2">
                                                        <button
                                                            onClick={() =>
                                                                handleEdit(b)
                                                            }
                                                            className="text-blue-600 hover:underline"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    b.id
                                                                )
                                                            }
                                                            className="text-red-600 hover:underline"
                                                        >
                                                            Hapus
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Tabel Peminjaman */}
                        {activeTab === "peminjaman" && (
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Daftar Peminjaman
                                </h3>

                                <div className="overflow-auto">
                                    <table className="w-full table-auto border border-collapse border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="p-2 border">
                                                    ID
                                                </th>
                                                <th className="p-2 border">
                                                    Nama Barang
                                                </th>
                                                <th className="p-2 border">
                                                    Alasan
                                                </th>
                                                <th className="p-2 border">
                                                    Ruangan
                                                </th>
                                                <th className="p-2 border">
                                                    Status
                                                </th>
                                                <th className="p-2 border">
                                                    Tanggal Pengajuan
                                                </th>
                                                <th className="p-2 border">
                                                    Tanggal Disetujui
                                                </th>
                                                <th className="p-2 border">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {peminjaman.map((p, i) => (
                                                <tr
                                                    key={i}
                                                    className="hover:bg-gray-50"
                                                >
                                                    <td className="p-2 border">
                                                        {p.id}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {p.barang?.nama_barang}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {p.alasan}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {p.ruangan}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {p.status}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {p.tanggal_pengajuan}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {p.tanggal_disetujui}
                                                    </td>
                                                    <td className="p-2 border space-x-2">
                                                        <button
                                                            onClick={() =>
                                                                handleEditPinjam(
                                                                    p
                                                                )
                                                            }
                                                            className="text-blue-600 hover:underline"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                handleDeletePinjam(
                                                                    p.id
                                                                )
                                                            }
                                                            className="text-red-600 hover:underline"
                                                        >
                                                            Hapus
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Tabel Pengaduan */}
                        {activeTab === "pengaduan" && (
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    Daftar Pengaduan
                                </h3>
                                <div className="overflow-auto">
                                    <table className="w-full table-auto border border-collapse border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="p-2 border">
                                                    ID
                                                </th>
                                                <th className="p-2 border">
                                                    Nama
                                                </th>
                                                <th className="p-2 border">
                                                    Pesan
                                                </th>
                                                <th className="p-2 border">
                                                    Link Gambar
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pengaduan.map((p, i) => (
                                                <tr
                                                    key={i}
                                                    className="hover:bg-gray-50"
                                                >
                                                    <td className="p-2 border">
                                                        {p.id}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {p.name}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {p.msg}
                                                    </td>
                                                    <td className="p-2 border">
                                                        {p.link_gambar}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
