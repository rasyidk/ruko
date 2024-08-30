import Image from "next/image";
import React from "react";

const KoreaUmumContent = () => {
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
                                5. Peserta akan Mampu mengikuti Ujian TOPIK (Test of Proficiency In Korean) I untuk
                                mendapatkan Level 2.
                            </p>
                        </li>
                    </ol>
                    <div className={"w-full flex justify-center mt-5"}>
                        <a rel="noopener noreferrer"
                           href="https://wa.me/6281328404065?text=Halo%20Rumah%20Korea%20Indonesia%2C%20saya%20mau%20tanya%20tentang%20kursus%20Bahasa%20Korea%20Umum."
                           className="px-8 py-3 text-lg font-semibold rounded bg-primary text-gray-50">Hubungi Kami</a>
                    </div>
                </div>)
            );
        })}
    </>);
};

const EPSTOPIKContent = () => {
    return (<>
        {[...new Array(1).fill(1)].map((_, index) => {
            return (
                (<div
                    key={"dummy-content" + index}
                    className="bg-[#edebeb]  p-8 md:p-14 rounded-3xl mb-4">
                    <p
                        className="text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                           Keterangan Program G to G:
                        </span>
                    </p>
                    <ol className={""}>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                1. Lama bekerja = 4 tahun 10 bulan.
                            </p>
                        </li>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                2. Hari kerja = Senin-Jumat (08.00-18.00).
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                3. Gaji per Bulan = Min. 25 Juta rupiah.
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                4. Dapat Pesangon.
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                5. Dapat Asuransi Jiwa dan Kesehatan.
                            </p>
                        </li>
                    </ol>
                    <p
                        className="mt-5 text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                            Syarat Peserta:
                        </span>
                    </p>
                    <ol className={"leading-relaxed"}>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                1. Minimal lulusan SMA/SMK/MA/Sederajat lainnya
                            </p>
                        </li>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                2. Laki/Perempuan tidak cacat fisik
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                3. Umur 18-25 Tahun
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                4. Tidak buta warna
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                5. Tidak memiliki penyakit menular (TB)
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                <span className={"text-red-500"}>Catatan :</span> Dokumen pendaftaran untuk kerja di
                                Korea akan dipersiapkan setelah
                                dinyatakan lolos level dasar.
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
                                1. Asrama (kasur, kipas angin, dapur, mesin cuci, ruang game)
                            </p>
                        </li>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                2. Buku materi Pelajaran dan Materi Latihan bahasa Korea
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                3. Tryout EPS-TOPIK
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                4. Kamus Kosakata
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                5. Baju Program
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                6. Penginputan data/sending data untuk melamar pekerjaan
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                7. Pendampingan sampai berangkat
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                8. Mengulang Kursus
                            </p>
                        </li>
                    </ol>
                    <p
                        className="mt-5 text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                            Proses Belajar dan Kegiatan:
                        </span>
                    </p>
                    <ol className={""}>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                1. Peserta WAJIB tinggal di asrama Rumah Korea Indonesia selama 4 bulan. (hari libur
                                bisa pulang kampung).
                            </p>
                        </li>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                2. Tahap awal belajar level dasar lalu diujikan, jika peserta gagal ujian level dasar,
                                maka peserta wajib mengundurkan diri.
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                3. Pembayaran dilakukan dua tahap bila dinyatakan layak lanjut level berikutnya.
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
                                5. Peserta akan Mampu mengikuti Ujian EPS-TOPIK (Employment Permit System-Test of
                                Proficiency In Korean) dan Lolos Ujian lalu Kerja di Korea.
                            </p>
                        </li>
                    </ol>
                    <div className={"w-full flex justify-center mt-5"}>
                        <a rel="noopener noreferrer" href="https://wa.me/6281328404065?text=Halo%20Rumah%20Korea%20Indonesia%2C%20saya%20mau%20tanya%20tentang%20kursus%20EPS-TOPIK."
                           className="px-8 py-3 text-lg font-semibold rounded bg-primary text-gray-50">Hubungi Kami</a>
                    </div>
                </div>)
            );
        })}
    </>);
};

const TerjemahanContent = () => {
    return (<>
        {[...new Array(1).fill(1)].map((_, index) => {
            return (
                (<div
                    key={"dummy-content" + index}
                    className="bg-[#edebeb]  p-8 md:p-14 rounded-3xl mb-4">
                    <p
                        className="text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                            Kriteria Terjemahan Dokumen
                        </span>
                    </p>
                    <ol className={""}>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                Ukuran Kertas A4 (21 x 29,7 cm)
                            </p>
                        </li>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                Rata kiri 3 cm, rata kanan 4 cm, rata atas 4 cm, rata bawah 3cm
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                Spasi 1,5
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                Font Size 12
                            </p>
                        </li>
                    </ol>
                    <p
                        className="mt-5 text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                           Harga Layanan Terjemahan
                        </span>
                    </p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-center border border-black">
                            <thead className="bg-cyan-600 text-white">
                            <tr>
                                <th className="px-4 py-2 border border-black">Bentuk</th>
                                <th className="px-4 py-2 border border-black">Harga per Lembar</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-black">Dokumen Resmi/Formal</td>
                                <td className="px-4 py-2 border border-black">300.000 IDR</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-black">Karya Tulis/Esai</td>
                                <td className="px-4 py-2 border border-black">200.000 IDR</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p
                        className="mt-5 text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                           Keterangan
                        </span>
                    </p>
                    <ol className={"leading-relaxed"}>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                1. Jumlah dokumen banyak dapat potongan harga (nego)
                            </p>
                        </li>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                2. Jam Operasional pembukaan dan pengerjaan dokumen mulai dari jam 09.00-21.00 WIB
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                3. Permintaan pengerjaan dokumen di luar jam operasional akan dikenakan biaya tambahan

                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                4. Lama hari pengerjaan disesuaikan dengan tingkat kesulitan isian dari dokumen
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                5. Pengerjaan Dimulai Setelah Dp 50% Dari Harga Total Keseluruhan
                            </p>
                        </li>
                    </ol>
                    <div className={"w-full flex justify-center mt-5"}>
                        <a rel="noopener noreferrer"
                           href="https://wa.me/6281328404065?text=Halo%20Rumah%20Korea%20Indonesia%2C%20saya%20mau%20tanya%20tentang%20terjemahan%20Bahasa%20Korea."
                           className="px-8 py-3 text-lg font-semibold rounded bg-primary text-gray-50">Hubungi Kami</a>
                    </div>
                </div>)
            );
        })}
    </>);
};

const IndonesiaContent = () => {
    return (<>
        {[...new Array(1).fill(1)].map((_, index) => {
            return (
                (<div
                    key={"dummy-content" + index}
                    className="bg-[#edebeb]  p-8 md:p-14 rounded-3xl mb-4">
                    <p
                        className="text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                            Keunggulan Program
                        </span>
                    </p>
                    <ol className={""}>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                1. Gratis biaya pendaftaran
                            </p>
                        </li>
                        <li>
                            <p className="text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                2. Gratis E-Book dan E-sertifikat
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                3. Guru Lulusan Program Studi Bhs. Korea dari Universitas Ternama di Indonesia dan Korea
                                Selatan yang Fasih dan Aktif berbahasa Korea
                            </p>
                        </li>
                        <li>
                            <p className=" text-base md:text-2xl font-sans max-w-3xl mx-auto">
                                4. Metode belajar yang digunakan adalah New Adaptif Learning Korea Style dan
                                komprehensif materi dan latihan.
                            </p>
                        </li>
                    </ol>
                    <p
                        className="mt-5 text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                           PILIHAN LEVEL, DURASI BELAJAR, PROSES BELAJAR, & PERTEMUAN
                        </span>
                    </p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-center border border-black">
                            <thead className="bg-cyan-600 text-white">
                            <tr>
                                <th rowSpan={2} className="px-4 py-2 border border-black">Level</th>
                                <th rowSpan={2} className="px-4 py-2 border border-black">Durasi Belajar</th>
                                <th className="px-4 py-2 border border-black" colSpan="3">Proses Belajar</th>
                                <th rowSpan={2} className="px-4 py-2 border border-black">Pertemuan</th>
                            </tr>
                            <tr>
                                <th className="px-4 py-2 border border-black">Materi</th>
                                <th className="px-4 py-2 border border-black">Review</th>
                                <th className="px-4 py-2 border border-black">Tes Akhir</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-black">A-1</td>
                                <td className="px-4 py-2 border border-black">90'</td>
                                <td className="px-4 py-2 border border-black">9 Bab</td>
                                <td className="px-4 py-2 border border-black">1 Kali</td>
                                <td className="px-4 py-2 border border-black">1 Kali</td>
                                <td className="px-4 py-2 border border-black">20 kali</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-black">A-2</td>
                                <td className="px-4 py-2 border border-black">90'</td>
                                <td className="px-4 py-2 border border-black">10 Bab</td>
                                <td className="px-4 py-2 border border-black">1 Kali</td>
                                <td className="px-4 py-2 border border-black">1 Kali</td>
                                <td className="px-4 py-2 border border-black">22 kali</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-black">B-1</td>
                                <td className="px-4 py-2 border border-black">90'</td>
                                <td className="px-4 py-2 border border-black">10 Bab</td>
                                <td className="px-4 py-2 border border-black">1 Kali</td>
                                <td className="px-4 py-2 border border-black">1 Kali</td>
                                <td className="px-4 py-2 border border-black">22 kali</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-black">B-2</td>
                                <td className="px-4 py-2 border border-black">90'</td>
                                <td className="px-4 py-2 border border-black">10 Bab</td>
                                <td className="px-4 py-2 border border-black">1 Kali</td>
                                <td className="px-4 py-2 border border-black">1 Kali</td>
                                <td className="px-4 py-2 border border-black">22 kali</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p
                        className="mt-5 text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 ">
                           BIAYA
                        </span>
                    </p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-center border border-black">
                            <thead className="bg-cyan-600 text-white">
                            <tr>
                                <th rowSpan={2} className="px-4 py-2 border border-black">Level</th>
                                <th className="px-4 py-2 border border-black" colSpan="2">Biaya/Orang</th>
                            </tr>
                            <tr>
                                <th className="px-4 py-2 border border-black text-neutral-800 bg-orange-300">PRIVAT</th>
                                <th className="px-4 py-2 border border-black text-neutral-800 bg-orange-300">GRUP</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-black">A-1</td>
                                <td className="px-4 py-2 border border-black">750 USD</td>
                                <td className="px-4 py-2 border border-black">300 USD</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-black">A-2</td>
                                <td className="px-4 py-2 border border-black">1000 USD</td>
                                <td className="px-4 py-2 border border-black">500 USD</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-black">B-1</td>
                                <td className="px-4 py-2 border border-black">1000 USD</td>
                                <td className="px-4 py-2 border border-black">500 USD</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-black">B-2</td>
                                <td className="px-4 py-2 border border-black">1000 USD</td>
                                <td className="px-4 py-2 border border-black">500 USD</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={"w-full flex justify-center mt-5"}>
                        <a rel="noopener noreferrer"
                           href="https://wa.me/6281328404065?text=Halo%20Rumah%20Korea%20Indonesia%2C%20saya%20mau%20tanya%20tentang%20kursus%20Bahasa%20Indonesia%20untuk%20orang%20Korea."
                           className="px-8 py-3 text-lg font-semibold rounded bg-primary text-gray-50">Hubungi Kami</a>
                    </div>
                </div>)
            );
        })}
    </>);
};

export {KoreaUmumContent, EPSTOPIKContent, TerjemahanContent, IndonesiaContent};


