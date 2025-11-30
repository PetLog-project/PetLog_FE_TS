import { makeFileName } from "../makeFileName/makeFileName";
import { getPresignedUrl } from "./getPresignedUrl";
import { uploadImgs } from "./uploadImgs";

export async function handleS3ImgUrl(imgs: File | null, acc: string) {
  const imgNames: string[] = [];
  if (imgs == null) {
    return [""];
  }
  if (Array.isArray(imgs)) {
    imgs.forEach((x, idx) => {
      const name = makeFileName("profile", x, idx);
      imgNames.push(name);
    });
  } else {
    const name = makeFileName("profile", imgs, 0);
    imgNames.push(name);
  }

  const presignedUrl = await getPresignedUrl("PROFILE_IMAGE", imgNames, acc);

  return await Promise.all(
    presignedUrl.map((x: { filePath: string; presignedUrl: string }) =>
      uploadImgs(x.presignedUrl, imgs, x.filePath),
    ),
  );
}
