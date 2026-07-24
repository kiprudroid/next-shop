import "dotenv/config";
import { auth } from "../lib/auth";

async function seedAdmin() {
    console.log("Seeding admin user...");
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
        console.error("Please provide ADMIN_EMAIL and ADMIN_PASSWORD in .env file.");
        process.exit(1);
    }

    try {
        // create the user through better-auth internal api
        const user = await auth.api.signUpEmail({
            body: {
                email,
                password,
                name: "Admin",
            }
        });
        
        console.log(`Admin user seeded successfully: ${user.user.email}`);
    } catch (error) {
        console.error("Error seeding admin user:", error);
    }
    process.exit(0);
}

seedAdmin();
