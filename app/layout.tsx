import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parallel Routes Demo",
  description: "Demo aplikasi parallel routes di Next.js",
};

export default function RootLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          <header className="bg-blue-600 text-white p-4">
            <h1 className="text-xl font-bold">Parallel Routes Demo</h1>
          </header>

          <main className="container mx-auto py-8 px-4">
            <div className="mb-8">{children}</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                <h2 className="text-blue-800 font-bold mb-2">Team Section</h2>
                {team}
              </div>

              <div className="bg-purple-100 p-4 rounded-lg border border-purple-200">
                <h2 className="text-purple-800 font-bold mb-2">
                  Analytics Section
                </h2>
                {analytics}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
