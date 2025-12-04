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

  return `${baseUrl}${filePath}`;
}
