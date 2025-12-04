import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";
import type React from "react";

export async function getNotification(
  setToggle: React.Dispatch<React.SetStateAction<boolean>>,
  acc: string,
) {
  try {
    let response = await fetch("https://dev.petlog.site/api/notification", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc}`,
      },
    });

    if (response.status === 401) {
      const newToken = await requestTokenRefresh();

      response = await fetch("https://dev.petlog.site/api/notification", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken}`,
        },
      });
    }

    const data = await response.json();
    setToggle(data.data.isNotificationEnabled);
  } catch (e) {
    console.log(e);
  }
}
