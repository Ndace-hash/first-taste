import React, { FC, ReactNode } from "react";
import AppNavbar from "../Components/AppNavbar";

type AuthenticatedPageProp = {
    children: ReactNode;
};

const AuthenticatedLayout: FC<AuthenticatedPageProp> = ({ children }) => {
    return (
        <section>
            <AppNavbar />
            <>{children}</>
        </section>
    );
};

export default AuthenticatedLayout;
