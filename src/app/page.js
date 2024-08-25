import HomeHero from "./components/HomeHero";
import LayananKami from "@/app/components/LayananKami/LayananKami";
import Partner from "./components/Partner/Partner";
import Tentang from "./components/Tentang/Tentang";
import CobaGratis from "@/app/components/CobaGratis/CobaGratis";
import AktivitasKami from "@/app/components/AktivitasKami/AktivitasKami";

export default function Home() {
  return (
    <div className={"scroll-smooth"}>
      <HomeHero />
      <LayananKami />
      <CobaGratis/>
      <Partner />
      <Tentang />
      <AktivitasKami/>
    </div>
  );
}
