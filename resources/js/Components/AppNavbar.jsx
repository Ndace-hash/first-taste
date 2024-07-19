import React from "react";
import { Link } from "@inertiajs/react";

const AppNavbar = () => {
    const routes = [
        {
            name: "About",
            path: "/about",
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
