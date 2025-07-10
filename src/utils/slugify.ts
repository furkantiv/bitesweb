export function slugify(str: string): string {
  if (typeof str !== "string") return "";
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}
