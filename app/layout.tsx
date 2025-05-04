import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tab Groups Demo",
  description: "Demo aplikasi tab groups dengan parallel routes di Next.js",
};

export default function RootLayout({
  children,
  team,
  analytics,
  auth,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-blue-600 text-white p-4">
            <h1 className="text-xl font-bold">Tab Groups Demo</h1>
          </header>

          <main className="container mx-auto py-8 px-4">
            <div className="mb-4">
              <Link
                href="/login"
                style={{
                  background: "#0070f3",
                  color: "#fff",
                  padding: "8px 16px",
                  borderRadius: 4,
                  textDecoration: "none",
                }}
              >
                Buka Modal Login
              </Link>
            </div>

            {auth}

            <div className="mb-8">{children}</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                <h2 className="text-blue-800 font-bold mb-2">Team Section</h2>
                {team}
              </div>

              <div>{analytics}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
