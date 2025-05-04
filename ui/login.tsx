import React from "react";

export function Login() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{ padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
      />
      <button
        type="submit"
        style={{
          padding: 8,
          borderRadius: 4,
          background: "#0070f3",
          color: "#fff",
          border: "none",
        }}
      >
        Login
      </button>
    </form>
  );
}
