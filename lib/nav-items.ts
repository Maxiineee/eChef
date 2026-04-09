import type { ComponentType } from "react"
import {
    IconBookmarks,
    IconChefHat,
    IconPlus,
    IconSalad,
    IconSearch,
} from "@tabler/icons-react"

export type NavItem = {
    href: string
    label: string
    icon: ComponentType<{ className?: string }>
    isActive: (path: string) => boolean
}

export const navItems: NavItem[] = [
    {
        href: "/",
        label: "Home",
        icon: IconSalad,
        isActive: (path) => path === "/",
    },
    {
        href: "/search",
        label: "Search",
        icon: IconSearch,
        isActive: (path) => path.startsWith("/search"),
    },
    {
        href: "/create",
        label: "Create Recipe",
        icon: IconPlus,
        isActive: (path) => path === "/create",
    },
    {
        href: "/saved",
        label: "Saved",
        icon: IconBookmarks,
        isActive: (path) => path.startsWith("/saved"),
    },
    {
        href: "/profile",
        label: "Profile",
        icon: IconChefHat,
        isActive: (path) => path.startsWith("/profile"),
    },
]
