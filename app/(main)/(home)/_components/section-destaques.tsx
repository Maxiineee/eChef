import CardReceita from "@/components/card-receita"
import { Toggle } from "@/components/ui/toggle"
import { cn } from "@/lib/utils"
import Link from "next/link"

const categoryList = [
    { txt: "Café da manhã" },
    { txt: "Almoço" },
    { txt: "Jantar" },
    { txt: "Lanche" },
    { txt: "Mais", value: "more" }
]

function TogglesDestaque() {
    return (
        categoryList.map((item, index) => {
            const isLast = index === categoryList.length - 1
            const toggleClassname = isLast
                ? "hidden sm:block sm:flex-1"
                : "sm:flex-1"
            return (
                <Toggle variant="outline" className={toggleClassname} key={index}>
                    {item.txt}
                </Toggle>
            )
        })
    )
}

function getRecipeCardVisibility(index: number) {
    if (index === 0 || index === 1) {
        return "flex"
    }

    if (index === 2) {
        return "flex sm:hidden xl:flex"
    }

    if (index === 3) {
        return "hidden 2xl:flex"
    }

    return "hidden"
}

const listaTeste = ['12312', '54634', '1243235345', '11']

function CardsReceitas() {
    return (
        listaTeste.map((item, index) => (
            <CardReceita key={index} id={item} className={cn("w-full max-w-lg max-h-96 aspect-4/3", getRecipeCardVisibility(index))} />
        ))
    )
}

export default function SectionDestaques() {
    return (
        <section className="flex flex-col sm:items-center gap-3 sm:gap-6">
            <h2 className="text-2xl font-semibold text-foreground">Descubra os destaque do mês</h2>
            <p className="hidden sm:block text-sm text-muted-foreground">Descubra os pratos mais bem avaliados do mês para qualquer ocasião</p>
            <div className="flex w-full gap-3 flex-wrap">
                <TogglesDestaque />
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-3 justify-center">
                <CardsReceitas />
            </div>
            <div className="flex w-full justify-end">
                <Link href="#" className="text-sm font-medium">Ver mais receitas</Link>
            </div>
        </section>
    )
}