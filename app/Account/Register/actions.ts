"use server";
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
    // console.log("API error", res.status);
    console.error("Error:", await res.text());
    throw new Error("Failed to register user");
  }

  const response = await res.json();
  // console.log("API response", response);

  return response;
}
