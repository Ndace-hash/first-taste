import React, { FC } from "react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import BlogBanner from "../../../images/blog1.png";
import { IPost } from "../../types/Post";

interface IPostProp {
    post: IPost;
}

const SinglePost: FC<IPostProp> = ({ post }) => {
    return (
        <>
            <AuthenticatedLayout>
                <section className="w-full">
                    <div className="w-full h-[200px] lg:h-[500px] overflow-hidden rounded-t-lg lg:rounded-t-3xl">
                        <img
                            src={post.img_url}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="flex flex-col gap-2 py-3 lg:py-6 px-2 lg:px-0">
                        <h1 className="font-bold text-3xl">{post.title}</h1>
                        <p className=" text-sm ">
                            by{" "}
                            <span className="text-[#6941C6] capitalize font-bold">
                                Olivia Rhye
                            </span>
                        </p>
                        <p className="text-xs text-slate-400">
                            Posted on 1 Jan 2023
                        </p>
                        <div className="flex flex-col gap-6  w-[95%] lg:w-[80%] py-2">
                            <p className="leading-loose lg:leading-relaxed">
                                {post.content}{" "}
                            </p>
                        </div>
                    </div>
                </section>
            </AuthenticatedLayout>
        </>
    );
};

export default SinglePost;
