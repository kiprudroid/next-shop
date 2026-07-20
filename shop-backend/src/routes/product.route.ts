import { db } from '../db/db';
import { users } from '../db/schema/users';
import { products } from '../db/schema/pruducts';
import { eq, ne, gt, lt, and, or, desc, asc, like } from 'drizzle-orm';
import express, { type Request, type Response } from "express";

const router = express.Router()

//get
router.get('/products', async (req: Request, res: Response) => {
    try {
        const allProducts = await db.select().from(products);

        res.status(200).json(allProducts);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


//get by id
router.get('/products/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    try {
    const one = await db.select().from(products).where(eq(products.sNo, id));
            res.status(200).json(one);

    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

//post
router.post('/products', async (req: Request, res: Response) => {
    try {
        const { productName, Price, ImageUrl, slug } = req.body;
        const [newProduct] = await db.insert(products).values({
            productName,
            Price,
            ImageUrl,
            slug
        }).returning();
        
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

});

//update

//delete
router.delete('/products/:id',async(req :Request ,res : Response)=> {
    const id = Number(req.params.id)
    try {
        const deleted = await db.delete(products).where(eq(products.sNo, id)).returning();
         res.status(201).json(deleted);

    }catch(error){
         console.error('Error Deleting product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;