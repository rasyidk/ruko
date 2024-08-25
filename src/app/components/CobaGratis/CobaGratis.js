import Image from "next/image";

export default function CobaGratis() {
    return (
        <section className="bg-white 2xl:px-52 lg:px-32">
            <div
                className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div
                    className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="assets/coba.jpg" alt=""
                         className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"/>
                </div>
                <div
                    className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Kamu sudah
                        <span className="text-primary"> Siap?</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Uji kemampuan bahasa korea EPS-TOPIK mu disini! <span className="text-primary font-bold">GRATIS!</span>
                    </p>
                    <div
                        className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="https://www.rumahepstopik.com/"
                           className="px-8 py-3 text-lg font-semibold rounded bg-primary text-gray-50">Coba Sekarang</a>
                        <a rel="noopener noreferrer" href="https://wa.me/6281328404065?text=Halo%20Rumah%20Korea%20Indonesia%2C%20saya%20mau%20tanya%20tentang%20EPS-TOPIK%20Gratis%20Test%20Online."
                           className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Hubungi Kami</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
