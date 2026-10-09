import { Link } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Login = () => {
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
                            Create a new account
                        </p>

                        <h1 className="mt-2 text-3xl font-black tracking-tight text-stone-900">
                            Good food awaits.
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-stone-500">
                            Log in to track orders and save your favorites.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-5 p-7 pt-3 sm:p-8 sm:pt-3">

                        {/* name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="text-sm font-bold text-stone-700"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="name"
                                placeholder="John Doe"
                                className="mt-2 h-12 w-full rounded-xl border border-orange-100 bg-[#fffaf5] px-4 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-[#f4511e] focus:bg-white focus:ring-2 focus:ring-orange-100"
                            />
                        </div>


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

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="h-12 w-full rounded-xl bg-[#f4511e] font-bold text-white shadow-md shadow-orange-100 transition hover:bg-[#dc4218] hover:shadow-lg active:scale-[0.99]"
                        >
                            Create account
                        </button>

                        {/* Register */}
                        <p className="pt-1 text-center text-sm text-stone-400">
                            Already signin?{" "}
                            <Link to={"/login"}
                                className="font-bold text-[#f4511e] transition hover:text-[#dc4218]"
                            >
                                Login
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