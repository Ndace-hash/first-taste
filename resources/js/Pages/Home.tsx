import React, { FC } from "react";
import { Head } from "@inertiajs/react";

import { PageProp } from "../types/Prop";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";

const HomePage: FC<PageProp> = ({ user }) => {
    return (
        <AuthenticatedLayout>
            <section className="h-screen ">
                <Head title="LaraCrest" />
            </section>
        </AuthenticatedLayout>
    );
};

export default HomePage;
