import Link from "next/link";
import mockProducts from "@/data/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  return (
    <section className="w-full bg-[#f5f7fb] px-3 py-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-black">All Products</h1>
            <p className="text-sm text-gray-500">Browse the complete collection</p>
          </div>
        </div>

        <div
          id="all-products"
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4"
        >
          {mockProducts.map((product) => (
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
                  <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 text-blue-700" />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
