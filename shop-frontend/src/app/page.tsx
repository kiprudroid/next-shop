"use client"
import HeroSection from "@/features/components/HeroSection";
import About from "@/features/components/About";
import WhyUs from "@/features/components/WhyUs";
import ContactUs from "@/features/components/ContactUs";
import Featured from "@/features/components/Featured";
import {fetchProducts} from "@/api/products.api";
import { Product } from "@/data/mockData";
import { useEffect, useState } from "react"


export default function Home() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  console.log("Products fetched:", products)
  return (
    <>      
        <HeroSection />        
        <WhyUs />
        <Featured />
        <ContactUs />           
    </>
  );
}
