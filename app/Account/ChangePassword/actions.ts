"use server";

export async function changePassword(formData: FormData, token: string) {
  // console.log(formData, token);
  const body = {
    oldPassword: formData.get("oldPassword"),
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const res = await fetch(
    "https://test.scrapcarfast.com/Account/ChangePassword",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );

  const response = await res.json();
  // console.log("API response", response);

  if (!res.ok) {
    const errorMessage = response.errors || "Failed to change password";
    throw new Error(errorMessage);
  }

  return response;
}
