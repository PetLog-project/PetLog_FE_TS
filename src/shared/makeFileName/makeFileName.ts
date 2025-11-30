export function makeFileName(
  imgType: ImgType,
  file: File,
  idx: number,
  diaryId?: number,
) {
  const ext = file.name.split(".").pop() || "png";

  return `${Date.now()}_${idx}.${ext}`;
}

type ImgType = "profile" | "diary";
