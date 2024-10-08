import React, { FC } from "react";
import PostCard from "./PostCard";
import { IPost } from "../../types/Post";

type PostDisplayProps = {
    posts: IPost[];
};

const PostDisplay: FC<PostDisplayProps> = ({ posts }) => {
    return (
        <section className="mx-3 w-full py-4">
            <h3 className="font-bold">Recent blog posts</h3>
            <div className="flex flex-col md:flex-row gap-4 py-4 mx-auto">
                <PostCard post={posts[0]} />

                <div className="flex flex-col gap-2">
                    <PostCard columns={2} post={posts[1]} />
                    <PostCard columns={2} post={posts[2]} />
                </div>
            </div>
            <PostCard columns={2} className="min-w-full" post={posts[3]} />
        </section>
    );
};

export default PostDisplay;
