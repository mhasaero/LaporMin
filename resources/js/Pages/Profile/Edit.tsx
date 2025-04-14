import SidebarLayout from '@/Layouts/SidebarLayout';
import { Head, Link } from '@inertiajs/react';
import { usePage } from "@inertiajs/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/Components/ui/form";

// import DeleteUserForm from './Partials/DeleteUserForm';
// import UpdatePasswordForm from './Partials/UpdatePasswordForm';
// import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit() {
    const { props } = usePage();

    return (
        <SidebarLayout title="Profile">
            <Head title="Profile" />                
        </SidebarLayout>
    );
}

