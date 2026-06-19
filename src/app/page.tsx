import HeroSection from "@/features/components/HeroSection";
import About from "@/features/components/About";
import WhyUs from "@/features/components/WhyUs";
import ContactUs from "@/features/components/ContactUs";
import Featured from "@/features/components/Featured";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <About />
        <WhyUs />
        <Featured />
        <ContactUs />
      </main>      
    </>
  );
}
