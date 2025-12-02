import { loginUser } from "./action";

export default function LoginPage() {
  return (
    <div className="w-1/4 mb-5">
      <h1>/Account/Login</h1>
      <form action={loginUser} className="space-y-4">
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
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
