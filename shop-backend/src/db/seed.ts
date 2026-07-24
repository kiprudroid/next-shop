import { db } from './db';
import { products } from './schema/pruducts';

const mockProducts = [
  {
    productName: 'Nairobi Classic Tee',
    Price: 1200,
    ImageUrl: ['/Tee.png','/Tee3.jpg','/Tee2.png'],
    slug: 'nairobi-classic-tee',
    type: "tee-shirt"
  },
  {
    productName: 'Kisumu Denim Jacket',
    Price: 4200,
    ImageUrl: ['/Jacket.png','/JacketsCoats.jpg'],
    slug: 'kisumu-denim-jacket',
    type: "jacket",
  },
  {
    productName: 'Mombasa Linen Shirt',
    Price: 2500,
    ImageUrl: ['/Shirt.png','/Shirt.jpg'],
    slug: 'mombasa-linen-shirt',
    type: 'shirt'
  },
  {
    productName: 'Safari Cargo Shorts',
    Price: 1800,
    ImageUrl: ['/CargoShorts.png','/CargoShort.jpg'],
    slug: 'safari-cargo-shorts',
    type: 'shorts'
  },
  {
    productName: 'Savanna Maxi Dress',
    Price: 3500,
    ImageUrl: ['/MaxiDress.png','/Maxidress2.jpg'],
    slug: 'savanna-maxi-dress',
    type: 'dress',
  },
  {
    productName: 'Karibu Hoodie',
    Price: 3000,
    ImageUrl: ['/Hoodie.jpg','/Jacket.png'],
    slug: 'karibu-hoodie',
    type: 'jacket',
  },
  {
    productName: 'Lakeview Polo',
    Price: 1500,
    ImageUrl: ['/Tee2.png','/Tee.png'],
    slug: 'lakeview-polo',
    type: 'shirt',
  },
  {
    productName: 'Coastline Shorts And Shirt Set',
    Price: 1400,
    ImageUrl: ['/ShortAndShirt.png','/ShirtAndShort2.jpg'],
    slug: 'coastline-shorts-shirt-set',
    type: 'shorts',
  },
  {
    productName: 'Maasai Khaki Pants',
    Price: 800,
    ImageUrl: ['/Khaki.png','/Khaki2.jpg'],
    slug: 'maasai-khaki-pants',
    type: 'trouser',
  },
  {
    productName: 'Urban Chino Shirt',
    Price: 2600,
    ImageUrl: ['/Shirt2.png','/Shirt.png'],
    slug: 'urban-chino-shirt',
    type: 'shirt',
  },
  {
    productName: 'Twiga Mens Shorts',
    Price: 950,
    ImageUrl: ['/Short.png','/ShortAndShirt.png'],
    slug: 'twiga-mens-shorts',
    type: 'shorts',
  },
  {
    productName: 'Dawn Running Shoes',
    Price: 5000,
    ImageUrl: ['/Shoe.png','/Shoe2.jpg'],
    slug: 'dawn-running-shoes',
    type: 'shoes',
  },
  {
    productName: 'Sneaker Pro 3000',
    Price: 4200,
    ImageUrl: ['/Sneaker.jpg','/Sneaker1.jpg'],
    slug: 'sneaker-pro-3000',
    type: 'shoes',
  },
  {
    productName: 'Monochrome Polyester Tee Shirt',
    Price: 1045,
    ImageUrl: ['/Tee4.jpg','/Tee5.jpg'],
    slug: 'monochrome-polyester-tee-shirt',
    type: "tee-shirt"
  }
];

async function seed() {
  console.log("Seeding database with mock products...");
  try {
    for (const product of mockProducts) {
      await db.insert(products).values(product);
      console.log(`Inserted ${product.productName}`);
    }
    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
  process.exit(0);
}

seed();
