"use client";

import { registerUser } from "./actions";

export default function RegisterPage() {
  return (
    <div className="mb-5">
      <h1>/Account/Register</h1>
      <form action={registerUser} className="space-y-4">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
        />
        <input
          name="userName"
          placeholder="Username"
          className="border p-2 w-full"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="border p-2 w-full"
        />

        <input
          name="countryId"
          type="number"
          placeholder="Country ID"
          className="border p-2 w-full"
        />

        <input
          name="cityId"
          type="number"
          placeholder="City ID"
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
