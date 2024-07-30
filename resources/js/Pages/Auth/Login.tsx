import React, { FormEvent } from "react";
import { Head, useForm } from "@inertiajs/react";
const LoginPage = () => {
    const { data, setData, post, errors, reset } = useForm({
        email: "",
        password: "",
    });
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        post("/auth/login");
    };

    return (
        <>
            <Head>
                <title>Login to account | Laracrest</title>
            </Head>
            <section className="max-w-[1020px] mx-auto h-screen overflow-hidden flex items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-[50%] px-4 py-4 flex flex-col gap-3"
                >
                    <div className="max-w-[800px] mb-4 flex flex-col gap-2">
                        <h2 className="font-semibold text-xl">
                            Welcome Back, Sign in to your account
                        </h2>
                        <p className="text-sm">
                            Sign into account to keep track of your posts, and
                            activities and explore topic of your interest.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs text-slate-600">Email</label>
                        <input
                            type="email"
                            placeholder="Your email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            name="email"
                            className="border border-slate-400 rounded py-1 px-3 text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs text-slate-600">
                            Password
                        </label>
                        <input
                            type="text"
                            placeholder="Must be at least of 8 characters"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            name="password"
                            className="border border-slate-400 rounded py-1 px-3 text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-[.7rem] text-slate-500">
                            <a
                                href="/"
                                className="font-bold underline text-slate-700"
                            >
                                Forgot password?
                            </a>
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="self-end bg-slate-950 text-white text-xs py-3 px-6 rounded flex items-center justify-center leading-none"
                    >
                        Login
                    </button>
                    <p className="self-end text-xs">
                        Don't have an account?{" "}
                        <a
                            href="/auth/register"
                            className="font-bold underline text-slate-700"
                        >
                            Register
                        </a>
                    </p>
                </form>
            </section>
        </>
    );
};

export default LoginPage;
