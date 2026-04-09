import { getBest } from "@/lib/data-crud";
import CardRecipe from "@/components/card-recipe";
import { cn } from "@/lib/utils";

function getCardRecipeVisibility(index: number) {
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

export default async function CardsRecipesBest({ currentCategory }: { currentCategory?: string }) {
    const category = currentCategory || undefined;
    const receitasDestaques = await getBest(category);
    return (
        receitasDestaques.map((item, index) => (
            <CardRecipe key={index} data={item} className={cn("w-full max-w-lg max-h-96 aspect-4/3", getCardRecipeVisibility(index))} />
        ))
    )

}
