import Carousal from "@/components/home/Carousal";
import Categories from "@/components/home/Categories";
import HeroSection from "@/components/home/HeroSection";
import Sections from "@/components/home/Sections";

export default function Home() {
  return (
    <main className="w-screen xl:max-w-screen-xl overflow-hidden">
      <HeroSection />
      <Categories />
      <Carousal />
      <Sections />
    </main>
  );
}
