import React from "react";

interface SearchPageProps {
  searchParams: {
    q: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">
        Hasil Pencarian: {searchParams.q}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Hasil pencarian akan ditampilkan di sini */}
      </div>
    </div>
  );
}
