"use client";

import { useState } from "react";
import { createUser } from "./actions";

export default function CreateUserPage() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const userName = formData.get("userName") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!userName || !password || !confirmPassword) {
      setMessage("All fields are required");
      setIsSuccess(false);
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setIsSuccess(false);
      return;
    }
    const token = localStorage.getItem("token") || "";
    if (!token) {
      setMessage("Please login first");
      setIsSuccess(false);
      return;
    }
    setIsLoading(true);
    setMessage("");
    try {
      const response = await createUser(formData, token);
      localStorage.setItem("userId", response.userID);
      setMessage(response.message);
      setIsSuccess(true);
      (event.target as HTMLFormElement).reset();
    } catch (err) {
      setMessage((err as Error).message);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-1/4 mb-5">
      <h1>/Account/CreateUser</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="userName"
          placeholder="Username"
          className="border p-2 w-full rounded-lg bg-white"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded-lg bg-white"
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="border p-2 w-full rounded-lg bg-white"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="bg-black text-white px-4 py-2 rounded disabled:bg-gray-500"
        >
          {isLoading ? "Creating..." : "Register"}
        </button>
      </form>
      <p className={isSuccess ? "text-green-500" : "text-red-500"}>{message}</p>
    </div>
  );
}
