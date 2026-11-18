import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import APropos from "@/components/APropos";
import Projets from "@/components/Projets";
import Competences from "@/components/Competences";
import Formation from "@/components/Formation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <APropos />
        <Projets />
        <Competences />
        <Formation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
