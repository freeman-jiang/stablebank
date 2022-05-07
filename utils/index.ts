export const getInitials = (fullName: string): string => {
  const fullNameArray = fullName.split(" ");
  if (fullNameArray.length === 0) {
    return "";
  }
  const initials =
    fullNameArray.shift()!.charAt(0) + fullNameArray.pop()!.charAt(0);
  return initials.toUpperCase();
};
