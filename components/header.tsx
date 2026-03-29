'use client'

import { SidebarTrigger } from "./ui/sidebar"
import { buttonVariants } from "./ui/button"
import { IconShoppingBag } from "@tabler/icons-react"
import InputPesquisa from "./input-pesquisa"
import LogoHorizontal from "./logo-horizontal"
import Link from "next/link"
import { cn } from "@/lib/utils"

function HeaderLeftSide() {
    return (
        <div className="flex items-center gap-6">
            <SidebarTrigger />
            <LogoHorizontal />
        </div>)
}

function HeaderRightSide() {
    return (
        <div className="flex items-center gap-6">
            <Link href="/registrar" className={cn(buttonVariants())}>Entrar</Link>
            <Link href="/entrar" className={cn(buttonVariants({ variant: "outline" }))}>Registrar</Link>
            <IconShoppingBag className="size-8" />
        </div>
    )
}

function HeaderCenter() {
    return (
        <div className="flex flex-1">
            <InputPesquisa filters />
        </div>
    )
}

export default function Header({ className }: { className?: string }) {
    return (
        <header className={cn("flex w-full gap-6 items-center", className)}>
            <HeaderLeftSide />
            <HeaderCenter />
            <HeaderRightSide />
        </header>
    )
}

