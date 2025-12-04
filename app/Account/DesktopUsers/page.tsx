"use client";

import { useState } from "react";
import { desktopUsers } from "./actions";

export default function DesktopUsersPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const token = localStorage.getItem("token") || "";
    const userId = localStorage.getItem("userId") || "";
    formData.set("userId", userId);
    try {
      const response = await desktopUsers(formData, token);
      setMessage(response.message);
    } catch (err) {
      setMessage((err as Error).message);
    }
  };
  return (
    <div className="w-1/4 mb-5">
      <h1>/Account/DesktopUsers</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="userName"
          placeholder="Username"
          className="border p-2 w-full rounded-lg bg-white"
        />

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Get Desktop Users
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}
