import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AuthenticatedLayout({ header, children }: any) {
    // const user = usePage().props.auth.user;

    const { url, component } = usePage();

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="mx-12 font-inter font-medium">
            <nav className="flex justify-between my-6">
                <div className="flex shrink-0 items-center text-2xl">
                    <Link href="/">
                        <h1>LaporMin</h1>
                    </Link>
                </div>
                <div className="flex text-xl">
                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                        <Link
                            href={"/"}
                            className={url === "/" ? "border-b-2" : ""}
                        >
                            Home
                        </Link>
                    </div>
                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                        <Link
                            href={route("inventaris")}
                            className={
                                url === route("inventaris") ? "border-b-2" : ""
                            }
                        >
                            Inventaris
                        </Link>
                    </div>
                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                        <Link
                            href={route("pengaduan")}
                            className={
                                url === route("pengaduan") ? "border-b-2" : ""
                            }
                        >
                            Pengaduan
                        </Link>
                    </div>
                </div>
                <div className="flex text-xl gap-4">
                    <div>icon box</div>
                    <div>profile</div>
                    <Link href={route("logout")} method="post" as="button">
                        Logout
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
