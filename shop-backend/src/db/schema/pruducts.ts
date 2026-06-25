import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const products = pgTable('products',{
    sNo : serial().unique().primaryKey().notNull(),
    productName : varchar('productName', { length: 255 }).notNull(),
    Price : serial('Price').notNull(),
    ImageUrl : text('ImageUrl').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})