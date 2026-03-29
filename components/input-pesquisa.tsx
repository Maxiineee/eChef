import { IconFilter2, IconSearch } from "@tabler/icons-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export default function InputPesquisa({ className, filters }: { className?: string, filters?: boolean }) {
    return (
        <div className="flex w-full items-center gap-3">
            <InputGroup className={className}>
                <InputGroupInput placeholder="Pesquisar..." />
                <InputGroupAddon>
                    <IconSearch />
                </InputGroupAddon>
            </InputGroup>
            {filters && <IconFilter2 className="size-6" />}
        </div>
    )
}