'use client';

import Link from "next/link";
import React, { useState } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";



const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const Navbar = () => {
    const session = useSession();
    const [openMenu, setOpenMenu] = useState(false);

    const handleToggle = () => {
        setOpenMenu(!openMenu)
    };
    const handleLinkClick = () => {
        setOpenMenu(false);
    }

    return (
        <div className="fixed  top-0 z-40 w-full">
            <div className={"lg:px-20 px-2 py-5 flex justify-between items-center "}>
                <Link href="/" className={"font-bold text-2xl hidden lg:block"}>
                    shohidul
                </Link>
                <div className="relative lg:hidden block">
                    {
                        openMenu ? (
                            <button onClick={handleToggle} className="bg-red-200 rounded-full text-black">
                                <IoMdClose size={40} />
                            </button>

                        ) : (
                            <button onClick={handleToggle} className="bg-red-200 rounded-full text-black">
                                <IoMdMenu size={40} />
                            </button>
                        )
                    }

                    {
                        openMenu && (
                            <div className="absolute bg-red-50 left-0 p-5 rounded-md space-y-5">
                                {links.map((link) => (
                                    <Link key={link.id} href={link.url} onClick={handleLinkClick} className=" flex  flex-col  text-black dark:text-white" >
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        )
                    }


                </div>
                <div className={"flex items-center gap-5 lg:gap-14"}>
                    <DarkModeToggle />
                    {links.map((link) => (
                        <Link key={link.id} href={link.url} className="hidden lg:block" >
                            {link.title}
                        </Link>
                    ))}

                    {session.status === "authenticated" && (
                        <button className={'py-2 px-3 border-none bg-[#53c28b] text-white cursor-pointer rounded'} onClick={signOut}>
                            Logout
                        </button>
                    )}

                </div>
            </div>
        </div>


    );
};

export default Navbar;