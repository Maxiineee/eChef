import CardCategoria from "@/components/card-categoria"

export default function SectionCardsCategorias() {
    return (
        <section className="grid w-full max-w-480 grid-cols-2 gap-2 rounded-xl overflow-hidden sm:flex">
            <CardCategoria variant="Principais" />
            <CardCategoria variant="Sobremesas" />
            <CardCategoria variant="Bebidas" />
            <CardCategoria variant="Lanches" />
        </section>
    )
}