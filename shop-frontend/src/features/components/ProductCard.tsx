import React from 'react'
import { Product } from '@/data/mockData'
import Link from 'next/dist/client/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article key={product.sNo} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">                  

                  <Link href={`/products/${product.slug}`} className="block">
                    <img
                      src={product.ImageUrl}
                      alt={product.productName}
                      className="h-44 w-full object-cover sm:h-52"
                    />
                  </Link>

                  <Button className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white opacity-70 text-black shadow-md transition-transform group-hover:scale-105">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="h-6 w-6 text-blue-700"
                    />
                  </Button>
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
  )
}

export default ProductCard