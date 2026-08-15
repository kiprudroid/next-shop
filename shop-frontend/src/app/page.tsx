"use client"
import HeroSection from "@/features/components/HeroSection";
import About from "@/features/components/About";
import WhyUs from "@/features/components/WhyUs";
import ContactUs from "@/features/components/ContactUs";
import {fetchProducts} from "@/api/products.api";
import { Product } from "@/types/product";
import { useEffect, useState } from "react"
import Featured from "@/features/components/Featured"


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
