"use server";
export async function desktopUsers(formData: FormData, token: string) {
  try {
    const body = {
      userId: formData.get("userId"),
      userName: formData.get("userName"),
    };

    const res = await fetch(
      `https://test.scrapcarfast.com/Account/DesktopUsers?userId=${body.userId}&userName=${body.userName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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
      const errorMessage = response.message || "Failed to fetch user";
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
