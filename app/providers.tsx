"use client";

import React, { ReactNode } from "react";
import { AuthProvider } from "./context/auth-context"; // adjust path accordingly

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
