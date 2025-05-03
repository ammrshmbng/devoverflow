import React from "react";

interface OrderPageProps {
  params: {
    orderId: string;
  };
}

export default function OrderConfirmationPage({ params }: OrderPageProps) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">
        Konfirmasi Pesanan #{params.orderId}
      </h1>
      <div className="bg-white rounded-lg shadow p-4">
        {/* Detail pesanan akan ditampilkan di sini */}
      </div>
    </div>
  );
}
