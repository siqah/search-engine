import { pgTable, text, timestamp, doublePrecision, } from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
    id: text('id').primaryKey().default('uuid_generate_v4()'),
    name: text('name').notNull(),
    imageId: text('imageId').notNull(),
    price: doublePrecision('price').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow()
});

export type Product = typeof productsTable.$inferSelect
