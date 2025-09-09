"use client"

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/app/about/page";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BannerCarousel } from "@/components/banner/page";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BannerCarousel />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;