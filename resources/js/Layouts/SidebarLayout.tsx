import { Link } from "@inertiajs/react";

interface SidebarLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function SidebarLayout({ children, title }: SidebarLayoutProps) {
    return (
        <div className="flex h-screen">
            <aside className="w-72 bg-[#23318C] text-white flex flex-col justify-between py-6 fixed h-full">
                <div>
                    <Link
                        href="/"
                        className="text-2xl font-semibold mb-12 px-12 block"
                    >
                        LaporMin
                    </Link>

                    <div className="flex items-center px-12 mb-4">
                        <div className="w-12 h-12 rounded-full bg-white border mr-6" />
                        <div>
                            <p className="font-semibold text-base leading-tight mb-1">
                                Nama User
                            </p>
                            <p className="text-sm leading-tight">Nama User</p>
                        </div>
                    </div>

                    <hr className="border-white border-opacity-30 mx-12 mb-16"></hr>

                    <nav className="space-y-4 text-lg px-12">
                        <Link
                            href={route("profile.edit")}
                            className={`block ${
                                route().current("profile.edit")
                                    ? "font-semibold"
                                    : "font-normal"
                            }`}
                        >
                            Profile
                        </Link>

                        <Link
                            href={route("profile.ubahpassword")}
                            className={`block ${
                                route().current("profile.ubahpassword")
                                    ? "font-semibold"
                                    : "font-normal"
                            }`}
                        >
                            Ubah Password
                        </Link>

                        <Link href="#" className="block font-normal">
                            Pinjaman Saya
                        </Link>
                    </nav>
                </div>

                <div className="px-12">
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="text-lg font-semibold hover:underline"
                    >
                        Log out
                    </Link>
                </div>
            </aside>

            <main className="ml-72 flex-1 px-12 py-6 bg-white h-full">
                {title && <h2 className="text-2xl font-semibold">{title}</h2>}
                {children}
            </main>
        </div>
    );
}
