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
  "/products/[slug]": { position: [0, -2.8, 0], scale: 0.7, speed: 0.0006 },
};

export function getGlobeConfig(pathname: string) {
  if (globeSettings[pathname]) return globeSettings[pathname];
  if (pathname.startsWith("/products/"))
    return globeSettings["/products/[slug]"];
  return globeSettings["/"];
}
