export type Product = {
  sNo: number;
  productName: string;
  Price: number;
  ImageUrl: string;
};

export const mockProducts: Product[] = [
  {
    sNo: 1,
    productName: 'Nairobi Classic Tee',
    Price: 1200,
    ImageUrl: '/Tee.png',
  },
  {
    sNo: 2,
    productName: 'Kisumu Denim Jacket',
    Price: 4200,
    ImageUrl: '/Jacket.png',
  },
  {
    sNo: 3,
    productName: 'Mombasa Linen Shirt',
    Price: 2500,
    ImageUrl: '/Shirt.png',
  },
  {
    sNo: 4,
    productName: 'Safari Cargo Shorts',
    Price: 1800,
    ImageUrl: '/CargoShorts.png',
  },
  {
    sNo: 5,
    productName: 'Savanna Maxi Dress',
    Price: 3500,
    ImageUrl: '/MaxiDress.png',
  },
  {
    sNo: 6,
    productName: 'Karibu Hoodie',
    Price: 3000,
    ImageUrl: '/Jacket.png',
  },
  {
    sNo: 7,
    productName: 'Lakeview Polo',
    Price: 1500,
    ImageUrl: '/Tee2.png',
  },
  {
    sNo: 8,
    productName: 'Coastline Shorts And Shirt Set',
    Price: 1400,
    ImageUrl: '/ShortAndShirt.png',
  },
  {
    sNo: 9,
    productName: 'Maasai Khaki Pants',
    Price: 800,
    ImageUrl: '/Khaki.png',
  },
  {
    sNo: 10,
    productName: 'Urban Chino Shirt',
    Price: 2600,
    ImageUrl: '/Shirt2.png',
  },
  {
    sNo: 11,
    productName: 'Twiga Mens Shorts',
    Price: 950,
    ImageUrl: '/Short.png',
  },
  {
    sNo: 12,
    productName: 'Dawn Running Shoes',
    Price: 5000,
    ImageUrl: '/Shoe.png',
  },
];

export default mockProducts;
