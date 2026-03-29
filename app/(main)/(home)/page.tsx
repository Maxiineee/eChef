import { Separator } from "@/components/ui/separator"

import SectionCardsCategorias from "./_components/section-cards-categorias"
import SectionDestaques from "./_components/section-destaques"
import SectionCTA from "./_components/section-cta"
import SectionGeladeira from "./_components/section-geladeira"

export default function Page() {
  return (
    <div className="flex w-full max-w-480 flex-col gap-3 sm:gap-6 mx-auto">
      <SectionDestaques />
      <Separator />
      <SectionCTA />
      <Separator />
      <SectionGeladeira />
      <Separator />
      <SectionCardsCategorias />
    </div>
  )
}
