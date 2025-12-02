"use server";
import { cookies } from "next/headers";

export async function registerUser(formData: FormData) {
  const body = {
    email: formData.get("email"),
    userName: formData.get("userName"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    countryId: Number(formData.get("countryId")),
    cityId: Number(formData.get("cityId")),
  };

  const res = await fetch("https://test.scrapcarfast.com/Account/Register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    console.log("API error", res.status);
    console.error("Error:", await res.text());
    throw new Error("Failed to register user");
  }

  const response = await res.json();
  (await cookies()).set({
    name: "desktopId",
    value: String(response.desktopId),
    httpOnly: false, // make true if you don't need JS access
    path: "/",
  });
  console.log("API response", response);

  return response;
}
