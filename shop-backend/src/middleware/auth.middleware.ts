import type { Request, Response, NextFunction } from "express";
import { auth } from "../lib/auth";
import { fromNodeHeaders } from "better-auth/node";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers)
        });
        
        if (!session) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        
        // attach user to request object
        (req as any).user = session.user;
        next();
    } catch (error) {
        console.error("Auth middleware error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
