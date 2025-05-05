import { Link, router, usePage } from "@inertiajs/react";
import { LogOut, PackageOpen, User } from "lucide-react";
import { useState } from "react";
import { Toaster } from "@/Components/ui/sonner";

export default function AuthenticatedLayout({ header, children }: any) {
    // const user = usePage().props.auth.user;

    const { auth } = usePage().props as any;

    if (!auth.user) {
        router.visit("/login");
    }

    const [scrolled, setScrolled] = useState(false);

    function handleScrolled() {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener("scroll", handleScrolled);

    return (
        <div className="mx-20 font-inter font-medium">
            <nav
                className={`${
                    scrolled ? "shadow-lg" : "shadow-none"
                } flex justify-between py-6 px-20 fixed left-0 right-0 bg-white z-10
                  }`}
            >
                <div className="flex shrink-0 items-center text-2xl">
                    <Link href="/">
                        <h1>LaporMin</h1>
                    </Link>
                </div>
                <div className="flex text-xl">
                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                        <a href="#" className="text-black hover:text-gray-600">
                            Home
                        </a>
                    </div>
                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                        <a
                            href="#inventaris"
                            className="text-black hover:text-gray-600"
                        >
                            Inventaris
                        </a>
                    </div>
                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                        <a
                            href="#pengaduan"
                            className="text-black hover:text-gray-600"
                        >
                            Pengaduan
                        </a>
                    </div>
                </div>
                <div className="flex text-xl gap-4 items-center">
                    <Link href={route("box.index")}>
                        <PackageOpen strokeWidth={1.5} />
                    </Link>
                    <Link
                        href={route("profile.edit")}
                        method="get"
                        as="button"
                        className="cursor-pointer"
                    >
                        <User />
                    </Link>
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="cursor-pointer"
                    >
                        <LogOut />
                    </Link>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
            <Toaster />
        </div>
    );
}
