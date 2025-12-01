export function formatYYYYMMDD(originalDate: string | Date) {
  if (typeof originalDate == "string") {
    return originalDate.replaceAll("-", ".");
  }
  return originalDate.toISOString().split("T")[0].replaceAll("-", ".");
}
