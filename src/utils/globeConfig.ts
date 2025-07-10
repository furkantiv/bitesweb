export const globeSettings: {
  [route: string]: {
    position: [number, number, number];
    speed: number;
    scale: number;
  };
} = {
  "/": { position: [0, -1.4, 0], speed: 0.0004, scale: 0.7 },
  "/about": { position: [-2.2, -1.7, 0], speed: 0.0004, scale: 0.7 },
  "/products": { position: [0, -2.1, 0], speed: 0.0004, scale: 0.7 },
  "/news": { position: [2.2, -1.7, 0], speed: 0.0004, scale: 0.7 },
  "/career": { position: [-2, -0.1, 0], speed: 0.0004, scale: 0.5 },
  "/contact": { position: [0.9, 0.2, 0], speed: 0.0004, scale: 0.4 },
  "/products/[slug]": { position: [0, -1.8, 0], scale: 0.7, speed: 0.0006 },
};
const BASE_PATH = "/bitesweb"; // Veya next.config.js'ten al

const LOCALES = ["tr", "en"];

function normalizePath(pathname: string): string {
  // basePath'i sil
  let p = pathname.startsWith(BASE_PATH)
    ? pathname.slice(BASE_PATH.length)
    : pathname;
  // En başta slash yoksa ekle
  if (!p.startsWith("/")) p = "/" + p;
  // locale prefix'i sil
  const parts = p.split("/").filter(Boolean); // boş stringleri at
  if (parts.length && LOCALES.includes(parts[0])) {
    parts.shift(); // locale'i kaldır
  }
  p = "/" + parts.join("/");

  // Dinamik ürün sayfası için
  if (p.startsWith("/products/") && p !== "/products")
    return "/products/[slug]";

  // Anasayfa için
  if (p === "/") return "/";

  // Diğer path'ler için olduğu gibi döndür
  return p;
}

export function getGlobeConfig(pathname: string) {
  const route = normalizePath(pathname);
  if (globeSettings[route]) return globeSettings[route];
  return globeSettings["/"];
}
