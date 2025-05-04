"use client";

import { useRouter } from "next/navigation";
import React from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          padding: 32,
          minWidth: 320,
          minHeight: 180,
          boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
          position: "relative",
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "#eee",
            border: "none",
            borderRadius: 4,
            padding: "4px 8px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
}
