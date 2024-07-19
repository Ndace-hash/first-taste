import React from "react";
import { Head } from "@inertiajs/react";

import AppNavbar from "../Components/AppNavbar";
import passport from "../../images/passport.jpg";

const HomePage = ({ user }) => {
    return (
        <section className="h-screen ">
            <Head title="LaraCrest - The Journey" />
            <AppNavbar />
            <div className="px-2 py-4 flex flex-col items-center">
                <div className="w-[100px] h-[100px] overflow-hidden flex items-center justify-center rounded-full border-2 shadow-sm border-red-300">
                    <img src={passport} alt="" className="w-full scale-75" />
                </div>
                <p className="text-sm mt-2 font-semibold">
                    Welcome back, {user.lastName}.
                </p>
            </div>
        </section>
    );
};

export default HomePage;
