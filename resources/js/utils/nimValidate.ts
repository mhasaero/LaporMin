function fakultasValidate(nim: string) {
    const fakultas = nim.slice(0, 2);
    const fakultasMap: { [key: string]: string } = {
        "01": "Ekonomi",
        "02": "Hukum",
        "03": "Teknik",
        "04": "Kedokteran",
        "05": "Pertanian",
        "06": "Keguruan dan ilmu Pendidikan",
        "07": "Ilmu Sosial dan Ilmu Politik",
        "08": "Matematika dan Ilmu Pengetahuan Alam",
        "09": "Ilmu Komputer",
        "10": "Kesehatan Masyarakat",
    };
    return fakultasMap[fakultas] || "";
}

function programPendidikanValidate(nim: string) {
    const programPendidikan = nim.slice(4, 5);
    const programPendidikanMap: { [key: string]: string } = {
        "0": "Diploma Tiga",
        "1": "Sarjana",
        "2": "Magister",
        "3": "Doktor",
        "4": "Profesi",
        "5": "Spesialis",
        "6": "Darmasiswa",
        "7": "Adaptasi",
    };
    return programPendidikanMap[programPendidikan] || "";
}

function jurusanValidate(nim: string, fakultas: string) {
    const jurusan = nim.slice(2, 5);
    const fasilkomMap: { [jurusan: string]: string } = {
        "010": "Manajemen Informatika",
        "020": "komputerisasi Akuntansi",
        "030": "Teknik Komputer",
        "011": "Sistem Komputer",
        "021": "Teknik Informatika",
        "031": "Sistem Informasi",
        "012": "Teknik Informatika",
    };
    return fasilkomMap[jurusan] || "";
}

export { fakultasValidate, jurusanValidate };
