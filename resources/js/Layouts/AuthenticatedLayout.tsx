import React, { FC, ReactNode } from "react";
import AppNavbar from "../Components/AppNavbar";
import AppFooter from "../Components/AppFooter";

type AuthenticatedPageProp = {
    children: ReactNode;
};

const AuthenticatedLayout: FC<AuthenticatedPageProp> = ({ children }) => {
    return (
        <section className="max-w-[1200px] w-screen mx-auto overflow-x-hidden">
            <AppNavbar />
            <>{children}</>
            <AppFooter />
        </section>
    );
};

export default AuthenticatedLayout;
