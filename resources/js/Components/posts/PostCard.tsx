import React, { FC } from "react";
import { IPost } from "../../types/Post";
import { Link } from "@inertiajs/react";
import BlogImage from "../../../images/blog1.png";
import LinkTo from "../../../images/icon/arrow-up-right.svg";
type PostProp = {
    post: IPost;
    columns?: number;
    className?: string;
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
const PostCard: FC<PostProp> = ({ columns = 1, className = "", post }) => {
    return (
        <Link href={`/posts/${post.id}`} className="md:w-max">
            <article
                className={` rounded-md my-2 mb-2 gap-2 mx-auto md:grid grid-cols-2 grid-rows-2 ${
                    columns == 1 ? "md:w-full" : "md:w-[600px]"
                } ${className}`}
            >
                <div
                    style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                    className={`flex items-center justify-center overflow-hidden w-full h-full ${
                        columns == 1 ? "col-span-2 row-span-1" : "row-span-2"
                    }`}
                >
                    <img
                        src={post?.img_url}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div
                    className={`py-3 mb-2 px-2 flex flex-col gap-2 w-full ${
                        columns == 1 ? "col-span-2" : "row-span-2"
                    }`}
                >
                    <span className="text-[#6941C6] font-semibold text-xs">
                        Olivia Rhye • 1 Jan 2023
                    </span>
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-xl">{post?.title}</h2>
                        <img src={LinkTo} alt="" className="cursor-pointer" />
                    </div>
                    <p className="text-sm">{post?.content.slice(0, 70)}...</p>
                    <span className="text-[.8rem] text-[#6941C6] bg-[#6941c61e] py-1 px-3 rounded-full flex items-center justify-center flex-grow-0 w-max">
                        Design
                    </span>
                </div>
            </article>
        </Link>
    );
};

export default PostCard;
