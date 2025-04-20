import { Link, usePage } from "@inertiajs/react";
import React from "react";

export default function Footer() {
    const { url, component } = usePage();
    return (
        <section className="">
            <div className="absolute flex justify-between items-center left-0 right-0 w-full min-h-72 bg-[#23318C] text-white px-20">
                <h1 className="text-2xl font-bold">LaporMin</h1>
                <div className="flex flex-col gap-2 text-center text-lg">
                    <a href="#" className="text-white hover:text-gray-200">
                        Home
                    </a>
                    <a
                        href="#inventaris"
                        className="text-white hover:text-gray-200"
                    >
                        Inventaris
                    </a>
                    <a
                        href="#pengaduan"
                        className="text-white hover:text-gray-200"
                    >
                        Pengaduan
                    </a>
                </div>
                <p className="text-lg font-bold">&copy;2025</p>
            </div>
        </section>
    );
}
