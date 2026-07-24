"use client"
import axios from 'axios'
import { Product } from '@/data/mockData'


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const fetchProducts = async () => {
	const response = await axios.get<Product[]>(`${BACKEND_URL}/api/products`)
	console.log(BACKEND_URL)
	return response.data
}

const fetchIndividualProduct = async (id: number) => {
	const response = await axios.get(`${BACKEND_URL}/api/products/${id}`)
	return response.data
}

const postProduct = async ({ product }: { product: Product }) => {
	const { sNo,productName,Price,slug,ImageUrl,type } = product
	const payload = { sNo,productName,Price,slug,ImageUrl,type }
	const response = await axios.post(`${BACKEND_URL}/api/products`, payload, { withCredentials: true })
	return response.data
}

const updateProduct = async (id: number, product: Partial<Product>) => {
	const response = await axios.put(`${BACKEND_URL}/api/products/${id}`, product, { withCredentials: true })
	return response.data
}

const deleteProduct = async (id: number) => {
	const response = await axios.delete(`${BACKEND_URL}/api/products/${id}`, { withCredentials: true })
	return response.data
}

const fetchProductBySlug = async (slug: string) => {
	const response = await axios.get(`${BACKEND_URL}/api/products/slug/${slug}`)
	return response.data
}

export {fetchProducts,fetchIndividualProduct,postProduct, updateProduct, deleteProduct, fetchProductBySlug}

