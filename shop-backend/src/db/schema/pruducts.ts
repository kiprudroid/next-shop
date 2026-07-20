import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const products = pgTable('products',{
    sNo : serial().primaryKey().notNull(),
    productName : varchar('productName', { length: 255 }).notNull(),
    Price : serial('Price').notNull(),
    ImageUrl : text('ImageUrl').notNull(),
    slug : varchar('slug',{length :255}).unique().notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})