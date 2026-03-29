import imgLogoHorizontal from "@/app/assets/Logo horizontal.png"
import Image from "next/image"
import { cn } from "@/lib/utils"

type LogoSize = "default" | "xl" | "lg" | "sm"

const sizeClasses: Record<LogoSize, string> = {
    default: "h-11",
    xl: "h-45",
    lg: "h-16",
    sm: "h-8",
}

export default function LogoHorizontal({ size = "default", className }: { size?: LogoSize, className?: string }) {
    return (
        <Image
            src={imgLogoHorizontal}
            alt="Logo do app"
            className={cn("w-auto", sizeClasses[size], className)}
        />
    )
}