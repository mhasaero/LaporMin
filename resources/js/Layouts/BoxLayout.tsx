import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function BoxLayout({ header, children }: any) {
    // const user = usePage().props.auth.user;

    const { url, component } = usePage();

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

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
                } flex justify-between py-6 px-12 fixed left-0 right-0 bg-white
                  }`}
            >
                <div className="flex gap-4 shrink-0 text-2xl items-end">
                    <Link href="/">
                        <h1>LaporMin</h1>
                    </Link>
                    <h1 className="text-xl border-s-2 border-black px-4">
                        Box Peminjaman
                    </h1>
                </div>
                <div className="flex text-xl gap-4">
                    <Link href={route("profile.edit")} method="get" as="button">
                        Profile
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
        </div>
    );
}
