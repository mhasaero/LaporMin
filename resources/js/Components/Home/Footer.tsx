import { Link, usePage } from "@inertiajs/react";
import { Link as ReactLink } from "react-router-dom";
import React from "react";

export default function Footer() {
    const { url, component } = usePage();
    return (
        <section className="">
            <div className="absolute flex justify-between items-center left-0 right-0 w-full min-h-72 bg-[#23318C] text-white px-20">
                <h1 className="text-2xl font-bold">LaporMin</h1>
                <div className="flex flex-col gap-2 text-center text-lg">
                    <Link href="">Home</Link>
                    <Link
                        href={route("inventaris")}
                        className={
                            url === route("inventaris") ? "border-b-2" : ""
                        }
                    >
                        Inventaris
                    </Link>
                    <a href="#pengaduan">Pengaduan</a>
                </div>
                <p className="text-lg font-bold">&copy;2025</p>
            </div>
        </section>
    );
}
