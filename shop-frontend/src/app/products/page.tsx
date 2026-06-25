"use client";
import Link from "next/link";
import mockProducts from "@/data/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useMemo, useState } from "react";

const Products = () => {
  const prices = mockProducts.map((product) => product.Price);

  const availableTypes = useMemo(
    () => Array.from(new Set(mockProducts.map((product) => product.type))),
    [],
  );

  const minPrice = Math.floor(Math.min(...prices));
  const maxPrice = Math.ceil(Math.max(...prices));

  const [price, setPrice] = useState(maxPrice);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const filteredProducts = useMemo(
    () =>
      mockProducts.filter((product) => {
        const matchesPrice = product.Price <= price;
        const matchesType =
          selectedTypes.length === 0 || selectedTypes.includes(product.type);

        return matchesPrice && matchesType;
      }),
    [price, selectedTypes],
  );

  return (
    <section className="w-full bg-[#f5f7fb] px-3 py-4 flex flex-row gap-4">
      <div className="filter">
        <div className="container">
          {/* filter feature */}
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

            <div className="mb-3 justify-between">
              <span className="text-md font-medium ">Type</span>

              <form action="">
                <div className="mt-3 space-y-2">
                  {availableTypes.map((type) => {
                    const id = `type-${type}`;
                    return (
                      <div
                        key={type}
                        className="form-group flex items-center justify-between gap-3"
                      >
                        <label htmlFor={id} className="capitalize">
                          {type}
                        </label>
                        <input
                          type="checkbox"
                          name={type}
                          id={id}
                          checked={selectedTypes.includes(type)}
                          onChange={(e) => {
                            setSelectedTypes((current) =>
                              e.target.checked
                                ? [...current, type]
                                : current.filter((item) => item !== type),
                            );
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </form>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredProducts.length} of {mockProducts.length}{" "}
              products
            </div>
          </div>
        </div>
      </div>

      {/* product display */}

      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-black">All Products</h1>
            <p className="text-sm text-gray-500">
              Browse the complete collection
            </p>
          </div>
        </div>

        <div
          id="all-products"
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <p className="text-lg font-medium text-black">
                No products found
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <article key={product.sNo} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
                  <span className="absolute left-2 top-2  bg-black px-2 py-1 text-[10px] font-bold text-white text-center rounded-2xl">
                    HOT
                  </span>

                  <Link href={`/products/${product.slug}`} className="block">
                    <img
                      src={product.ImageUrl[0]}
                      alt={product.productName}
                      className="h-44 w-full object-cover sm:h-52"
                    />
                  </Link>

                  <button className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white opacity-70 text-black shadow-md transition-transform group-hover:scale-105">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="h-6 w-6 text-blue-700"
                    />
                  </button>
                </div>

                <div className="mt-2 space-y-1">
                  <Link href={`/products/${product.slug}`} className="block">
                    <h3 className="text-sm font-medium leading-tight text-black">
                      {product.productName}
                    </h3>
                  </Link>
                  <p className="text-sm font-semibold text-blue-600">
                    Ksh. {product.Price.toFixed(2)}
                  </p>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
