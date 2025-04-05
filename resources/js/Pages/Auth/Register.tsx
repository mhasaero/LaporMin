import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

const formSchema = z.object({
    username: z.string().regex(/^[A-Za-z0-9 .,_]+$/, {
        message: "Username tidak boleh kosong.",
    }),
    email: z
        .string()
        .regex(
            /^(09021182429(00[1-9]|0[1-2][0-9]|03[0-7])\b)+@([student.unsri.ac.id]+)|(09021282429(03[8-9]|0[4-9][0-9]|1[0-1][0-9]|12[0-6])\b)+@([student.unsri.ac.id]+)|(09021382126(12[7-9]|1[3-6][0-9]|17[0-1])\b)+@([student.unsri.ac.id]+)|(09021182328(00[1-9]|0[1-2][0-9]|03[0-2])\b)+@([student.unsri.ac.id]+)|(09021282328(03[3-9]|0[4-9][0-9]|1[0-1][0-9]|12[0-5])\b)+@([student.unsri.ac.id]+)|(09021382126(12[6-9]|1[3-6][0-9]|17[0-1])\b)+@([student.unsri.ac.id]+)|(09021182227(00[1-9]|0[1-2][0-9]|03[0-3])\b)+@([student.unsri.ac.id]+)|(09021282227(03[4-9]|0[4-9][0-9]|1[0-1][0-9])\b)+@([student.unsri.ac.id]+)|(09021382227(120|1[3-6][0-9]|17[0-9])\b)+@([student.unsri.ac.id]+)|(09021182126(00[1-9]|0[1-2][0-9]|03[0-3])\b)+@([student.unsri.ac.id]+)|(09021282126(03[4-9]|0[4-9][0-9]|1[0-1][0-9])\b)+@([student.unsri.ac.id]+)|(09021382126(12[0-9]|1[3-6][0-9]|17[0-5])\b)+@([student.unsri.ac.id]+)/,
            {
                message: "Email harus merupakan email UNSRI",
            }
        ),
    password: z.string().regex(/^[A-Za-z0-9 .,_]+$/, {
        message: "Password tidak boleh kosong.",
    }),
    confirm_password: z.string().regex(/^[A-Za-z0-9 .,_]+$/, {
        message: "Kolom ini tidak boleh kosong.",
    }),
});

export default function Register() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
            confirm_password: "",
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <GuestLayout>
            <Head title="Register" />
            <section className="flex justify-end items-end h-screen w-full bg-[url(/img/Group3.png)] bg-contain">
                <div className="w-1/3 h-screen bg-white flex flex-col gap-6 items-center justify-center">
                    <h1 className="font-bold text-2xl">Sign Up</h1>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="email unsri"
                                                className="w-80 rounded-3xl px-6 py-2 border-2 text-md"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="nama/username"
                                                className="w-80 rounded-3xl px-6 py-2 border-2 text-md"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="password"
                                                className="w-80 rounded-3xl px-6 py-2 border-2 text-md"
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
                                                placeholder="konfirmasi password"
                                                className="w-80 rounded-3xl px-6 py-2 border-2 text-md"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full py-5 rounded-3xl border-[#23318C] border-2 bg-[#23318C] text-white hover:bg-[#384ac1]"
                            >
                                Sign up
                            </Button>
                        </form>
                        <div className="text-center font-weight-light">
                            <Link
                                href={route("login")}
                                className="text-black font-semibold hover:text-gray-500 hover:font-semibold"
                            >
                                or sign in ?
                            </Link>
                        </div>
                    </Form>
                </div>
            </section>
        </GuestLayout>
    );
}
