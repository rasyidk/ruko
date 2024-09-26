import { PB_URL } from "@/lib/pocketbase";

interface clientActivity {
    date: string;
    title: string;
    description: string;
    link: string;
    image: string;
}

interface clientTestimoni {
    name: string;
    role: string;
    img: string;
    description: string;
}


interface serverActivity {
    collectionId: string;
    collectionName: string;
    created: string;
    deskripsi: string;
    gambar_aktivitas: string;
    id: string;
    judul: string;
    link: string;
    tanggal: string;
    updated: string;
}

interface serverTestimoni {
    collectionId: string;
    collectionName: string;
    created: string;
    deskripsi: string;
    gambar_wajah: string;
    id: string;
    nama: string;
    pekerjaan: string;
    updated: string;
}

export class PBAdapter {
    static adaptFileLink(collection_id: string, record_id: string, file_name: string){
        return file_name ? `${PB_URL}/api/files/${collection_id}/${record_id}/${file_name}` : null
    }

    static adaptDate(date: string){
    //     change from 2024-09-13 12:00:00.000Z to 13 September 2024
        const dateObj = new Date(date)
        const options: any = { year: 'numeric', month: 'long', day: 'numeric' }
        return dateObj.toLocaleDateString('id-ID', options)
    }

    static adaptActivity(data: serverActivity): clientActivity {
        const image = PBAdapter.adaptFileLink(data.collectionId, data.id, data.gambar_aktivitas)
        return {
            date: PBAdapter.adaptDate(data.tanggal),
            title: data.judul,
            description: data.deskripsi,
            link: data.link,
            image: image
        }
    }

    static adaptTestimoni(data: serverTestimoni): clientTestimoni {
        const image = PBAdapter.adaptFileLink(data.collectionId, data.id, data.gambar_wajah)
        return {
            name: data.nama,
            role: data.pekerjaan,
            img: image,
            description: data.deskripsi
        }
    }


}