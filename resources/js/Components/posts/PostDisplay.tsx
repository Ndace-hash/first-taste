import React, { FC } from "react";
import PostCard from "./PostCard";
import { IPost } from "../../types/Post";

type PostDisplayProps = {
    posts: IPost[];
};

const PostDisplay: FC<PostDisplayProps> = ({ posts }) => {
    return (
        <section className="mx-3">
            {posts.map((post, index) => (
                <PostCard
                    post={post}
                    key={`${index}-${post.title
                        .replace(" ", "-")
                        .toLowerCase()}`}
                />
            ))}
        </section>
    );
};

export default PostDisplay;
