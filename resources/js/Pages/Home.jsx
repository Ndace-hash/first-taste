import React from "react";
import { Head } from "@inertiajs/react";

import AppNavbar from "../Components/AppNavbar";

const HomePage = ({ user }) => {
    return (
        <section className="text-center h-screen ">
            <Head title="LaraCrest - The Journey" />
            <AppNavbar />
            <p className="text-sm mt-4 font-semibold">
                Welcom back, {`${user.firstName} ${user.lastName}`}.
            </p>
        </section>
    );
};

export default HomePage;
