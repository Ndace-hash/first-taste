import React, { FC } from "react";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout";
import BlogBanner from "../../../images/blog1.png";

interface IPostProp {
    id: string;
}

const SinglePost: FC<IPostProp> = ({ id }) => {
    return (
        <>
            <AuthenticatedLayout>
                <section className="w-full">
                    <div className="w-full h-[200px] lg:h-[500px] overflow-hidden rounded-t-lg lg:rounded-t-3xl">
                        <img
                            src={BlogBanner}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="flex flex-col gap-2 py-3 lg:py-6 px-2 lg:px-0">
                        <h1 className="font-bold text-3xl">
                            UX review presentations
                        </h1>
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
                                Laravel is a web application framework with
                                expressive, elegant syntax. A web framework
                                provides a structure and starting point for
                                creating your application, allowing you to focus
                                on creating something amazing while we sweat the
                                details.
                            </p>
                            <p className="leading-loose lg:leading-relaxed">
                                Laravel strives to provide an amazing developer
                                experience while providing powerful features
                                such as thorough dependency injection, an
                                expressive database abstraction layer, queues
                                and scheduled jobs, unit and integration
                                testing, and more.
                            </p>
                            <p className="leading-loose lg:leading-relaxed">
                                Whether you are new to PHP web frameworks or
                                have years of experience, Laravel is a framework
                                that can grow with you. We'll help you take your
                                first steps as a web developer or give you a
                                boost as you take your expertise to the next
                                level. We can't wait to see what you build.
                            </p>
                            <p className="leading-loose lg:leading-relaxed">
                                There are a variety of tools and frameworks
                                available to you when building a web
                                application. However, we believe Laravel is the
                                best choice for building modern, full-stack web
                                applications.
                            </p>
                        </div>
                    </div>
                </section>
            </AuthenticatedLayout>
        </>
    );
};

export default SinglePost;
