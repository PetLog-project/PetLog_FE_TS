export function handleInput(
  currentInputValue: string,
  placeholderStr: string,
  type: string,
) {
  if (type == "add") {
    return currentInputValue;
  }
  if (!currentInputValue) {
    return placeholderStr;
  }
  return currentInputValue;
}
