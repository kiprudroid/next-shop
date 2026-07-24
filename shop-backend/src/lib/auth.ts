import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db } from "../db/db";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "sqlite", "mysql"
    }),
    emailAndPassword: {
        enabled: true,
    },
    trustedOrigins: ["http://localhost:3000"],
});
