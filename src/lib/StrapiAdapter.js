export class StrapiAdapter {
    static adaptDate(date) {
        // change from 2025-12-10 to 10 Desember 2025
        const dateObj = new Date(date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return dateObj.toLocaleDateString('id-ID', options);
    }

    static adaptImageUrl(imageData) {
        // Handle Strapi image structure
        if (!imageData || !imageData.data) return null;
        
        const attributes = imageData.data.attributes;
        if (!attributes) return null;

        // Get the base URL from environment or construct it
        const baseUrl = process.env.API_BASE_URL?.replace('/api', '') || 'https://be.rumahkorea.id';
        
        // Use the original url or construct from available formats
        return `${baseUrl}${attributes.url}`;
    }

    static adaptActivity(data) {
        const attributes = data.attributes;
        const image = StrapiAdapter.adaptImageUrl(attributes.gambar_aktivitas);
        
        return {
            date: StrapiAdapter.adaptDate(attributes.tanggal),
            title: attributes.judul_aktivitas,
            description: attributes.deskripsi,
            link: attributes.link,
            image: image
        };
    }

    static adaptTestimoni(data) {
        const attributes = data.attributes;
        const image = StrapiAdapter.adaptImageUrl(attributes.profile_picture);
        
        return {
            name: attributes.nama,
            role: attributes.pekerjaan,
            img: image,
            description: attributes.testimoni
        };
    }
}

