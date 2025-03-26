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
                    <form className="pt-3 flex flex-col gap-6">
                        <div className="">
                            <input
                                type="text"
                                className="w-80 rounded-3xl px-6 py-2"
                                name="email"
                                id="email"
                                placeholder="email unsri"
                            />
                        </div>
                        <div className="mt-3 flex justify-center">
                            <button
                                type="submit"
                                className="w-80 rounded-3xl px-6 py-2 bg-[#23318C] text-white"
                            >
                                sign up
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-4 font-weight-light">
                        <Link to="/login" className="text-primary">
                            or sign in ?
                        </Link>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
