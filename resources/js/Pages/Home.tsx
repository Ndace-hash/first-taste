import React, { FC } from "react";
import { Head } from "@inertiajs/react";

import { PageProp } from "../types/Prop";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import PostDisplay from "../Components/posts/PostDisplay";

const HomePage: FC<PageProp> = ({ user }) => {
    return (
        <AuthenticatedLayout>
            <section className="h-screen ">
                <Head title="LaraCrest" />
                <PostDisplay />
            </section>
        </AuthenticatedLayout>
    );
};

export default HomePage;
