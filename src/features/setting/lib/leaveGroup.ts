import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";
import type { NavigateFunction } from "react-router-dom";

export async function leaveGroup(
  acc: string,
  groupId: number,
  nav: NavigateFunction,
) {
  try {
    let response = await fetch(
      `https://dev.petlog.site/api/groups/${groupId}/leave`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc}`,
        },
      },
    );

    if (response.status === 401) {
      const newToken = await requestTokenRefresh();

      response = await fetch(
        `https://dev.petlog.site/api/groups/${groupId}/leave`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken}`,
          },
        },
      );
    }

    nav("/groupentry");
  } catch (e) {
    console.log(e);
  }
}
