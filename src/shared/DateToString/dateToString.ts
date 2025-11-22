export function dateToString(originaldate: string) {
  if (!originaldate) {
    return "";
  }
  const tempDateString = originaldate.split(".");
  const year = tempDateString[0];
  const month = tempDateString[1];
  const date =
    tempDateString[2].charAt(0) == "0"
      ? tempDateString[2].slice(1)
      : tempDateString[2];

  return `${year}년 ${month}월 ${date}일`;
}
