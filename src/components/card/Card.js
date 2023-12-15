'use client'
import { Heart, PencilLine, Trash } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export function Card() {
    return (


        <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pb-8 px-4 ">



            <div className=" mt-1 mb-1 h-19 w-19 flex justify-between py-3 px-2 gap-2 ">


                <div className="flex justify-start gap-2 h-19 w-19">
                    <Heart size={25} color="#fbfcfe" />
                </div>
                <div className="flex flex-row gap-2 ">

                    <Link href="http://localhost:3000/build">
                        <PencilLine color="white" size={25} />
                    </Link>
                    <Link href="">
                        <Trash color="white" size={25} />
                    </Link>

                </div>
            </div>

            <div className="flex flex-col ">

                <div className="flex items-center">


                    <Image src="/img/brian.png" width={100} height={100} className="w-16 mr-5  h-16 mb-3 rounded-full shadow-lg" />
                    <div>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Gordo Drama</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">EL GORDÃOOOOOO</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

