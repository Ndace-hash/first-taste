import React, { FC } from "react";
import { Link } from "@inertiajs/react";

type NavbarProp = {
    loggedInUser?: unknown;
};

const AppNavbar: FC<NavbarProp> = ({ loggedInUser }) => {
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
        <nav className="flex justify-between items-center py-3 px-2 h-20 sticky">
            <div>
                <h1 className="font-black text-black uppercase">
                    <Link href="/">LaraCrest</Link>
                </h1>
            </div>
            <ul className="flex items-center gap-2">
                {routes.map((route) => (
                    <li className="text-xs" key={route.name}>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
                <li className="flex gap-2">
                    <Link
                        href="/auth/register"
                        className=" border-2 border-slate-400 py-2 px-4 text-black rounded-md uppercase text-sm font-medium leading-none flex items-center justify-center"
                    >
                        Sign Up
                    </Link>
                    <Link
                        href="/auth/login"
                        className="bg-slate-400 py-2 px-4 text-white rounded-md font-bold leading-none flex text-sm items-center justify-center"
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default AppNavbar;
