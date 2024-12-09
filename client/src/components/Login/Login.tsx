import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { Auth } from "@/api/Auth";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Password is required"),
});

const icons = [
  <FcGoogle key="google" />,
  <FaGithub color="black" key="github" />,
  <FaFacebook color="blue" key="facebook" />,
];

export const Login = () => {
  const router = useRouter();

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    setSubmitting(true);
    const response = await Auth.login(values);
    if (!(response instanceof Error)) {
      router.push("/dashboard");
      sessionStorage.setItem("userId", response.data.user.id);
    } else {
      alert("Login failed");
    }
    setSubmitting(false);
  };

  return (
    <div className="h-full m-auto w-full max-w-xl bg-secondary shadow-lg flex flex-col px-6 md:px-14 py-4 md:py-9 rounded">
      <div className="w-full flex flex-col m-auto py-6">
        <h1 className="font-bold mt-auto text-primary text-3xl">Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="mt-10 w-full mb-2 space-y-6">
              <div className="w-full flex flex-col space-y-3">
                <label
                  className="w-full font-semibold text-white"
                  htmlFor="email"
                >
                  Email*
                </label>
                <Field
                  placeholder="Email"
                  type="email"
                  className="text-black px-3 py-2 w-full rounded-lg border-0"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-secondary bg-red-200 w-full px-3 text-xs py-1 mt-1.5 rounded-full font-semibold"
                />
              </div>
              <div className="w-full flex flex-col space-y-3">
                <label
                  className="w-full font-semibold text-white"
                  htmlFor="password"
                >
                  Password*
                </label>
                <Field
                  type="password"
                  className="text-black px-3 py-2 w-full rounded-lg border-0"
                  placeholder="Password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-secondary bg-red-200 w-full px-3 text-xs py-1 mt-1.5 rounded-full font-semibold"
                />
              </div>
              <Link
                className="text-primary mt-6 text-sm cursor-pointer"
                href="/"
              >
                Forgot password?
              </Link>
              <div className="w-full flex flex-col justify-center">
                <Button
                  type="submit"
                  className="text-secondary font-semibold hover:bg-gray-200 bg-white"
                >
                  Login
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <span className="text-primary mx-auto mt-6 mb-5">Or continue with</span>
        <div className="flex items-center w-full justify-center space-x-5">
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
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold cursor-pointer">
            Register Now
          </Link>
        </span>
      </div>
    </div>
  );
};
