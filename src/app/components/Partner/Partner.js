import Image from "next/image";

export default function Partner() {
  return (
    <div className="w-full bg-[#edebeb]">
      <div className="flex flex-col items-center justify-center py-16 gap-10">
        <span className="text-primary text-3xl md:text-4xl font-semibold text-center">
          Partner Rumah Korea Indonesia
        </span>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <Image
            alt="PPSDM BP2MI"
            src="/assets/partner/ppsdm.png"
            width={200}
            height={200}
            className="w-28 h-28 md:w-32 md:h-32 rounded-lg shadow-lg"
          />
          <Image
            alt="BBPVP Semarang"
            src="/assets/partner/bbpvp.png"
            width={200}
            height={200}
            className="w-full h-28 md:h-32 rounded-lg shadow-lg"
          />
          <Image
            alt="SMK Migas Muhamadiyah Cilacap"
            src="/assets/partner/muh.png"
            width={200}
            height={200}
            className="w-28 h-28 md:w-32 md:h-32 rounded-lg shadow-lg"
          />
          <Image
            alt="Disnaker Bantul"
            src="/assets/partner/bantul.png"
            width={200}
            height={200}
            className="w-28 h-28 md:w-32 md:h-32 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
