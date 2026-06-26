"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import mockProducts from "@/data/mockData";
import { useState } from "react";
import SimilarProducts from "@/features/components/SimilarProducts";
const ProductDetails = ({ slug }: { slug: string }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    
    const product = mockProducts.find((p) => p.slug === slug);
    const currentImageIndex = selectedImageIndex ?? 0;

    if (!product) {
        notFound();
    }

    return(
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lg">
                        <Image 
                            src={product.ImageUrl[currentImageIndex]} 
                            alt={product.productName} 
                            width={400} 
                            height={400} 
                            className="h-auto w-full object-cover"
                        />
                        {product.ImageUrl.length > 1 ? (
                            <>
                                <button
                                    type="button"
                                    aria-label="Previous image"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-black"
                                    onClick={() =>
                                        setSelectedImageIndex(
                                            (currentImageIndex - 1 + product.ImageUrl.length) % product.ImageUrl.length
                                        )
                                    }
                                >
                                    ‹
                                </button>
                                <button
                                    type="button"
                                    aria-label="Next image"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-black"
                                    onClick={() =>
                                        setSelectedImageIndex(
                                            (currentImageIndex + 1) % product.ImageUrl.length
                                        )
                                    }
                                >
                                    ›
                                </button>
                            </>
                        ) : null}
                    </div>
                </div>
                
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-black mb-4">
                        {product.productName}
                    </h1>
                    <p className="text-3xl font-semibold text-blue-600 mb-6">
                        Ksh. {product.Price.toFixed(2)}
                    </p>
                    <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-4 w-50">
                        Add to Cart
                    </button>
                    
                </div>
            </div>
                  <div className="mx-auto max-w-6xl mt-8">
                    <h1 className="text-2xl font-bold text-black mb-4">
                        Similar Products
                    </h1>
                    <SimilarProducts product={product} />
                  </div>
        </div>
    )
}

export default ProductDetails;