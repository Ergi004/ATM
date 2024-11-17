"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { Auth } from "@/api/Auth";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required"),
  phoneNumber: Yup.string().min(8, "Too Short!").max(10, "Too Long"),
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

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export const Register = () => {
  const router = useRouter();

  const handleSubmit = async (
    values: RegisterFormValues,
    { setSubmitting }: FormikHelpers<RegisterFormValues>
  ) => {
    setSubmitting(true);
    const response = await Auth.register(values);
    if (!(response instanceof Error)) {
      router.push("/login");
    } else {
      alert("Register failed");
    }
    setSubmitting(false);
  };

  return (
    <div className="h-full mx-auto my-8 w-full max-w-xl bg-secondary shadow-lg flex flex-col px-6 py-4 md:px-14 md:py-9 rounded">
      <div className="w-full flex flex-col m-auto py-6">
        <h1 className="font-bold mt-auto text-primary text-3xl">Register</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="mt-10 w-full mb-2 space-y-6">
              <div className="w-full flex flex-col">
                <label
                  className="w-full font-semibold text-white"
                  htmlFor="firstName"
                >
                  First Name*
                </label>
                <Field
                  placeholder="First Name"
                  type="text"
                  className="text-black px-3 py-2 w-full rounded-lg border-0"
                  name="firstName"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-secondary bg-red-200 w-full px-3 text-xs py-1 mt-1.5 rounded-full font-semibold"
                />
              </div>

              <div className="w-full flex flex-col">
                <label
                  className="w-full font-semibold text-white"
                  htmlFor="lastName"
                >
                  Last Name*
                </label>
                <Field
                  placeholder="Last Name"
                  type="text"
                  className="text-black px-3 py-2 w-full rounded-lg border-0"
                  name="lastName"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-secondary bg-red-200 w-full px-3 text-xs py-1 mt-1.5 rounded-full font-semibold"
                />
              </div>

              <div className="w-full flex flex-col">
                <label
                  className="w-full font-semibold text-white"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <Field
                  placeholder="Phone number"
                  className="text-black px-3 py-2 w-full rounded-lg border-0"
                  name="phoneNumber"
                  type="text"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-secondary bg-red-200 w-full px-3 text-xs py-1 mt-1.5 rounded-full font-semibold"
                />
              </div>

              <div className="w-full flex flex-col">
                <label
                  className="w-full font-semibold text-white"
                  htmlFor="email"
                >
                  Email*
                </label>
                <Field
                  className="text-black px-3 py-2 w-full rounded-lg border-0"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-secondary bg-red-200 w-full px-3 text-xs py-1 mt-1.5 rounded-full font-semibold"
                />
              </div>

              <div className="w-full flex flex-col">
                <label
                  className="w-full font-semibold text-white"
                  htmlFor="password"
                >
                  Password*
                </label>
                <Field
                  className="text-black px-3 py-2 w-full rounded-lg border-0"
                  name="password"
                  placeholder="Password"
                  type="password"
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
                  Register
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
          Already have an account?{" "}
          <Link href="/login" className="font-semibold cursor-pointer">
            Login Now
          </Link>
        </span>
      </div>
    </div>
  );
};
