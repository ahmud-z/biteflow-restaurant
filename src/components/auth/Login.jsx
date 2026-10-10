import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        setFormData((current) => ({
            ...current,
            [event.target.name]: event.target.value,
        }));
        setError("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            login(formData);
            navigate("/");
        } catch (submitError) {
            setError(submitError.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Navbar />
            <main className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-10 px-5 py-10 lg:grid-cols-2 lg:gap-16 lg:px-8">

            {/* Food Image */}
            <div className="hidden overflow-hidden rounded-[2rem] lg:block">
                <img
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
                    alt="BiteFlow food spread"
                    className="h-[560px] w-full object-cover"
                />
            </div>

            {/* Login Card */}
            <div className="mx-auto w-full max-w-md rounded-3xl border border-orange-100 bg-white shadow-sm">

                {/* Header */}
                <div className="p-7 pb-4 sm:p-8 sm:pb-4">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f4511e]">
                        Welcome back
                    </p>

                    <h1 className="mt-2 text-3xl font-black tracking-tight text-stone-900">
                        Good food awaits.
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-stone-500">
                        Log in to track orders and save your favorites.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-7 pt-3 sm:p-8 sm:pt-3">

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="text-sm font-bold text-stone-700"
                        >
                            Email address
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="mt-2 h-12 w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-[#f4511e] focus:bg-white focus:ring-2 focus:ring-orange-100"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="text-sm font-bold text-stone-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            minLength="6"
                            required
                            placeholder="••••••••"
                            className="mt-2 h-12 w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-[#f4511e] focus:bg-white focus:ring-2 focus:ring-orange-100"
                        />
                    </div>

                    {/* Forgot Password */}
                    {/* <div className="-mt-1 flex justify-end">
                        <button
                            type="button"
                            className="text-xs font-bold text-[#f4511e] transition hover:text-[#dc4218]"
                        >
                            Forgot password?
                        </button>
                    </div> */}

                    {error && (
                        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 w-full rounded-xl bg-[#f4511e] font-bold text-white shadow-md shadow-orange-100 transition hover:bg-[#dc4218] hover:shadow-lg active:scale-[0.99]"
                    >
                        {isSubmitting ? "Logging in..." : "Log in"}
                    </button>

                    {/* Register */}
                    <p className="pt-1 text-center text-sm text-stone-400">
                        New to BiteFlow?{" "}
                        <Link
                            to={"/register"}
                            className="font-bold text-[#f4511e] transition hover:text-[#dc4218]"
                        >
                            Create an account
                        </Link>
                    </p>
                </form>
            </div>
            </main>
            <Footer />
        </div>
    );
};

export default Login;
