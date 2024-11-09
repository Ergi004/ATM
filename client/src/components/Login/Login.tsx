import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { Auth } from "@/api/Auth";

const icons = [
  <FcGoogle key="google" />,
  <FaGithub color="black" key="github" />,
  <FaFacebook color="blue" key="facebook" />,
];

export const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await Auth.login({ email, password });
    if (!(response instanceof Error)) {
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };
  return (
    <div className="h-full m-auto max-w-2xl bg-secondary shadow-lg flex flex-col px-14 py-9 rounded-3xl">
      <div className="max-w-96 w-full flex flex-col m-auto py-6">
        <h1 className="font-bold mt-auto text-primary text-3xl">Login</h1>
        <form onSubmit={handleSubmit} className="mt-10 w-full mb-2 space-y-6">
          <div className="w-full flex flex-col space-y-3">
            <label className="w-full  font-semibold text-white" htmlFor="text">
              Email*
            </label>
            <input
              placeholder="Email"
              type="email"
              className="text-black  px-3 py-2 w-full rounded-lg border-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col space-y-3">
            <label className="w-full  font-semibold text-white" htmlFor="text">
              Password*
            </label>
            <input
              type="password"
              className="text-black px-3 py-2 w-full rounded-lg border-0"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link className="text-primary mt-6 text-sm cursor-pointer" href="/">
            Forgot password?
          </Link>
          <div className="w-ful flex flex-col justify-center">
            <Button
              type="submit"
              className="text-secondary font-semibold hover:bg-red-400 bg-white "
            >
              Login
            </Button>
          </div>
        </form>

        <span className="text-primary mx-auto mt-6 mb-5">Or continue with</span>

        <div className="flex items-center w-full justify-center  space-x-5">
          {icons.map((icon, index) => (
            <div
              key={`icon-${index}`}
              className="h-12 w-24 py-1 px-4 bg-white rounded-full justify-center flex items-center"
            >
              {icon}
            </div>
          ))}
        </div>
        <span className="mx-auto mt-4 text-primary">
          Don&apos;t have an account?
          <span className="font-semibold cursor-pointer">Register Now</span>
        </span>
      </div>
    </div>
  );
};
