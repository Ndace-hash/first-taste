import React, { FC } from "react";
type PostProp = {
    post: { title: string; content: string; posted_at: string };
};
const PostCard: FC<PostProp> = ({ post }) => {
    return (
        <article className="border rounded-md px-2 py-3 my-2 shadow-md mb-2 flex flex-col gap-2">
            <h2 className="font-bold">{post.title}</h2>
            <span className="text-xs">{post.posted_at}</span>
        </article>
    );
};

export default PostCard;
