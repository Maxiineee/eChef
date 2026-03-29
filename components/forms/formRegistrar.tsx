import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { IconMail, IconLockPassword, IconBrandGoogle, IconUser } from '@tabler/icons-react'
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FormRegistrar() {
    return (
        <form action={'#'}>
            <FieldGroup className="flex flex-col gap-4">
                <Field>
                    <FieldLabel htmlFor="usernameInput" className="text-foreground">Nome de usuário</FieldLabel>
                    <InputGroup>
                        <InputGroupInput id="usernameInput" type="email" placeholder="Crie seu nome de usuário" />
                        <InputGroupAddon align="inline-start">
                            <IconUser className="text-muted-foreground" />
                        </InputGroupAddon>
                    </InputGroup>
                </Field>
                <Field>
                    <FieldLabel htmlFor="emailInput" className="text-foreground">E-mail</FieldLabel>
                    <InputGroup>
                        <InputGroupInput id="emailInput" type="email" placeholder="email@exemplo.com" />
                        <InputGroupAddon align="inline-start">
                            <IconMail className="text-muted-foreground" />
                        </InputGroupAddon>
                    </InputGroup>
                </Field>
                <Field>
                    <FieldLabel htmlFor="passwordInput" className="text-foreground">Senha</FieldLabel>
                    <InputGroup>
                        <InputGroupInput id="passwordInput" type="password" placeholder="Mínimo de 8 dígitos" />
                        <InputGroupAddon align="inline-start">
                            <IconLockPassword className="text-muted-foreground" />
                        </InputGroupAddon>
                    </InputGroup>
                </Field>
                <Field>
                    <FieldLabel htmlFor="passwordConfirmInput" className="text-foreground">Confirmar senha</FieldLabel>
                    <InputGroup>
                        <InputGroupInput id="passwordConfirmInput" type="password" placeholder="Confirme sua senha" />
                        <InputGroupAddon align="inline-start">
                            <IconLockPassword className="text-muted-foreground" />
                        </InputGroupAddon>
                    </InputGroup>
                </Field>

                <div className="w-full text-end">
                    <Link href='#' className="text-foreground">Esqueceu a senha? <span className="text-primary">Clique aqui</span></Link>
                </div>
                <Button className="hover:cursor-pointer">Criar conta</Button>
                <Button variant="outline" className="hover:cursor-pointer">
                    <IconBrandGoogle data-icon="inline-start" />Entrar com Google
                </Button>
                <div className="w-full text-center">
                    <Link href='/entrar' className="text-foreground">Já tem uma conta? <span className="text-primary">Faça login!</span></Link>
                </div>
                <Button variant="outline" className="border-primary hover:cursor-pointer">Continuar sem conta</Button>
            </FieldGroup>
        </form >
    );
}