"use client";

import { useState } from "react";
import { changePassword } from "./actions";

export default function ChangePasswordPage() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    try {
      const response = await changePassword(formData);
      setMessage(response.message);
    } catch (err) {
      setMessage((err as Error).message);
    }
  };

  return (
    <div className="w-1/4 mb-5">
      <h1>/Account/ChangePassword</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="oldPassword"
          type="password"
          placeholder="Old Password"
          className="border p-2 w-full rounded-lg bg-white"
        />

        <input
          name="newPassword"
          type="password"
          placeholder="New Password"
          className="border p-2 w-full rounded-lg bg-white"
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm New Password"
          className="border p-2 w-full rounded-lg bg-white"
        />

        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Change Password
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}
