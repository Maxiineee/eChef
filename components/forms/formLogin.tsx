'use client'

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { IconMail, IconLockPassword, IconBrandGoogle } from '@tabler/icons-react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useActionState, useState } from "react";
import { authenticateState } from "@/lib/actions"
import ButtonLink from "../button-link";
import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";

export default function FormLogin() {
    const initialState: authenticateState = { message: null, errors: {} };
    const [state, formAction, isPending] = useActionState(handleLogin, initialState)
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin(prevState: authenticateState, formData: FormData): Promise<authenticateState> {
        const data = await login(prevState, formData)
        if (!data.errors && !data.message) {
            router.push("/") // Redirect to home page after successful login
        }
        return data
    }

    return (
        <form action={formAction}>
            <FieldGroup className="flex flex-col gap-4">
                <Field>
                    <FieldLabel htmlFor="emailInput" className="text-foreground">E-mail</FieldLabel>
                    <InputGroup>
                        <InputGroupInput id="emailInput" name="emailInput" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <InputGroupAddon align="inline-start">
                            <IconMail className="text-muted-foreground" />
                        </InputGroupAddon>
                    </InputGroup>
                    {
                        state.errors?.email && (
                            <div className="text-red-500 text-sm">
                                {state.errors.email.map((error, idx) => (
                                    <p key={idx}>{error}</p>
                                ))}
                            </div>
                        )}
                </Field>
                <Field>
                    <FieldLabel htmlFor="passwordInput" className="text-foreground">Password</FieldLabel>
                    <InputGroup>
                        <InputGroupInput id="passwordInput" name="passwordInput" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <InputGroupAddon align="inline-start">
                            <IconLockPassword className="text-muted-foreground" />
                        </InputGroupAddon>
                    </InputGroup>
                    {
                        state.errors?.password && (
                            <div className="text-red-500 text-sm">
                                {state.errors.password.map((error, idx) => (
                                    <p key={idx}>{error}</p>
                                ))}
                            </div>
                        )}
                </Field>
                {state.message && <div className="text-red-500 text-sm">{state.message}</div>}
                <div className="w-full text-end">
                    <Link href='#' className="text-foreground">Forgot your password? <span className="text-primary">Click here</span></Link>
                </div>
                <Button className="hover:cursor-pointer" type="submit" disabled={isPending} >Login</Button>
                <Button variant="outline" className="hover:cursor-pointer">
                    <IconBrandGoogle data-icon="inline-start" />Login with Google
                </Button>
                <div className="w-full text-center">
                    <Link href='/signup' className="text-foreground">Don't have an account? <span className="text-primary">Sign up!</span></Link>
                </div>
                <ButtonLink href="/" variant="outline" className="border-primary hover:cursor-pointer">Continue without an account</ButtonLink>
            </FieldGroup>
        </form >
    );
}