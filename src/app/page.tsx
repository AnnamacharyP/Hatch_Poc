import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footers from "@/components/Footer";
import Card from "@/components/Cards";
import BackToTopButton from "@/components/Backtotop";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Card/>
      <BackToTopButton/>
      <Footers/>
    </main>
  );
}
