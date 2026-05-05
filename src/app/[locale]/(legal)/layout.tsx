import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return <div className="prose container mx-auto max-w-7xl my-20">{children}</div>;
}
