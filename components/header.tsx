'use client'

import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { signout } from "@/lib/actions"
import { cn } from "@/lib/utils"
import { IconShoppingBag } from "@tabler/icons-react"
import { SidebarTrigger } from "./ui/sidebar"
import { Button } from "./ui/button"
import InputSearch from "./input-search"
import LogoHorizontal from "./logo-horizontal"
import ButtonLink from "./button-link"

function HeaderLeftSide() {
    return (
        <div className="flex items-center gap-6">
            <SidebarTrigger />
            <Link href="/">
                <LogoHorizontal />
            </Link>
        </div>)
}

function HeaderRightSide({ isAuthenticated }: { isAuthenticated: boolean }) {
    const router = useRouter()

    const handleSignout = async () => {
        try {
            await signout()
            router.refresh() // Refresh the page to update the UI after signout
        } catch (error) {
            console.error("Signout failed: ", error)
        }
    }

    return (
        <div className="flex items-center gap-6">
            {/** Check if user is authenticated to conditionally show register buttons */}
            <div className={cn("flex gap-6")}>
                {isAuthenticated ? (
                    <Button className="w-18" variant="outline" onClick={handleSignout}>Sign out</Button>
                ) : (
                    <>
                        <ButtonLink href="/signin" >Sign in</ButtonLink>
                        <ButtonLink href="/signup" variant="outline">Sign up</ButtonLink>
                    </>
                )}
            </div>
            <IconShoppingBag className="size-8" />
        </div>
    )
}

function HeaderCenter() {
    const pathname = usePathname()
    let search = false;
    let filters = false;
    switch (pathname) {
        case "/":
            search = true;
            filters = true;
            break;
    }
    return (
        <div className="flex flex-1">
            {search && <InputSearch filters={filters} />}
        </div>
    )
}

export default function Header({ className, isAuthenticated = false }: { className?: string, isAuthenticated: boolean }) {
    return (
        <header className={cn("flex w-full gap-6 items-center", className)}>
            <HeaderLeftSide />
            <HeaderCenter />
            <HeaderRightSide isAuthenticated={isAuthenticated} />
        </header>
    )
}

