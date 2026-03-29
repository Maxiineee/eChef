import { cn } from "@/lib/utils"
import LogoHorizontal from "./logo-horizontal"
import { IconShoppingBag } from "@tabler/icons-react"

function HeaderLeftSide() {
    return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center" aria-hidden="true" />
    )
}

function HeaderCenter() {
    return (
        <div className="flex min-w-0 flex-1 items-center justify-center">
            <LogoHorizontal />
        </div>
    )
}

function HeaderRightSide() {
    return (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center">
            <IconShoppingBag className="size-8" />
        </div>
    )
}

export default function HeaderMobile({ className }: { className?: string }) {
    return (
        <header className={cn("flex h-18 w-full items-center px-3", className)}>
            <HeaderLeftSide />
            <HeaderCenter />
            <HeaderRightSide />
        </header>
    )
}