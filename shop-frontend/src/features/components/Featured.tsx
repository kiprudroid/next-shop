    import mockProducts from '@/data/mockData';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faShoppingCart, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

    const Featured = () => {
        const products = mockProducts.slice(0, 4);

        return (
            <section className="w-full bg-[#f5f7fb] px-3 py-4" id="FeaturedProducts">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-4 flex items-end justify-between gap-3">
                        <div>
                            <h2 className="text-2xl font-semibold text-black">Featured Collections</h2>
                            <p className="text-sm text-gray-500">Handpicked essentials for the season</p>
                        </div>

                        <Link prefetch href="/products" className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                                
                            Show All <FontAwesomeIcon icon={faSearch} className="text-xs" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {products.map((product) => (
                            <article key={product.sNo} className="group">
                                <Link href={`/products/${product.slug}`} className="block">
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
                                    <span className="absolute left-2 top-2 rounded bg-black px-2 py-1 text-[10px] font-bold text-white">
                                        HOT
                                    </span>
                                    <img
                                        src={product.ImageUrl[0]}
                                        alt={product.productName}
                                        className="h-44 w-full object-cover sm:h-52"
                                    />

                                    <button className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform group-hover:scale-105">
                                        <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 text-blue-700" />
                                    </button>
                                </div>

                                <div className="mt-2 space-y-1">
                                    <h3 className="text-sm font-medium leading-tight text-black">{product.productName}</h3>
                                    <p className="text-sm font-semibold text-blue-600">Ksh. {product.Price.toFixed(2)}</p>
                                </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    export default Featured;