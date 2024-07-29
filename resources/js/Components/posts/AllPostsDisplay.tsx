import React from "react";
import PostCard from "./PostCard";
import Arrow from "../../../images/icon/arrow-left.svg";

const AllPostDisplay = () => {
    return (
        <section className="mx-3 w-full py-4">
            <h3 className="font-bold">All Blog Posts</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-2 py-4 border-b border-slate-400">
                <PostCard className="max-w-[320px]" />
                <PostCard className="max-w-[320px]" />
                <PostCard className="max-w-[320px]" />
                <PostCard className="max-w-[320px]" />
                <PostCard className="max-w-[320px]" />
                <PostCard className="max-w-[320px]" />
                <PostCard className="max-w-[320px]" />
                <PostCard className="max-w-[320px]" />
                <PostCard className="max-w-[320px]" />
            </div>
            <div className="flex justify-between items-center py-6 px-2">
                <button className=" flex gap-2 items-center justify-center">
                    <img src={Arrow} alt="" />
                    <span>Previous</span>
                </button>
                <div className="flex items-center justify-center gap-3">
                    <a href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">4</a>
                    <a href="">5</a>
                    <a href="">6</a>
                </div>
                <button className=" flex gap-2 items-center justify-center">
                    <span>Next</span>
                    <img src={Arrow} alt="" className="rotate-180" />
                </button>
            </div>
        </section>
    );
};
export default AllPostDisplay;
