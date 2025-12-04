import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";

export async function setNotification(toggleResult: boolean, acc: string) {
  try {
    let response = await fetch("https://dev.petlog.site/api/notification", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc}`,
      },
      body: JSON.stringify({
        isNotificationEnabled: toggleResult,
      }),
    });

    if (response.status === 401) {
      const newToken = await requestTokenRefresh();

      response = await fetch("https://dev.petlog.site/api/notification", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken}`,
        },
        body: JSON.stringify({
          isNotificationEnabled: toggleResult,
        }),
      });
    }
  } catch (e) {
    console.log(e);
  }
}
