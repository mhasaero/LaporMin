import { Link } from "@inertiajs/react";

type Props = {
    children: React.ReactNode;
};

export default function GuestLayout({ children }: Props) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    {/* <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" /> */}
                </Link>
            </div>

            <div className="w-full overflow-hidden">{children}</div>
        </div>
    );
}
