import React from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">
        Detail Produk {params.productId}
      </h1>
      <div className="bg-white p-4 rounded-lg shadow">
        {/* Tempat untuk menampilkan detail produk */}
      </div>
    </div>
  );
}
