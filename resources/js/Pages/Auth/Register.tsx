import React, { FormEvent, useState } from "react";
import { Head, useForm } from "@inertiajs/react";
const RegisterPage = () => {
    const [confirmPassword, setConfirmPassword] = useState("");
    const {
        data: formData,
        reset,
        errors,
        post,
        setData: setFormData,
        wasSuccessful,
    } = useForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        post("/auth/register");
    };

    return (
        <>
            <Head>
                <title>Create an account | Laracrest</title>
            </Head>

            <section className="max-w-[1020px] mx-auto h-screen overflow-hidden flex items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="lg:w-[50%] px-4 py-4 flex flex-col gap-3"
                >
                    <div className="max-w-[800px] mb-4 flex flex-col gap-2">
                        <h2 className="font-semibold text-xl">
                            Welcome, let's create an account
                        </h2>
                        <p className="text-sm">
                            Create an account to keep track of your posts, and
                            activities. Once your account has been created then
                            don't forget to verify your account through mail.
                        </p>
                    </div>
                    <div className="flex min-w-full gap-4 flex-col md:flex-row">
                        <div className="flex flex-col flex-grow gap-2">
                            <label className="text-xs text-slate-600">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your first name"
                                value={formData.firstName}
                                onChange={(e) =>
                                    setFormData("firstName", e.target.value)
                                }
                                name="first_name"
                                className="border border-slate-400 rounded py-1 px-3 text-sm"
                            />
                        </div>
                        <div className="flex flex-col flex-grow gap-2">
                            <label className="text-xs text-slate-600">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your last name"
                                value={formData.lastName}
                                onChange={(e) =>
                                    setFormData("lastName", e.target.value)
                                }
                                name="last_name"
                                className="border border-slate-400 rounded py-1 px-3 text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs text-slate-600">Email</label>
                        <input
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData("email", e.target.value)
                            }
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
                            value={formData.password}
                            onChange={(e) =>
                                setFormData("password", e.target.value)
                            }
                            name="password"
                            className="border border-slate-400 rounded py-1 px-3 text-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs text-slate-600">
                            Confirm Password
                        </label>
                        <input
                            type="text"
                            placeholder="Must be same as password above"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border border-slate-400 rounded py-1 px-3 text-sm"
                        />
                        <p className="text-[.7rem] text-slate-500">
                            By continuing you agree to LaraCrest's{" "}
                            <a
                                href="/"
                                className="font-bold underline text-slate-700"
                            >
                                terms of service
                            </a>{" "}
                            and{" "}
                            <a
                                href="/"
                                className="font-bold underline text-slate-700"
                            >
                                privacy policy.
                            </a>
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="lg:self-end bg-slate-950 text-white text-xs py-4 px-6 rounded flex items-center justify-center leading-none"
                    >
                        Continue
                    </button>
                    <p className=" self-center lg:self-end text-xs">
                        Already registered?{" "}
                        <a
                            href="/auth/login"
                            className="font-bold underline text-slate-700"
                        >
                            Sign In
                        </a>
                    </p>
                </form>
            </section>
        </>
    );
};

export default RegisterPage;
