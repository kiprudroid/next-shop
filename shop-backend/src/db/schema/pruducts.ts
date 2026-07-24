import { pgTable, serial, text, timestamp, varchar, integer } from 'drizzle-orm/pg-core';

export const products = pgTable('products',{
    sNo : serial().primaryKey().notNull(),
    productName : varchar('productName', { length: 255 }).notNull(),
    Price : integer('Price').notNull(),
    ImageUrl : text('ImageUrl').array().notNull(),
    type : varchar('type', { length: 255 }).notNull(),
    slug : varchar('slug',{length :255}).unique().notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})