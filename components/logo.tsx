import imgLogo from "@/app/assets/Logo.png"
import Image from "next/image"
import { cn } from "@/lib/utils"

type LogoSize = "default" | "lg" | "sm"

const sizeClasses: Record<LogoSize, string> = {
    default: "h-60",
    lg: "h-75",
    sm: "h-8",
}

export default function Logo({ size = "default", className }: { size?: LogoSize, className?: string }) {
    return (
        <Image
            src={imgLogo}
            alt="Logo do app"
            className={cn("w-auto", sizeClasses[size], className)} />
    )
}