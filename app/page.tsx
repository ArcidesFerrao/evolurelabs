import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Ticker from "@/app/components/Ticker";
import Services from "@/app/components/Services";
import Spotlight from "@/app/components/Spotlight";
import Process from "@/app/components/Process";
import Stats from "@/app/components/Stats";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Products />
      {/* <Spotlight /> */}
      <Process />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}
