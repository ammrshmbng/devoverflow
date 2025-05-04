import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Selamat Datang di Demo{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js
          </a>
        </h1>

        <p className="mt-3 text-2xl">Demo Intercepting Routes</p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link
            href="/gallery"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Galeri Foto &rarr;</h3>
            <p className="mt-4 text-xl">
              Lihat demo Intercepting Routes dengan galeri foto
            </p>
          </Link>

          <a
            href="/examples/intercepting-routes"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Contoh Lengkap &rarr;</h3>
            <p className="mt-4 text-xl">
              Lihat demo semua jenis Intercepting Routes (., .., ..(..), ...)
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
