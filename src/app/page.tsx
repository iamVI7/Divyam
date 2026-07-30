import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromiseBar from "@/components/PromiseBar";
import Services from "@/components/Services";
import PromiseOfPurity from "@/components/PromiseOfPurity";
import PlanningTimeline from "@/components/PlanningTimeline";
import PlanningReadiness from "@/components/PlanningReadiness";
import CelebrationsGallery from "@/components/CelebrationsGallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PromiseBar />
      <Services />
      <PromiseOfPurity />
      <PlanningTimeline />
      <PlanningReadiness />
      <CelebrationsGallery />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
