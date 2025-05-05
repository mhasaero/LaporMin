export async function uploadToCloudinary(
    file: File,
    uploadPreset: string
): Promise<string> {
    const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

    if (!CLOUD_NAME) {
        throw new Error("CLOUDINARY_CLOUD_NAME is not defined");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error("Failed to upload image to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url as string;
}
