"use server";
export async function createUser(formData: FormData, token: string) {
  try {
    const body = {
      userName: formData.get("userName"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const res = await fetch(
      "https://test.scrapcarfast.com/Account/CreateUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }
    );

    const responseText = await res.text();
    let response;
    try {
      response = JSON.parse(responseText);
    } catch {
      response = { message: responseText };
    }

    if (!res.ok) {
      const errorMessage = response.message || "Failed to create user";
      console.error(`API error ${res.status}: ${errorMessage}`);
      throw new Error(errorMessage);
    }

    // console.log("API response", response);
    return response;
  } catch (err) {
    console.error("Fetch failed:", err);
    throw err instanceof Error ? err : new Error("Unknown error");
  }
}
