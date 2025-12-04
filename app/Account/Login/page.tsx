"use client";

import { useState } from "react";
import { loginUser } from "./actions";

export default function LoginPage() {
  const [message, setMessage] = useState("");

  const [desktopId] = useState<string>(() =>
    typeof window !== "undefined" ? localStorage.getItem("desktopId") ?? "" : ""
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    try {
      const response = await loginUser(formData);
      localStorage.setItem("token", response.token);
      setMessage(response.message);
    } catch (err) {
      setMessage((err as Error).message);
    }
  };

  return (
    <div className="w-1/4 mb-5">
      <h1>/Account/Login</h1>
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

        <input type="hidden" name="desktopId" value={desktopId} />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
      <p className="mt-3">{message}</p>
    </div>
  );
}
