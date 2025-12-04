import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";

export async function getGroupId(
  setGroupId: (gid: number) => void,
  acc: string,
) {
  try {
    let response = await fetch("https://dev.petlog.site/api/groups/my", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${acc}`,
      },
    });

    if (response.status === 401) {
      const newToken = await requestTokenRefresh();

      response = await fetch("https://dev.petlog.site/api/groups/my", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${newToken}`,
        },
      });
    }

    const data = await response.json();
    setGroupId(data.data.groupIds[0]);
    return data.data.groupIds[0];
  } catch (e) {
    console.log(e);
  }
}
