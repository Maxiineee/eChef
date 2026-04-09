import CardCategory from "@/components/card-category"

export default function SectionCardsCategories() {
    return (
        <section className="grid w-full max-w-480 grid-cols-2 gap-2 rounded-xl overflow-hidden sm:flex">
            <CardCategory variant="Main" />
            <CardCategory variant="Desserts" />
            <CardCategory variant="Drinks" />
            <CardCategory variant="Snacks" />
        </section>
    )
}