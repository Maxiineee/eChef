'use client'

import { authClient } from "@/lib/auth-client"

export async function logout() {
    try {
        await authClient.signOut();
    }
    catch (error) {
        console.log("Error during logout: ", error);
        throw new Error("An error occurred while logging out. Please try again.")
    }
}
