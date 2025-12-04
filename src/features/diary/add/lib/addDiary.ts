import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";
import type { NavigateFunction } from "react-router-dom";

export async function addDiary(
  type: string,
  title: string,
  content: string,
  imgs: string[] | null,
  date: string,
  acc: string,
  groupId: number,
  diaryId: number,
  nav: NavigateFunction,
) {
  try {
    let response = await fetch(
      `https://dev.petlog.site/api/groups/${groupId}/diary${type == "edit" ? `/${diaryId}` : ""}`,
      {
        method: type == "add" ? "POST" : "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc}`,
        },
        body: JSON.stringify({
          title: title,
          content: content,
          images: imgs == null ? null : imgs,
          writtenAt: date,
        }),
      },
    );

    if (response.status === 401) {
      const newToken = await requestTokenRefresh();

      response = await fetch(
        `https://dev.petlog.site/api/groups/${groupId}/diary${type == "edit" ? `/${diaryId}` : ""}`,
        {
          method: type == "add" ? "POST" : "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken}`,
          },
          body: JSON.stringify({
            title: title,
            content: content,
            images: imgs == null ? null : imgs,
            writtenAt: date,
          }),
        },
      );
    }
    nav("/diary");
  } catch (e) {
    console.log(e);
  }
}
