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
    phone: z
        .string()
        .min(10, { message: "Nomor telepon minimal 10 digit" })
        .regex(/^[0-9]+$/, { message: "Nomor telepon hanya boleh angka" }),
});

export default function Edit({user}:any) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: ""
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post(route("profile.edit"), values, {
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
            <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto">
                <div className="w-40 h-40 bg-gray-300 rounded-full mb-6" />

                <Input
                    placeholder={user.name}
                    disabled
                    className="w-full px-4 py-3 rounded-xl bg-gray-100"
                />
                <Input
                    placeholder={user.nim}
                    disabled
                    className="w-full px-4 py-3 rounded-xl bg-gray-100"
                />
                <Input
                    placeholder={user.email}
                    disabled                        
                    className="w-full px-4 py-3 rounded-xl bg-gray-100"
                />
                <Input
                    placeholder={`${user.jurusan}/${user.fakultas}`}
                    disabled
                    className="w-full px-4 py-3 rounded-xl bg-gray-100"
                />

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="No. Telp"
                                            className="w-full px-4 py-3 rounded-lg"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-[#23318C] text-white hover:bg-[#384ac1]"
                        >
                                Simpan Perubahan
                            </Button>
                        </form>
                    </Form>
                </div>              
        </SidebarLayout>
    );
}

