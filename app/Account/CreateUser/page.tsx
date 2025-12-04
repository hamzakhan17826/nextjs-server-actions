"use client";

import { useState } from "react";
import { createUser } from "./actions";

export default function CreateUserPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const token = localStorage.getItem("token") || "";
    try {
      const response = await createUser(formData, token);
      localStorage.setItem("userId", response.userID);
      setMessage(response.message);
    } catch (err) {
      setMessage((err as Error).message);
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

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}
