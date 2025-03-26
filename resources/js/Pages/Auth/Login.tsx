import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

type Props = {
    status: string;
    canResetPassword: string;
};

export default function Login({ status, canResetPassword }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e: any) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <section className="flex justify-end items-end h-screen w-full bg-[url(/img/Group3.png)] bg-contain">
                <div className="w-1/3 h-screen bg-white flex flex-col items-center justify-center">
                    <h1 className="font-bold text-2xl">Sign In</h1>
                    <form className="pt-12 flex flex-col gap-6">
                        <div>
                            <input
                                type="text"
                                className="w-80 rounded-3xl px-6 py-2"
                                name="nim"
                                id="nim"
                                placeholder="nim"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="w-80 rounded-3xl px-6 py-2"
                                name="password"
                                id="password"
                                placeholder="password"
                            />
                        </div>
                        <div className="mt-3 flex justify-center">
                            <button
                                type="submit"
                                className="w-80 rounded-3xl px-6 py-2 border-[#23318C] border-2 bg-[#23318C] text-white hover:bg-[#384ac1]"
                            >
                                sign in
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-4 font-weight-light">
                        <span className="mr-2">don't have account ?</span>
                        <Link
                            href={route("register")}
                            className="text-black font-semibold hover:text-gray-500 hover:font-semibold"
                        >
                            sign up
                        </Link>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
