import { Link } from "@inertiajs/react";
import { Button } from "../ui/button";
import { z } from "zod";
import { router } from "@inertiajs/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { uploadToCloudinary } from "@/lib/cloudinary";

// const formSchema = z.object({
//     nama: z.string(),
//     pesan: z.string(),
//     imgUrl: z.string(),
// });

const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

const formSchema = z.object({
    name: z.string().regex(/^[A-Za-z0-9 .,_]+$/, {
        message: "Name can't be empty",
    }),
    msg: z.string().regex(/^[A-Za-z0-9 .,_]+$/, {
        message: "Message can't be empty",
    }),
    images: z
        .any()
        .optional()
        .refine(
            (files) => {
                return Array.from(files).every((file) => file instanceof File);
            },
            { message: "Expected a file" }
        )
        .refine(
            (files) =>
                Array.from(files).every((file: any) =>
                    ACCEPTED_IMAGE_TYPES.includes(file.type)
                ),
            "Only these types are allowed .jpg, .jpeg, .png and .webp"
        ),
});

export default function PengaduanForm() {
    const [imageFiles, setImageFiles] = useState<String[]>([]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const uploadPreset = "lapormin_pengaduan";
            if (!uploadPreset) {
                throw new Error("UPLOAD_PRESET not defined");
            }

            const files: File[] = Array.from(values.images);
            const uploadedUrls = await Promise.all(
                files.map((file) => uploadToCloudinary(file, uploadPreset))
            );

            // Kirim ke backend Laravel melalui Inertia
            router.post("/pengaduan", {
                name: values.name,
                msg: values.msg,
                link_gambar: uploadedUrls, // array of URLs
            });
        } catch (error) {
            console.error("Upload error:", error);
            alert(
                "Terjadi kesalahan saat mengunggah gambar atau mengirim form."
            );
        }
    }

    return (
        <div id="pengaduan" className="w-full flex justify-center">
            <div className="flex flex-col w-full bg-gray-100 py-8 px-20 rounded-2xl my-36">
                <h2 className="l text-center text-3xl font-semibold mb-6">
                    Form Pengaduan
                </h2>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6 items-center"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Nama Lengkap"
                                            className="w-full rounded-xl px-6 py-4 h-14 border-2 text-md"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex flex-row space-x-6">
                            <FormField
                                control={form.control}
                                name="msg"
                                render={({ field }) => (
                                    <FormItem className="w-2/3">
                                        <FormControl>
                                            <textarea
                                                rows={8}
                                                placeholder="Pesan.."
                                                className="w-full rounded-xl px-6 py-4 h-60 border-2 text-md bg-white focus:outline-none resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="images"
                                render={({ field }) => (
                                    <FormItem className="w-1/3">
                                        <div className="w-full h-60 bg-white border-2 rounded-xl px-6 py-4 overflow-hidden text-ellipsis">
                                            <FormLabel className="text-md overflow-hidden text-ellipsis text-wrap  text-muted-foreground invalid:text-muted-foreground items-start">
                                                {imageFiles.length > 0
                                                    ? imageFiles.join(", ")
                                                    : "Upload Images.."}
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    multiple
                                                    accept="image/jpeg,image/jpg,image/png,image/webp"
                                                    onChange={(e) => {
                                                        const imageFiles =
                                                            e.target.files;
                                                        if (imageFiles) {
                                                            const imageFilesList =
                                                                Array.from(
                                                                    imageFiles
                                                                );
                                                            setImageFiles(
                                                                imageFilesList.map(
                                                                    (e: any) =>
                                                                        e.name
                                                                )
                                                            );
                                                            field.onChange(
                                                                imageFiles
                                                            );
                                                        }
                                                    }}
                                                    ref={field.ref}
                                                    placeholder="Upload Images"
                                                    className="w-full file:hidden rounded-xl px-6 py-4 h-60 border-2 text-md bg-white hidden"
                                                />
                                            </FormControl>
                                        </div>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="text-sm px-10 rounded-xl border-[#23318C] border-2 bg-[#23318C] text-white hover:bg-[#384ac1]"
                        >
                            Kirim
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
