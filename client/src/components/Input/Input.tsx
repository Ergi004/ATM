import React from "react";
import clsx from "clsx";

interface InputProps {
  type:
    | "text"
    | "email"
    | "date"
    | "button"
    | "checkbox"
    | "radio"
    | "image"
    | "file"
    | "select"
    | "color"
    | "datetime-local"
    | "hidden"
    | "number"
    | "month"
    | "reset"
    | "submit"
    | "password"
    | "radip"
    | "range"
    | "search"
    | "time"
    | "tel"
    | "url"
    | "week";
  label: string;
  className: string;
  placeholder?: string;
}

export const Input = ({ type, label, className, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col justify-start space-y-1">
      <label className={clsx("w-full px-3", className)} htmlFor="text">
        {label}
      </label>
      <input
        className="rounded-md text-black px-4 py-2"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
