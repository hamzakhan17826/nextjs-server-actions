import { registerUser } from "./actions";

export default function RegisterPage() {
  return (
    <div className="w-1/4 mb-5">
      <h1>/Account/Register</h1>
      <form action={registerUser} className="space-y-4">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border p-2 w-full rounded-lg bg-white"
        />
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

        <input
          name="countryId"
          type="number"
          placeholder="Country ID"
          className="border p-2 w-full rounded-lg bg-white"
        />

        <input
          name="cityId"
          type="number"
          placeholder="City ID"
          className="border p-2 w-full rounded-lg bg-white"
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
