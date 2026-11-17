import React from "react";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function layout({ children }: { children: React.ReactNode }) {
  return <div className="prose container mx-auto max-w-7xl my-20">{children}</div>;
}
