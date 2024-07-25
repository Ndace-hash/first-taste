import React, { FormEvent } from "react";
import { useForm } from "@inertiajs/react";

const CreatePostPage = () => {
    const { data, post, setData, reset } = useForm({ title: "", content: "" });
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        post("/posts/create");
        reset("title", "content");
    };

    return (
        <section className="max-w-[700px] mx-auto">
            <h1 className="font-bold text-2xl my-4">Create New Post</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="font-bold">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={data.title}
                        onChange={(e) => {
                            setData("title", e.target.value);
                        }}
                        name="title"
                        className="bg-slate-100 p-1 text-lg rounded-md shadow-md overflow-auto focus:outline-2 outline-red-200 border-2 border-red-200 focus:shadow-xl duration-200 ease-in"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="content" className="font-bold">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={data.content}
                        onChange={(e) => {
                            setData("content", e.target.value);
                        }}
                        className="bg-slate-100 p-1 text-lg rounded-md min-h-[400px] max-h-[400px] shadow-md overflow-auto focus:outline-2  outline-red-200  border-2 border-red-200 focus:shadow-xl duration-200 ease-in"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="border border-red-400 py-2 px-8 bg-red-400 text-slate-100 font-semibold uppercase rounded-md shadow-md hover:shadow-lg duration-200 ease-in hover:rotate-3"
                    >
                        Publish
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreatePostPage;
