"use client";

import React from "react";
import Link from "next/link";
import { sendGAEvent } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  eventName: string;
  eventParams?: Record<string, string | number | boolean | undefined>;
  className?: string;
  target?: string;
  rel?: string;
  isExternal?: boolean;
}

export default function TrackedLink({
  href,
  children,
  eventName,
  eventParams,
  className,
  target,
  rel,
  isExternal = false,
}: TrackedLinkProps) {
  const handleClick = () => {
    sendGAEvent(eventName, eventParams);
  };

  if (isExternal || target === "_blank") {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
