'use server'

import { z } from "zod";
import { auth } from "@/lib/auth"
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export type authenticateState = {
    errors?: {
        name?: string[],
        email?: string[],
        password?: string[],
        passwordConfirm?: string[],
        role?: string[],
        isBanned?: string[],
    }
    message?: string | null
}

export async function signup(
    prevState: authenticateState,
    formData: FormData,
): Promise<authenticateState> {
    const signupSchema = z.object({
        name: z.string().min(3, "The username must be at least 3 characters long"),
        email: z.email("Invalid email format"),
        password: z.string().min(8, "The password must be at least 8 characters long"),
        passwordConfirm: z.string().min(8, "The password confirmation must be at least 8 characters long"),
        role: z.enum(["user", "admin"]).default("user"),
        isBanned: z.boolean().default(false)
    })

    const role = formData.get("emailInput") === "chloedev@test.com" ? "admin" : "user"

    const parsedData = signupSchema.safeParse({
        name: formData.get("usernameInput"),
        email: formData.get("emailInput"),
        password: formData.get("passwordInput"),
        passwordConfirm: formData.get("passwordConfirmInput"),
        role: role,
        isBanned: false,
    })

    if (!parsedData.success) {
        const errors: authenticateState["errors"] = parsedData.error.flatten().fieldErrors;
        const message: authenticateState["message"] = "Missing or invalid fields. Please check.";
        return {
            errors,
            message,
        };
    }

    if (parsedData.data.password !== parsedData.data.passwordConfirm) {
        return {
            errors: { passwordConfirm: ["The passwords do not match."] },
        }
    }

    try {
        await auth.api.signUpEmail({ body: parsedData.data });
    } catch (error) {
        console.log("Error during authentication: ", error);
        throw new Error("An error occurred while creating your account. Please try again.")
    }
    return {}
}

export async function login(
    prevState: authenticateState,
    formData: FormData,
): Promise<authenticateState> {
    const loginSchema = z.object({
        email: z.email("Invalid email format"),
        password: z.string()
    })

    const parsedData = loginSchema.safeParse({
        email: formData.get("emailInput"),
        password: formData.get("passwordInput"),
    })

    if (!parsedData.success) {
        const errors: authenticateState["errors"] = parsedData.error.flatten().fieldErrors;
        const message: authenticateState["message"] = "Missing or invalid fields. Please check.";
        return {
            errors,
            message,
        };
    }

    try {
        await auth.api.signInEmail({ body: parsedData.data, headers: await headers() });
    } catch (error) {
        return {
            message: "Invalid email or password. Please try again."
        }
    }
    revalidatePath("/") // Revalidate the home page to update the UI after login
    return {}
}