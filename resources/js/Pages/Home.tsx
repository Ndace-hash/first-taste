import React, { FC } from "react";
import { Head } from "@inertiajs/react";

import { PageProp } from "../types/Prop";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import PostDisplay from "../Components/posts/PostDisplay";
import { IPost } from "../types/Post";

const HomePage: FC<PageProp> = ({ posts }) => {
    return (
        <AuthenticatedLayout>
            <section className="h-screen ">
                <Head title="LaraCrest" />
                <PostDisplay posts={posts as IPost[]} />
            </section>
        </AuthenticatedLayout>
    );
};

export default HomePage;
