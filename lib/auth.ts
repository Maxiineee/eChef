import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },
    experimental: { joins: true },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
    user: {
        additionalFields: {
            username: {
                type: "string",
                required: true,
                input: true,
            },
            bio: {
                type: "string",
                required: false,
                input: true,
            },
            role: {
                type: "string",
                required: true,
                defaultValue: "user",
                input: false,
            },
            isBanned: {
                type: "boolean",
                required: true,
                defaultValue: false,
                input: false,
            }
        }
    }
});