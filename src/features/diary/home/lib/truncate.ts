export function truncate(str: string) {
  if (str.length <= 7) {
    return str;
  }
  return str.slice(0, 7) + "...";
}
