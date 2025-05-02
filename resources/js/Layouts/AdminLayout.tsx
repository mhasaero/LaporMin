import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import {
    ClipboardList,
    CornerDownLeft,
    Home,
    Menu,
    PackageCheck,
    User,
    X,
} from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="font-inter min-h-screen flex flex-col">
            {/* Navbar */}
            <nav
                className={`${
                    scrolled ? "shadow-md" : "shadow-none"
                } bg-white fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center border-b`}
            >
                <div className="text-2xl font-bold text-blue-600">
                    <Link href="/">LaporMin</Link>
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex gap-6 text-gray-700 text-base items-center">
                    <Link
                        href="/admin/peminjaman-approval"
                        className="hover:text-blue-600 flex items-center gap-1"
                    >
                        <ClipboardList className="w-5 h-5" /> Peminjaman
                    </Link>
                    <Link
                        href="/admin/pengembalian-approval"
                        className="hover:text-blue-600 flex items-center gap-1"
                    >
                        <PackageCheck className="w-5 h-5" /> Pengembalian
                    </Link>
                    <Link
                        href="/dashboard"
                        className="hover:text-blue-600 flex items-center gap-1"
                    >
                        <Home className="w-5 h-5" /> Dashboard
                    </Link>
                    <Link
                        href="/profile/edit"
                        className="hover:text-blue-600 flex items-center gap-1"
                    >
                        <User className="w-5 h-5" /> Profile
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none text-gray-700"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md px-6 pt-20 pb-4 space-y-4 text-gray-700 text-base">
                    <Link
                        href="/admin/peminjaman-approval"
                        className=" flex items-center gap-2"
                    >
                        <ClipboardList className="w-5 h-5" /> Peminjaman
                    </Link>
                    <Link
                        href="/admin/pengembalian-approval"
                        className=" flex items-center gap-2"
                    >
                        <PackageCheck className="w-5 h-5" /> Pengembalian
                    </Link>
                    <Link
                        href="/dashboard"
                        className=" flex items-center gap-2"
                    >
                        <Home className="w-5 h-5" /> Dashboard
                    </Link>
                    <Link
                        href="/profile/edit"
                        className=" flex items-center gap-2"
                    >
                        <User className="w-5 h-5" /> Profile
                    </Link>
                </div>
            )}

            {/* Main content */}
            <main className="pt-24 px-4 md:px-10 flex-grow">{children}</main>

            {/* Footer */}
            <footer className="bg-white border-t py-4 text-center text-gray-500 text-sm mt-12">
                <div className="flex justify-center items-center gap-1">
                    <CornerDownLeft className="w-4 h-4" />
                    LaporMin Admin © {new Date().getFullYear()}
                </div>
            </footer>
        </div>
    );
}
