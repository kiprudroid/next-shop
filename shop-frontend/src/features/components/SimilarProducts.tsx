import mockProducts from '@/data/mockData'
import ProductCard from './ProductCard'
import type {Product} from '@/data/mockData'

const SimilarProducts = ({ product }: { product: Product }) => {

  const similarProducts = mockProducts.filter((p) => p.type === product.type && p.sNo !== product.sNo).slice(0, 5);

  return (
    <div className='container w-full grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {similarProducts.map((product) => (
        <ProductCard key={product.sNo} product={product} />
      ))}
      </div>
  )
}

export default SimilarProducts