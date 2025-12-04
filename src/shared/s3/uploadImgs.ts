const baseUrl = import.meta.env.VITE_S3_PUBLIC_BASE_URL;

export async function uploadImgs(
  presignedUrl: string,
  file: File,
  filePath: string,
) {
  const response = await fetch(presignedUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type || "application/octet-stream",
    },
    body: file,
  });
  if (!response.ok) {
    console.log("s3 업로드에 실패했습니다");
  }

  return `${baseUrl}${filePath}`;
}
