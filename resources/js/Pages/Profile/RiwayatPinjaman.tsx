import SidebarLayout from "@/Layouts/SidebarLayout";
import { Head } from "@inertiajs/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import ItemsCard from "@/Components/Profile/ItemsCard";

export default function RiwayatPinjaman({ barang }: any) {
    barang.map((item: any) => {
        console.log(item.status);
    });
    return (
        <SidebarLayout title="Pinjaman Saya">
            <Head title="Pinjaman Saya" />
            <div className="flex flex-col mt-14">
                <Tabs defaultValue="belumDiProses" className="items-center">
                    <TabsList className="bg-[#23318C] rounded-full w-3xl mb-6">
                        <TabsTrigger
                            value="belumDiProses"
                            className="data-[state=active]:text-black data-[state=active]:font-medium data-[state=inactive]:text-white data-[state=inactive]:font-normal rounded-full text-lg cursor-pointer"
                        >
                            Belum Diproses
                        </TabsTrigger>

                        <TabsTrigger
                            value="sedangDiPinjam"
                            className="data-[state=active]:text-black data-[state=active]:font-medium data-[state=inactive]:text-white data-[state=inactive]:font-normal rounded-full text-lg cursor-pointer"
                        >
                            Sedang Dipinjam
                        </TabsTrigger>

                        <TabsTrigger
                            value="sudahDiKembalikan"
                            className="data-[state=active]:text-black data-[state=inactive]:text-white data-[state=active]:font-medium data-[state=inactive]:font-normal rounded-full text-lg cursor-pointer"
                        >
                            Sudah Dikembalikan
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="belumDiProses">
                        <div className="space-y-6 pb-10">
                            {barang
                                .filter(
                                    (item: any) =>
                                        item.status == "Belum Diproses"
                                )
                                .map((item: any, index: number) => (
                                    <ItemsCard
                                        key={index}
                                        barang={item.barang}
                                    />
                                ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="sedangDiPinjam">
                        <div className="space-y-6 pb-10">
                            {barang
                                .filter(
                                    (item: any) =>
                                        item.status == "Sedang Dipinjam"
                                )
                                .map((item: any, index: number) => (
                                    <ItemsCard
                                        key={index}
                                        barang={item.barang}
                                    />
                                ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="sudahDiKembalikan">
                        <div className="space-y-6 pb-10">
                            {barang
                                .filter(
                                    (item: any) =>
                                        item.status == "Sudah di Kembalikan"
                                )
                                .map((item: any, index: number) => (
                                    <ItemsCard
                                        key={index}
                                        barang={item.barang}
                                    />
                                ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </SidebarLayout>
    );
}
