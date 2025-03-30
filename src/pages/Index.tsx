
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OverviewSection from "@/components/OverviewSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import ProductsSection from "@/components/ProductsSection";
import MarketSection from "@/components/MarketSection";
import SwotSection from "@/components/SwotSection";
import FutureSection from "@/components/FutureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <OverviewSection />
        <BusinessModelSection />
        <ProductsSection />
        <MarketSection />
        <SwotSection />
        <FutureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
