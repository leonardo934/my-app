import { Button } from "@/components/login/Button";
import { Input } from "@/components/login/Input";
import Image from "next/image";
import Link from "next/link";


export default function Login() {
    return (
        <div className="h-screen flex items-center bg-sky-950">

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">


                <div className="mt-10 sm:mx-auto sm:w-9/12 sm:max-w-lg flex flex-col bg-sky-900  items-center rounded-lg ">

                    <Image src="/img/poro.png" height={999} width={999} className="" />

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white ">
                        Login
                    </h2>

                    <form className="space-y-3 w-9/12 flex flex-col " action="#" method="POST">

                        <Input id="Email" type="Email" name="Email" />

                        <Input id="Password" type="Password" name="Password" />

                        {/* button */}

                        <Button href="" text="Logar" color="bg-amber-500" hover="bg-Neutral-500" />

                        {/* fim button */}
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Não tem conta?{' '}
                        <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Cadastrar
                        </Link>
                        <br />
                            Ou
                        <br />
                        Não lembra sua senha?{' '}
                        <Link href="/recuperar" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Recuperar senha
                        </Link>
                    </p>



                </div>
            </div>
        </div>
    )
}
