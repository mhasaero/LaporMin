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
    nim: z
        .string()
        .regex(
            /^(0902118(2025|2126|2227|2328|2429)(00[1-9]|0[1-4][0-9]|050)\b|0902128(2025|2126|2227|2328|2429)(05[1-9]|0[6-9][0-9]|1[0-6][0-9]|17[0-5])\b)/,
            {
                message: "NIM harus merupakan NIM UNSRI",
            }
        ),
    password: z.string().regex(/^[A-Za-z0-9 .,_]+$/, {
        message: "Password tidak boleh kosong.",
    }),
});

export default function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nim: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <GuestLayout>
            <Head title="Login" />
            <section className="flex justify-end items-end h-screen w-full bg-[url(/img/Group3.png)] bg-contain">
                <div className="w-1/3 h-screen bg-white flex flex-col gap-6 items-center justify-center">
                    <h1 className="font-bold text-2xl">Sign In</h1>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <FormField
                                control={form.control}
                                name="nim"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="nim unsri"
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
                            <Button
                                type="submit"
                                className="w-full py-5 rounded-3xl border-[#23318C] border-2 bg-[#23318C] text-white hover:bg-[#384ac1]"
                            >
                                Sign in
                            </Button>
                        </form>
                        <div className="text-center font-weight-light">
                            <span className="mr-2">don't have account ?</span>
                            <Link
                                href={route("register")}
                                className="text-black font-semibold hover:text-gray-500 hover:font-semibold"
                            >
                                sign up
                            </Link>
                        </div>
                    </Form>
                </div>
            </section>
        </GuestLayout>
    );
}
