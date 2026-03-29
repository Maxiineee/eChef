'use client'

import { cn } from "@/lib/utils";
import { IconBookmarks, IconChefHat, IconPlus, IconSalad, IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function IconAddRecipe({ className }: { className?: string }) {
    return (
        <div className="relative -top-6 mx-auto rounded-full border-2 border-primary bg-background">
            <IconPlus className={cn("stroke-1", className)} />
        </div>
    )
}

export default function Footer({ className }: { className: string }) {
    const currentPath = usePathname()
    const isHome = currentPath === "/"
    const isSearch = currentPath.startsWith("/buscar")
    const isCreate = currentPath === "/criar"
    const isSaved = currentPath === "/favoritas"
    const isProfile = currentPath.startsWith("/perfil")

    return (
        <footer className={cn("fixed bottom-0 left-0 grid w-full grid-cols-5 place-items-center overflow-visible bg-background h-18", className)}>
            <Link href="#"><IconSalad className={cn("size-8", isHome && "text-primary stroke-2")} /></Link>
            <Link href="#"><IconSearch className={cn("size-8", isSearch && "text-primary stroke-2")} /></Link>
            <Link href="#"><IconAddRecipe className={cn("size-16", isCreate && "text-primary stroke-2")} /></Link >
            <Link href="#"><IconBookmarks className={cn("size-8", isSaved && "text-primary stroke-2")} /></Link >
            <Link href="#"><IconChefHat className={cn("size-8", isProfile && "text-primary stroke-2")} /></Link >
        </footer >
    )
}