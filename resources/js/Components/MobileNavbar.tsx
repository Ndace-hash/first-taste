import React, { FC, useState } from "react";
import { Link } from "@inertiajs/react";
import "./AppNavbar.css";

type NavbarProp = {
    loggedInUser?: unknown;
    className?: string;
};

const MobileNavbar: FC<NavbarProp> = ({ loggedInUser, className }) => {
    const [openNav, setOpenNav] = useState(false);
    const routes = [
        {
            name: "Blog",
            path: "/blog",
        },
        {
            name: "Projects",
            path: "/projects",
        },
        { name: "About", path: "/about" },
        { name: "Newsletter", path: "/newsletter" },
    ];
    return (
        <nav
            className={`flex justify-between items-center py-3 h-20 overflow-x-hidden ${className} `}
        >
            <div className="ms-2">
                <h1 className="font-black text-black uppercase">
                    <Link href="/">LaraCrest</Link>
                </h1>
            </div>
            <button
                className={`flex flex-col items-end justify-center gap-1 me-2 ${
                    openNav ? "show" : "not-show"
                }`}
                onClick={() => setOpenNav(!openNav)}
            >
                <span className="block bg-black w-[30px] h-[3px]"></span>
                <span className="block bg-black w-[30px] h-[3px]"></span>
                <span className="block bg-black w-[20px] h-[3px]"></span>
            </button>
            <ul
                className={` flex-col justify-center items-center gap-4 ${
                    openNav ? "show-navbar flex" : "hide-navbar"
                }`}
            >
                <h1 className="font-black text-white text-3xl mb-4 uppercase">
                    LaraCrest
                </h1>

                {routes.map((route) => (
                    <li className="text-lg" key={route.name}>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
                <li className="flex flex-col gap-4">
                    <Link
                        href="/auth/register"
                        className=" border-2 border-slate-400 py-2 px-4 text-slate-400 rounded-md uppercase text-sm font-medium leading-none flex items-center justify-center"
                    >
                        Sign Up
                    </Link>
                    <Link
                        href="/auth/login"
                        className="uppercase bg-slate-400 py-2 px-12 text-white rounded-md font-bold leading-none flex text-sm items-center justify-center"
                    >
                        Login
                    </Link>
                </li>
                <button
                    className="w-[50px] h-[50px] absolute bottom-8 rounded-full flex flex-col items-center justify-center"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <span className="bg-white min-w-[30px] min-h-[3px] block rotate-45 translate-y-[2px]"></span>
                    <span className="bg-white min-w-[30px] min-h-[3px] block -rotate-45 -translate-y-[2px]"></span>
                </button>
            </ul>
        </nav>
    );
};

export default MobileNavbar;
