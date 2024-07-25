import React, { FC } from "react";
import { IPost } from "../../types/Post";
type PostProp = {
    post: IPost;
};

const handleDate = (date: string) => {
    const dateArray = date.split("T")[0].split("-");
    return {
        year: dateArray[0],
        month: dateArray[1],
        day: dateArray[2],
        ddmmyy: `${dateArray[2]} ${dateArray[1]} ${dateArray[0]}`,
    };
};
const PostCard: FC<PostProp> = ({ post }) => {
    handleDate(post.created_at);
    return (
        <article className="border rounded-md px-2 py-3 my-2 shadow-md mb-2 flex flex-col gap-2">
            <h2 className="font-bold">{post.title}</h2>
            <span className="text-xs">{`${
                handleDate(post.created_at).ddmmyy
            }`}</span>
        </article>
    );
};

export default PostCard;
