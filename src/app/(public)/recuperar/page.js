import { Button } from '@/components/login/Button'
import { Input } from '@/components/login/Input'


export default function Recuperar() {
    return (
        <div className="h-screen flex items-center bg-sky-950">

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">


                <div className="mt-10 sm:mx-auto sm:w-9/12 sm:max-w-lg flex flex-col bg-sky-900  items-center rounded-lg ">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white  ">
                        Recuperação de Senha
                    </h2>

                    <form className="space-y-3 w-9/12 flex flex-col mb-9" action="#" method="POST">

                        <Input id="Name" type="Name" name="Name" />

                        <Input id="Email" type="Email" name="Email" />

                        {/* button */}

                        <Button href="" text="Recuperar" color="bg-amber-500" hover="bg-Neutral-500" />


                        <Button href="" text="Voltar" color="bg-amber-500" hover="bg-Neutral-500" />

                        {/* fim button */}
                    </form>

                </div>
            </div>
        </div>
    )
}
