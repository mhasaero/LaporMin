import { Link, usePage } from "@inertiajs/react";

interface SidebarLayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function SidebarLayout({ children, title }: SidebarLayoutProps) {
    const { auth } = usePage().props as any;
    const user = auth?.user;

    return (
        <div className="flex h-screen">
            <aside className="bg-[#23318C] text-white flex flex-col justify-between py-6 fixed h-full">
                <div>
                    <Link
                        href="/"
                        className="text-2xl font-semibold mb-12 px-12 block"
                        >
                        LaporMin
                    </Link>

                    {user && (
                        <div className="flex items-center px-12 mb-4">
                        <div className="w-12 h-12 rounded-full bg-white border mr-4" />
                        <div>
                            <p className="font-semibold text-lg leading-tight mb-1">
                            {user.name}
                            </p>
                            <p className="text-lg leading-tight">{user.nim}</p>
                        </div>
                        </div>
                    )}

                    <hr className="border-white border-opacity-30 mx-12 mb-16"></hr>

                    <nav className="space-y-4 text-xl px-12">
                        <Link
                            href={route("profile.edit")}
                            className={`block ${route().current("profile.edit") ? "font-semibold" : "font-normal"}`}
                        >
                            Profile
                        </Link>

                        <Link
                            href={route("profile.ubahpassword")}
                            className={`block ${route().current("profile.ubahpassword") ? "font-semibold" : "font-normal"}`}
                        >
                            Ubah Password
                        </Link>

                        <Link
                            href={route("profile.pinjamanSaya")}
                            className={`block ${route().current("profile.pinjamanSaya") ? "font-semibold" : "font-normal"}`}
                        >
                            Pinjaman Saya
                        </Link>
                    </nav>
                </div>

                <div className="px-12">
                    <Link href={route("logout")} method="post" as="button" className="text-xl font-semibold hover:underline">
                        Log out
                    </Link>
                </div>
            </aside>

            <main className="ml-72 flex-1 px-12 py-6 bg-white ">
                {title && <h2 className="text-2xl font-semibold ml-10">{title}</h2>}
                {children}
            </main>
        </div>
    );
}