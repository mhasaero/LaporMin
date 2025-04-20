import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head, Link, router } from '@inertiajs/react';
import { usePage } from "@inertiajs/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/Components/ui/form";

// import DeleteUserForm from './Partials/DeleteUserForm';
// import UpdatePasswordForm from './Partials/UpdatePasswordForm';
// import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

const formSchema = z.object({
    no_telp: z
        .string()
        .min(10, { message: "Nomor telepon minimal 10 digit" })
        .regex(/^[0-9]+$/, { message: "Nomor telepon hanya boleh angka" }),
});


export default function Edit({user}:any) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            no_telp: user.no_telp || "",
        },
    });    

    const { props } = usePage<{ status?: string }>(); 

    function onSubmit(values: any) {
        router.patch(route("profile.update"), values, {
            preserveScroll: true,
            onError: (errors) => {
                console.error("Gagal edit no telp: ", errors);
            },
            onSuccess: () => {
                console.log("No telp berhasil diedit!");
            },
        });
    }

    return (
        <SidebarLayout title="Profile">
            <Head title="Profile" />  
            <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">

                <div className="w-50 h-50 bg-gray-300 rounded-full mt-10 mb-8" />

                <Input
                    placeholder={user.name}
                    disabled
                    className="w-full rounded-xl bg-gray-100 px-4 py-4 text-base"
                />
                <Input
                    placeholder={user.nim}
                    disabled
                    className="w-full rounded-xl bg-gray-100 px-4 py-4 text-base"
                />
                <Input
                    placeholder={user.email}
                    disabled                        
                    className="w-full rounded-xl bg-gray-100 px-4 py-4 text-base"
                />
                <Input
                    placeholder={`${user.jurusan}/${user.fakultas}`}
                    disabled
                    className="w-full rounded-xl bg-gray-100 px-4 py-4 text-base"
                />

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-6"
                    >
                        <FormField
                            control={form.control}
                            name="no_telp"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="No. Telp"
                                            className="w-full rounded-xl px-4 py-4 text-base"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-[#23318C] text-white hover:bg-[#384ac1] text-base mb-8"
                        >
                                Simpan Perubahan
                        </Button>
                        </form>
                        
                    </Form>
                </div>              
        </SidebarLayout>
    );
}

