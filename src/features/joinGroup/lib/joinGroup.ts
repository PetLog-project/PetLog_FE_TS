import {
  requestTokenRefresh,
  sendToNative,
} from "@/features/nativeBootstrap/lib/nativeBridge";
import type React from "react";

export async function joinGroup(
  code: string,
  setIsReject: React.Dispatch<React.SetStateAction<boolean>>,
  acc: string,
) {
  try {
    let response = await fetch("https://dev.petlog.site/api/groups/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${acc}`,
      },
      body: JSON.stringify({
        joinCode: code,
      }),
    });

    if (response.status === 401) {
      const newToken = await requestTokenRefresh();

      response = await fetch("https://dev.petlog.site/api/groups/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken}`,
        },
        body: JSON.stringify({
          joinCode: code,
        }),
      });
    }

    if (!response.ok) {
      setIsReject(true);
    } else {
      sendToNative("ONBOARDING_FINISHED");
    }
  } catch (e) {
    console.log(e);
  }
}
