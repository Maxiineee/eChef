import { IconBookmarkFilled, IconStarFilled } from "@tabler/icons-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import ResumoPerfil from "./resumo-perfil";
import { cn } from "@/lib/utils";

//valores de teste
const data = {
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStU2cPTGS16xFrrzMvAodxLizI1fn__FRO633e0PJUBUUQdBsBkKcHX6loMOzuQ8ZKbfeZZATex8tWwpyWBKqbsAyWZ2DTFd-cMRocxozN&s=10",
    média: 4.5,
    titulo: "pizza de strogonoff de frango",
    perfilId: "a41-3a451-as312",
    categorias: ['Salgado', 'Prato Principal', 'Jantar', 'teste', 'teste', 'teste'],
    liked: true,
    saved: false,
    authorId: "aabb-32aa-32bf-c43s"
}

const iconClasses = {
    default: "size-8 text-background",
    active: "size-8 text-primary"
}

function BadgesCategorias() {
    const categorias = data.categorias.slice(0, 3)
    return (
        categorias.map((item, index) => (
            <Badge variant="outline" key={index}>{item}</Badge>
        ))
    )
}

function CardActions() {
    return (
        <div className="flex gap-4">
            <div className="flex items-center gap-2">
                <IconStarFilled className={data.liked ? iconClasses.active : iconClasses.default} />
                <p className="text-base font-bold text-background">{data.média}</p>
            </div>
            <IconBookmarkFilled className={data.saved ? iconClasses.active : iconClasses.default} />
        </div>
    )
}

export default function CardReceita({ id, className }: { id: string, className?: string }) {
    return (
        <Card className={cn("flex flex-col justify-between p-3 sm:p-4", className)}
            style={data.imgUrl ? {
                backgroundImage: `url(${data.imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } : undefined}
        >
            <CardHeader className="flex gap-2 p-0">
                <BadgesCategorias />
            </CardHeader>
            <CardContent className="p-0">
                <h2 className="w-1/2 text-xl sm:text-2xl font-bold text-background">{data.titulo}</h2>
                <div className="flex w-full justify-between">
                    <CardActions />
                    <ResumoPerfil userId={data.authorId} />
                </div>
            </CardContent>
        </Card>
    )
}