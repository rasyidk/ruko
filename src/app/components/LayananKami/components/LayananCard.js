import Image from "next/image";

export default function LayananCard({title, image, link, content}) {
    return (
        <div className={"w-full h-full max-h-[400px] border-[#C2C2C2] border rounded-[4px] flex flex-col"}>
            <div className={"w-full h-[220px] relative"}>
                <Image src={image} className={"object-cover"} fill/>
            </div>
            <div className={"p-2 flex w-full h-full flex-col justify-between"}>
                <div className={"flex flex-col w-full"}>
                    <p className={"text-black font-semibold line-clamp-3"}>{title}</p>
                    <p className={'text-sm mt-5 line-clamp-6'} >{content}</p>
                </div>
                <a href={link} target={"_blank"} className={"text-primary font-bold  cursor-pointer"}>Lihat Selengkapnya</a>
            </div>
        </div>
    )
}