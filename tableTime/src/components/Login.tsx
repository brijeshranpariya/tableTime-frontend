import { useState, type FormEvent } from 'react';
import logo from './../assets/logo.png';

export const Login = () => {
    const [loginInfo, setLoginInfo] = useState<{ email: string, password: string }>({
        email: "",
        password: ""
    })
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const handleChange = (name: string, value: string) => {
        setLoginInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className="h-full w-full flex flex-col">

            <div className="flex flex-col items-center justify-start pt-14">
                <img src={logo} alt="logo" className="w-20 h-20 bg-white rounded-full p-2 shadow-md" />
                <h1 className="text-3xl font-bold text-primary mt-6">Welcome Back!</h1>
            </div>

            <form onSubmit={handleSubmit} className="mt-auto flex flex-col gap-y-4 px-6 pt-8 pb-10 w-full bg-white rounded-t-[50px] shadow-[0_-6px_24px_rgba(100,0,0,0.25)]">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-md font-medium text-gray-800">
                        Email
                    </label>
                    <input
                        required
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        type="email"
                        name="email"
                        value={loginInfo.email}
                        placeholder="you@example.com"
                        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="text-md font-medium text-gray-800">
                        Password
                    </label>
                    <input
                        required
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        type="password"
                        name="password"
                        value={loginInfo.password}
                        className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                <button
                    disabled={loginInfo.email.trim() === "" || loginInfo.password.trim() === ""}
                    type="submit"
                    className="mt-4 py-3 bg-primary text-white font-semibold rounded-md hover:bg-red-700 transition"
                >
                    Let’s Discover
                </button>


                <p className="text-sm text-center text-gray-500 mt-3">
                    Forgot your password?{' '}
                    <a href="#" className="text-primary font-medium">
                        Reset
                    </a>
                </p>
            </form>
        </div>
    );
};
