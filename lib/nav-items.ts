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
        label: "Inicio",
        icon: IconSalad,
        isActive: (path) => path === "/",
    },
    {
        href: "/buscar",
        label: "Buscar",
        icon: IconSearch,
        isActive: (path) => path.startsWith("/buscar"),
    },
    {
        href: "/criar",
        label: "Nova receita",
        icon: IconPlus,
        isActive: (path) => path === "/criar",
    },
    {
        href: "/favoritas",
        label: "Favoritas",
        icon: IconBookmarks,
        isActive: (path) => path.startsWith("/favoritas"),
    },
    {
        href: "/perfil",
        label: "Perfil",
        icon: IconChefHat,
        isActive: (path) => path.startsWith("/perfil"),
    },
]
