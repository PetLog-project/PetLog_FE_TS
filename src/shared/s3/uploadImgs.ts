const baseUrl = import.meta.env.VITE_S3_PUBLIC_BASE_URL;

export async function uploadImgs(
  presignedUrl: string,
  file: File,
  filePath: string,
) {
  const res = await fetch(presignedUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type || "application/octet-stream",
    },
    body: file,
  });
  if (!res.ok) {
    console.log("S3 업로드 실패");
  }
  return `${baseUrl}${filePath}`;
}
