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
    body: JSON.stringify(body)
  })

  const response = res.json();
  console.log("API response", response);

  return response;
}
