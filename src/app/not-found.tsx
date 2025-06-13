// app/not-found.tsx
"use client";

import Loader from "@/components/Loader";

export default function NotFound() {
  return (
    <main style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Loader />
    </main>
  );
}
