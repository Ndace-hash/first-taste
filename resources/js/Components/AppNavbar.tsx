import React, { FC } from "react";
import { Link } from "@inertiajs/react";

type NavbarProp = {
    loggedInUser?: unknown;
};

const AppNavbar: FC<NavbarProp> = ({ loggedInUser }) => {
    const routes = [
        {
            name: "Posts",
            path: "/posts",
        },
        {
            name: "Create",
            path: "/posts/create",
        },
        { name: "Contact", path: "/contact" },
    ];
    return (
        <nav className="flex justify-between items-center py-3 px-2 h-12 shadow-md sticky">
            <div>
                <h1 className="font-black text-red-500">
                    <Link href="/">LaraCrest</Link>
                </h1>
            </div>
            <ul className="flex items-center gap-2">
                {routes.map((route) => (
                    <li className="text-xs" key={route.name}>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default AppNavbar;
