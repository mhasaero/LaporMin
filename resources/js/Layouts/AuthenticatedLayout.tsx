import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AuthenticatedLayout({ header, children }: any) {
    // const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="flex h-16 justify-between">
            <div className="flex">
                <div className="flex shrink-0 items-center">
                    <Link href="/">
                        <h1>LaporMin</h1>
                    </Link>
                </div>

                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink to={route("dashboard")}>Dashboard</NavLink>
                </div>
            </div>

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
