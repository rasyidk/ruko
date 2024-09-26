import HomeHero from "./components/HomeHero";
// import LayananKami from "@/app/components/LayananKami/LayananKami";
import Partner from "./components/Partner/Partner";
import Tentang from "./components/Tentang/Tentang";
import CobaGratis from "@/app/components/CobaGratis/CobaGratis";
import AktivitasKami from "@/app/components/AktivitasKami/AktivitasKami";
import {SocialProofTestimonials, TestimonialCard} from "@/app/components/Testimoni/Testimoni";
import {AppleCardsCarouselDemo} from "@/app/components/LayananKami/LayananKami";
import {pb} from "@/lib/pocketbase";
import {PBAdapter} from "@/lib/PBAdapter";

export default async function Home() {
    const activities = (await pb.collection('Aktivitas').getFullList({
        // sort: '-created',
        cache: "reload"
    })).map(PBAdapter.adaptActivity)

    const testimonials = (await pb.collection('Testimoni').getFullList({
        // sort: '-created',
        cache: "reload"

    })).map(PBAdapter.adaptTestimoni)

    return (
        <div className={"scroll-smooth"}>
            <HomeHero/>
            {/*<LayananKami />*/}
            <AppleCardsCarouselDemo/>
            <CobaGratis/>
            <Partner/>
            <Tentang/>
            <AktivitasKami activities={activities} />
            <SocialProofTestimonials testimonials={testimonials} />
        </div>
    );
}
