"use client";
import { useMemo, useState } from "react"
import mockProducts from "@/data/mockData"

const FilterFeature = () => {
    const prices = mockProducts.map((product) => product.Price)
    const minPrice = Math.floor(Math.min(...prices))
    const maxPrice = Math.ceil(Math.max(...prices))

    const [price, setPrice] = useState(maxPrice)

    const filteredProducts = useMemo(
        () => mockProducts.filter((product) => product.Price <= price),
        [price]
    )

    return (
        <div className="container">
            <h2 className="text-2xl font-bold mb-4">Filter Products</h2>
            <div className="max-w-md rounded-lg border p-4">
                <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-medium">Price Slider</span>
                    <span className="text-sm text-gray-600">Ksh. {price}</span>
                </div>

                <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full"
                />

                <div className="mt-4 text-sm text-gray-600">
                    Showing {filteredProducts.length} of {mockProducts.length} products
                </div>
            </div>

        </div>
    )

}
export default FilterFeature