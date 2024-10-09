"use client";
import Image from "next/image";
import React from "react";
import {Card, Carousel} from "@/app/components/aceternity/Modal";
import {
    EPSTOPIKContent,
    KoreaUmumContent,
    TerjemahanContent,
    IndonesiaContent
} from "@/app/components/LayananKami/components/ModalCardContent";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
    const cards = data.slice(0,4).map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        (<div className="w-full h-full py-20 ">
            <h2
                className="max-w-7xl text-center pl-4 mx-auto text-xl md:text-5xl font-bold text-primary font-sans">
                Layanan Kami
            </h2>
            <Carousel items={cards} />
        </div>)
    );
}

export function AppleCardsCarouselDemo2() {
    const cards = data.slice(0,4).map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        (<div className="w-full h-full py-20 ">
            <h2
                className="max-w-7xl text-center pl-4 mx-auto text-xl md:text-5xl font-bold text-primary font-sans">
                Layanan Kami
            </h2>
            <Carousel items={cards} />
        </div>)
    );
}

const DummyContent = () => {
    return (<>
        {[...new Array(1).fill(1)].map((_, index) => {
            return (
                (<div
                    key={"dummy-content" + index}
                    className="bg-[#edebeb]  p-8 md:p-14 rounded-3xl mb-4">
                    <p
                        className="text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                            Proses Belajar:
                        </span>
                    </p>
                    <ol className={""}>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                1. Secara online interaktif via zoom meeting.
                            </p>
                        </li>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                2. Kelas Private atau Grup.
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                3. Level Dasar (7 kali pertemuan); Level 1 (16-25 kali pertemuan); Level 2 (16-25 kali
                                pertemuan).
                            </p>
                        </li>
                    </ol>
                    <p
                        className="mt-5 text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                            Fasilitas Gratis:
                        </span>
                    </p>
                    <ol className={""}>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                1. e-Book materi pelajaran dan materi latihan (Level Dasar; Level 1; Level 2)
                            </p>
                        </li>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                2. e-Book bahasa Korea Gaul
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                3. e-Sertifikat Kursus
                            </p>
                        </li>
                    </ol>
                    <p
                        className="mt-5 text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                            Capain Kemampuan Akhir:
                        </span>
                    </p>
                    <ol className={"leading-relaxed"}>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                1. Peserta akan Mampu membaca dan menulis bahasa Korea secara aktif dan berkelanjutan;
                            </p>
                        </li>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                2. Peserta akan Mampu memahami penggunaan angka Korea dan partikel penanda SKOP dalam
                                bahasa Korea secara aktif dan berkelanjutan
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                3. Peserta akan Mampu menerjemahkan kalimat bahasa Korea-Indonesia/Indonesia-Korea
                                secara aktif dan berkelanjutan
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                4. Peserta akan Mampu berbicara bahasa Korea sehari-hari secara aktif dan berkelanjutan.
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                5. Peserta akan Mampu mengikuti Ujian TOPIK (Test of Proficiency In Korean) I untuk mendapatkan Level 2.
                            </p>
                        </li>
                    </ol>
                    <Image
                        src="https://assets.aceternity.com/macbook.png"
                        alt="Macbook mockup from Aceternity UI"
                        height="500"
                        width="500"
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"/>
                </div>)
            );
        })}
    </>);
};

const data = [
    {
        category: "Layanan Kami",
        title: "KURSUS ONLINE INTERAKTIF" +
            "BAHASA KOREA UMUM",
        src: "/assets/layanan/korea-umum.jpg",
        content: <KoreaUmumContent/>,
        description: 'Kursus bahasa Korea umum merupakan pelatihan bahasa Korea yang ditujukan untuk siswa/wi SMA/SMK/MA; mahasiswa, dan masyarakat umum.'
    },
    {
        category: "Layanan Kami",
        title: "KURSUS BAHASA KOREA EPS-TOPIK INTENSIF PROGRAM G TO KERJA DI KOREA SELATAN (TATAP MUKA)",
        src: "/assets/layanan/eps.jpg",
        content: <EPSTOPIKContent/>,
        description: 'Kursus bahasa Korea EPS-TOPIK adalah Pelatihan bahasa Korea yang ditujukan kepada Masyarakat umum yang bertujuan untuk bekerja di Korea melalui pendaftaran Kerja Korea pada Program G to G Penempatan Pemerintah Indonesia di Korea Selatan secara RESMI. Program ini menyediakan lapangan pekerjaan pada bidang MANUFAKTUR; SHIP BUILDING; SERVICE; dan FISHING (Laut dan Tambak). '
    },
    {
        category: "Layanan Kami",
        title: "KURSUS ONLINE BAHASA KOREA EPS-TOPIK KERJA DI KOREA",
        src: "/assets/layanan/indonesia.jpg",
        content: <IndonesiaContent />,
        description: 'Kursus online bahasa Korea EPS-TOPIK adalah Pelatihan bahasa Korea yang ditujukan kepada Masyarakat umum yang bertujuan untuk bekerja di Korea melalui pendaftaran Kerja Korea pada Program G to G Penempatan Pemerintah Indonesia di Korea Selatan secara RESMI. Program ini menyediakan lapangan pekerjaan pada bidang MANUFAKTUR; SHIP BUILDING; SERVICE; dan FISHING (Laut dan Tambak). '
    },
    {
        category: "Layanan Kami",
        title: "JASA TERJEMAHAN (KOREA-INDONESIA / INDONESIA-KOREA)",
        src: "/assets/layanan/translate.jpg",
        content: <TerjemahanContent/>,
        description: 'Rumah Korea Indonesia siap melayani translet dokumen dari bahasa Indonesia ke bahasa Korea dan dari bahasa Korea ke bahasa Indonesia untuk Institusi/Perusahaan/Badan Usaha/Perorangan '
    },
    {
        category: "Layanan Kami",
        title: "KURSUS BAHASA KOREA EPS-TOPIK INTENSIF PROGRAM G TO G KERJA DI KOREA SELATAN",
        src: "/assets/layanan/eps.jpg",
        content: <EPSTOPIKContent/>,
        description: 'Kursus bahasa Korea EPS-TOPIK adalah Pelatihan bahasa Korea yang ditujukan kepada Masyarakat umum yang bertujuan untuk bekerja di Korea melalui pendaftaran Kerja Korea pada Program G to G Penempatan Pemerintah Indonesia di Korea Selatan secara RESMI. Program ini menyediakan lapangan pekerjaan pada bidang MANUFAKTUR; SHIP BUILDING; SERVICE; dan FISHING (Laut dan Tambak). '
    },
    {
        category: "Layanan Kami",
        title: "Kursus Bahasa Korea Umum",
        src: "/assets/layanan/korea-umum.jpg",
        content: <KoreaUmumContent/>,
        description: 'Kursus bahasa Korea umum merupakan pelatihan bahasa Korea yang ditujukan untuk siswa/wi SMA/SMK/MA; mahasiswa, dan masyarakat umum.'
    },
    {
        category: "Layanan Kami",
        title: "Terjemahan (Korea-Indonesia / Indonesia-Korea)",
        src: "/assets/layanan/translate.jpg",
        content: <TerjemahanContent/>,
        description: 'Rumah Korea Indonesia siap melayani translet dokumen dari bahasa Indonesia ke bahasa Korea dan dari bahasa Korea ke bahasa Indonesia untuk Institusi/Perusahaan/Badan Usaha/Perorangan '
    },

    {
        category: "Layanan Kami",
        title: "Kursus Bahasa Indonesia untuk Orang Korea",
        src: "/assets/layanan/indonesia.jpg",
        content: <IndonesiaContent />,
        description: 'Kursus bahasa Indonesia untuk Orang Korea ini merupakan program kursus yang dilakukan secara Online Interaktif Via Zoom Meeting. Program Kursus Bahasa Indonesia interaktif dipandu oleh tutor Korean Language Expert Lulusan Universitas Ternama Korea dan Indonesia. “Kelas Interaktif Online” yang terdiri dari Tingkat Pemula A-1, Tingkat Pemula A-2, Tingkat Menengah B-1, dan Tingkat Menengah B-2.'
    },



];
