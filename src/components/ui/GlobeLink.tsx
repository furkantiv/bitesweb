"use client";
import Link, { LinkProps } from "next/link";
import { useGlobe } from "@/contexts/GlobeContext";
import { ReactNode, MouseEvent } from "react";

interface GlobeLinkProps extends LinkProps {
  children: ReactNode;
  position?: [number, number, number];
  speed?: number;
  scale?: number;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export function GlobeLink({
  children,
  position = [0, 0, 0],
  speed = 0.02,
  scale = 0.5,
  className,
  onClick,
  ...rest
}: GlobeLinkProps) {
  const { updateGlobe } = useGlobe();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    updateGlobe(speed, position, scale);
    onClick?.(e);
  };

  return (
    <Link {...rest} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
