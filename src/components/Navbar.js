"use client"

import { Bell, List, MagnifyingGlass } from "@phosphor-icons/react"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
    const [showOptions, setShowOptions] = useState(true)
    const [showOptionsList, setShowOptionsList] = useState(true)

    function handleShowOptions() {
        setShowOptions(!showOptions)
    }
    function handleShowOptionsList() {
        setShowOptionsList(!showOptionsList)
    }

    return (
        <nav className="bg-sky-950">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <button onClick={handleShowOptionsList} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <List size={32} />


                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">

                                <Link href="http://localhost:3000" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Início</Link>
                                <Link href="http://localhost:3000/build" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Criar Build</Link>
                                <Link href="http://localhost:3000/favoritos" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Favoritos</Link>
                            </div>
                        </div>
                        
                        <input className="flex ml-44 w-5/12 rounded-lg" />
                        <div className="flex items-center ml-2">
                        <MagnifyingGlass size={32}  color="#e8d9d9" />
                        </div>
                      
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* começo */}
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <Bell size={32} />
                        </button>
                        {/* fim */}



                        <div className="relative ml-3">
                            <div>
                                <button onClick={handleShowOptions} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div>

                            {/* começo */}
                            <div className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${showOptions && 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">

                                <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Your Profile</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">settings</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</Link>
                            </div>
                            {/* fim */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="sm:hidden" id="mobile-menu">
                <div className={`space-y-1 px-2 pb-3 pt-2 ${showOptionsList && 'hidden'}`}>

                    <Link href="http://localhost:3000" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
                    <Link href="http://localhost:3000/build" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Creat Build</Link>
                    <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Delete Build</Link>
                    <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Favorites</Link>
                </div>
            </div>
        </nav>

    )
}