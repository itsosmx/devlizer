import { servicesPageMetadata } from "@/lib/metadata";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return children;
}

export const metadata = servicesPageMetadata;
