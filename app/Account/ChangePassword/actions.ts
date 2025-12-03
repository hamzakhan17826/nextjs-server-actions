"use server";

export async function changePassword(formData: FormData) {
  const body = {
    oldPassword: formData.get("oldPassword"),
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const res = await fetch(
    "https://test.scrapcarfast.com/Account/ChangePassword",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update password");
  }

  const response = await res.json();
  console.log("API response", response);

  return response;
}
