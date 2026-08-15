import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import type {Product} from '@/types/product'
import { fetchProducts } from '@/api/products.api'

const SimilarProducts = ({ product }: { product: Product }) => {
  const [similarProducts, setSimilarProducts] = useState<Product[]>([])

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProducts();
        const similar = data.filter((p) => p.type === product.type && p.sNo !== product.sNo).slice(0, 5);
        setSimilarProducts(similar);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, [product.type, product.sNo]);

  return (
    <div className='container w-full grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {similarProducts.map((p) => (
        <ProductCard key={p.sNo} product={p} />
      ))}
      </div>
  )
}

export default SimilarProducts