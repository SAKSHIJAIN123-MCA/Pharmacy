import Image from "next/image";
import ShopCategories from "./components/Categories";
import BannerCarousel from "./components/Banner";
import ValueDeals from "./components/Newarrival";
import ShopByBrand from "./components/Brand";
import HealthBanners from "./components/Healthbanner";
import MedicalHeroSection from "./components/About";
import TrustBadges from "./components/TrustBadges";
import FaqAccordion from "./components/FaqAccordion";
import ContactUs from "./components/ContactUs";
import Deals from "./components/TopProducts";
import OurVisionSection from "./components/Vision";


export default function Home() {
  return (
    <>
      <ShopCategories />
      <BannerCarousel />
      <ValueDeals />
      <Deals/>
      <ShopByBrand />
      <MedicalHeroSection />
      <OurVisionSection/>
      <TrustBadges />
      <ContactUs />
      <FaqAccordion />
    </>
  );
}
