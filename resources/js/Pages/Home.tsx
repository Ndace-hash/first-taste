import React, { FC } from "react";
import { Head } from "@inertiajs/react";

import { PageProp } from "../types/Prop";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import PostDisplay from "../Components/posts/PostDisplay";
import { IPost } from "../types/Post";
import AllPostDisplay from "../Components/posts/AllPostsDisplay";

type Prop = {
    posts: IPost[];
};

const HomePage: FC<Prop> = ({ posts }) => {
    console.log(posts);
    return (
        <AuthenticatedLayout>
            <Head title="LaraCrest" />
            <section className="flex flex-col items-center px-1">
                <h1 className="font-bold uppercase text-5xl sm:text-6xl md:text-9xl xl:text-[14rem] text-center py-4 border-y border-slate-400 flex items-center justify-center px-6 w-full leading-none">
                    The Blog
                </h1>
                <PostDisplay posts={posts as IPost[]} />
                <AllPostDisplay posts={posts as IPost[]} />
            </section>
        </AuthenticatedLayout>
    );
};

export default HomePage;
