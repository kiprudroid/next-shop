export type Product = {
  sNo: number;
  productName: string;
  Price: number;
  ImageUrl: string[];
  slug: string;
};

export const mockProducts: Product[] = [
  {
    sNo: 1,
    productName: 'Nairobi Classic Tee',
    Price: 1200,
    ImageUrl: ['/Tee.png','./Tee3.jpg','/Tee2.png'],
    slug: 'nairobi-classic-tee',
  },
  {
    sNo: 2,
    productName: 'Kisumu Denim Jacket',
    Price: 4200,
    ImageUrl: ['/Jacket.png','/JacketsCoats.jpg'],
    slug: 'kisumu-denim-jacket',
  },
  {
    sNo: 3,
    productName: 'Mombasa Linen Shirt',
    Price: 2500,
    ImageUrl: ['/Shirt.png','/Shirt.jpg'],
    slug: 'mombasa-linen-shirt',
  },
  {
    sNo: 4,
    productName: 'Safari Cargo Shorts',
    Price: 1800,
    ImageUrl: ['/CargoShorts.png','/CargoShort.jpg'],
    slug: 'safari-cargo-shorts',
  },
  {
    sNo: 5,
    productName: 'Savanna Maxi Dress',
    Price: 3500,
    ImageUrl: ['/MaxiDress.png','/Maxidress2.jpg'],
    slug: 'savanna-maxi-dress',
  },
  {
    sNo: 6,
    productName: 'Karibu Hoodie',
    Price: 3000,
    ImageUrl: ['/Jacket.png','/Hoodie.jpg'],
    slug: 'karibu-hoodie',
  },
  {
    sNo: 7,
    productName: 'Lakeview Polo',
    Price: 1500,
    ImageUrl: ['/Tee2.png','/Tee.png'],
    slug: 'lakeview-polo',
  },
  {
    sNo: 8,
    productName: 'Coastline Shorts And Shirt Set',
    Price: 1400,
    ImageUrl: ['/ShortAndShirt.png','/ShirtAndShort2.jpg'],
    slug: 'coastline-shorts-shirt-set',
  },
  {
    sNo: 9,
    productName: 'Maasai Khaki Pants',
    Price: 800,
    ImageUrl: ['/Khaki.png','/Khaki2.jpg'],
    slug: 'maasai-khaki-pants',
  },
  {
    sNo: 10,
    productName: 'Urban Chino Shirt',
    Price: 2600,
    ImageUrl: ['/Shirt2.png','/Shirt.png'],
    slug: 'urban-chino-shirt',
  },
  {
    sNo: 11,
    productName: 'Twiga Mens Shorts',
    Price: 950,
    ImageUrl: ['/Short.png','/ShortAndShirt.png'],
    slug: 'twiga-mens-shorts',
  },
  {
    sNo: 12,
    productName: 'Dawn Running Shoes',
    Price: 5000,
    ImageUrl: ['/Shoe.png','/Shoe2.jpg'],
    slug: 'dawn-running-shoes',
  },
];

export default mockProducts;
