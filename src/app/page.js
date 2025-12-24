import HomeHero from "./components/HomeHero";
// import LayananKami from "@/app/components/LayananKami/LayananKami";
import Partner from "./components/Partner/Partner";
import Tentang from "./components/Tentang/Tentang";
import CobaGratis from "@/app/components/CobaGratis/CobaGratis";
import AktivitasKami from "@/app/components/AktivitasKami/AktivitasKami";
import {SocialProofTestimonials} from "@/app/components/Testimoni/Testimoni";
import {AppleCardsCarouselDemo} from "@/app/components/LayananKami/LayananKami";
import { getActivities, getTestimonials } from "@/actions/data";

export default async function Home() {
    // Fetch data in parallel instead of sequential
    const [activities, testimonials] = await Promise.all([
        getActivities(),
        getTestimonials()
    ]);

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
