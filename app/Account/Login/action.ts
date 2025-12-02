"use server";

export async function loginUser(formData: FormData) {
  const body = {
    userName: formData.get("userName"),
    password: formData.get("password"),
    desktopId: 
  };

  const res = await fetch("https://test.scrapcarfast.com/Account/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    console.log("API error", res.status);
    console.error("Error:", await res.text());
    throw new Error("Failed to login user");
  }

  const response = await res.json();
  console.log("API response", response);

  return response;
}
