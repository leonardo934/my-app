import { Button } from "@/components/login/Button";
import { Input } from "@/components/login/Input";
import Link from "next/link";

export default function Register() {
    return ( 
        <div className="h-screen flex items-center bg-sky-950">

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

                <div className="mt-10 sm:mx-auto sm:w-9/12 sm:max-w-lg flex flex-col bg-sky-900  items-center rounded-lg ">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white ">
                        Crie sua conta 
                    </h2>

                    <form className="space-y-3 w-9/12 flex flex-col mb-9 " action="#" method="POST">

                        <Input id="Name" type="Name" name="Name" />

                        <Input id="Email" type="Email" name="Email" />

                        <Input id="Password" type="Password" name="Password" />

                        <Input id="ConfirmPassword" type="ConfirmPassword" name="ConfirmPassword" />

                        {/* button */}

                        <Button text="Create"  color="bg-amber-500" hover="bg-Neutral-500" />

                        <Button text="Voltar"  hover="bg-Neutral-500" color="bg-amber-500" />
                   

                        {/* fim button */}
                    </form>
                </div>
            </div>
        </div>
    )
}