import axios from 'axios'
import { Product } from '@/data/mockData'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const fetchProducts = async () => {
	const response = await axios.get<Product>(`${BACKEND_URL}/api/products`)
	return response.data
}

const fetchIndividualProduct = async (id: number) => {
	const response = await axios.get(`${BACKEND_URL}/api/products/${id}`)
	return response.data
}

const postProduct = async ({ product }: { product: Product }) => {
	// destructure product
	const { sNo,productName,Price,slug,ImageUrl,type } = product

	const payload = { sNo,productName,Price,slug,ImageUrl,type }

	const response = await axios.post(`${BACKEND_URL}/api/products`, payload)
	return response.data
}


