import { Navbar } from "@/components/salon/Navbar";
import { Hero } from "@/components/salon/Hero";
import { SocialProof } from "@/components/salon/SocialProof";
import { Services } from "@/components/salon/Services";
import { Gallery } from "@/components/salon/Gallery";
import { About } from "@/components/salon/About";
import { Differentials } from "@/components/salon/Differentials";
import { CTA } from "@/components/salon/CTA";
import { LocationContact } from "@/components/salon/LocationContact";
import { Footer } from "@/components/salon/Footer";
import { WhatsAppFloat } from "@/components/salon/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <Gallery />
      <About />
      <Differentials />
      <CTA />
      <LocationContact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
