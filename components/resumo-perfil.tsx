import Link from "next/link"
import { Avatar, AvatarImage } from "./ui/avatar"

export default function ResumoPerfil({ userId, className }: { userId: string, className?: string }) {
    const valoresTeste = {
        name: "MaxineReceitas",
        imgUrl: "https://assets.surlatable.com/m/1620a0a106687e33/72_dpi_webp-6826416_1123_01i_s"
    }
    return (
        <Link className={"flex gap-2 items-center " + className} href={'#'}>
            <p className="sm:text-base font-bold text-background">{valoresTeste.name}</p>
            <Avatar>
                <AvatarImage src={valoresTeste.imgUrl}/>
            </Avatar>
        </Link>
    )
}