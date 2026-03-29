import PratoPrincipal from "@/app/assets/Prato Principal.jpg"
import Bolo from "@/app/assets/Bolo.jpg"
import Suco from "@/app/assets/Suco.jpg"
import Pastel from "@/app/assets/Pastel.png"
import Image from "next/image"

type CardCategoriaVariant = "Principais" | "Sobremesas" | "Bebidas" | "Lanches"

export default function CardCategoria({ variant }: { variant: CardCategoriaVariant }) {
    let titulo, img
    switch (variant) {
        case "Principais":
            titulo = "Pratos Principais"
            img = PratoPrincipal
            break
        case "Sobremesas":
            titulo = "Sobremesas e Confeitarias"
            img = Bolo
            break
        case "Bebidas":
            titulo = "Bebidas"
            img = Suco
            break
        case "Lanches":
            titulo = "Lanches"
            img = Pastel
            break
    }
    return (
        <article className="relative w-full aspect-4/3 max-h-70">
            <Image
                src={img}
                alt={titulo}
                fill
                className="object-cover brightness-50"
            />
            <div className="absolute w-full h-full flex items-center justify-center">
                <h2 className="text-xl font-bold text-background text-center">
                    {titulo}
                </h2>
            </div>
        </article>
    )
}