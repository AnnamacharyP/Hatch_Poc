import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footers from "@/components/Footer";
import Card from "@/components/Cards";
import BackToTopButton from "@/components/Backtotop";
import Container from "@/components/Container";
import News from "@/components/News";
import Awards from "@/components/Awards";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Card/>
      {/* <BackToTopButton/> */}
      <News/>
      <Awards/>
      <Container/>
      {/* <Footers/> */}
    </main>
  );
}
