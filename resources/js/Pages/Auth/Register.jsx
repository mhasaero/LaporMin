import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <section className="flex justify-end items-end h-screen w-full bg-[#23318C]">
                <div className="w-1/3 h-screen bg-white flex flex-col items-center justify-center">
                    <h1 className="font-bold text-2xl">Sign Up</h1>
                    <form className="pt-12 flex flex-col gap-6">
                        <div>
                            <input
                                type="text"
                                className="w-80 rounded-3xl px-6 py-2"
                                name="email"
                                id="email"
                                placeholder="email unsri"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="w-80 rounded-3xl px-6 py-2"
                                name="username"
                                id="username"
                                placeholder="nama/username"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                className="w-80 rounded-3xl px-6 py-2"
                                name="password"
                                id="password"
                                placeholder="password"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                className="w-80 rounded-3xl px-6 py-2"
                                name="confirm_password"
                                id="confirm_password"
                                placeholder="konfirmasi password"
                            />
                        </div>
                        <div className="mt-3 flex justify-center">
                            <button
                                type="submit"
                                className="w-80 rounded-3xl px-6 py-2 border-[#23318C] border-2 bg-[#23318C] text-white hover:bg-[#384ac1]"
                            >
                                sign up
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-4 font-weight-light">
                        <Link
                            to="/login"
                            className="text-black font-semibold hover:text-gray-500 hover:font-semibold"
                        >
                            or sign in ?
                        </Link>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
