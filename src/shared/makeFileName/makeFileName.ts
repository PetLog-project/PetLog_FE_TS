export function makeFileName(file: File, idx: number) {
  const ext = file.name.split(".").pop() || "png";

  return `${Date.now()}_${idx}.${ext}`;
}
