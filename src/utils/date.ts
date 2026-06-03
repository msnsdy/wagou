export function formatDate(dateString: string, separator: string = "/"): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  return `${year}${separator}${month}${separator}${day}`;
}