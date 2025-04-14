import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/Components/ui/form";

const formSchema = z.object({
    old_password: z.string().regex(/^[A-Za-z0-9 .,_]+$/, {
        message: "Masukkan password lama",
    }),
    new_password: z.string().regex(/^[A-Za-z0-9 .,_]+$/, {
        message: "Masukkan password baru",
    }),
    confirm_password: z.string().regex(/^[A-Za-z0-9 .,_]+$/, {
        message: "Konfirmasi password",
    }),
})
.refine((data) => data.new_password === data.confirm_password, {
    message: "Password baru dan konfirmasi harus sama.",
    path: ["confirm_password"],
});

export default function UpdatePasswordForm({ className = '' }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            old_password: "",
            new_password: "",
            confirm_password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        router.post(route("profile.ubahpassword"), values, {
            preserveScroll: true,
            onError: (errors) => {
                console.error("Gagal ubah password.", errors);
            },
            onSuccess: () => {
                console.log("Password berhasil diubah!");
            },
        });
    }

    return (
        <SidebarLayout title="Ubah Password">
            <Head title="Ubah Password"/>  
            <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto mt-14">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-5"
                    >
                        <FormField
                            control={form.control}
                            name="old_password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Password lama"
                                            className="w-full px-4 py-3 rounded-lg"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="new_password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Password baru"
                                            className="w-full px-4 py-3 rounded-lg"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirm_password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Konfirmasi password baru"
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
                                Ubah Password
                        </Button>
                    </form>
                </Form>
            </div>              
        </SidebarLayout>
    );
}




