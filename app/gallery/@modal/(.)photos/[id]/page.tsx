"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const photos = [
  {
    id: 1,
    src: "https://source.unsplash.com/random/800x600?1",
    title: "Foto 1",
    description: "Deskripsi untuk foto 1",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/random/800x600?2",
    title: "Foto 2",
    description: "Deskripsi untuk foto 2",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/random/800x600?3",
    title: "Foto 3",
    description: "Deskripsi untuk foto 3",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/random/800x600?4",
    title: "Foto 4",
    description: "Deskripsi untuk foto 4",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/random/800x600?5",
    title: "Foto 5",
    description: "Deskripsi untuk foto 5",
  },
  {
    id: 6,
    src: "https://source.unsplash.com/random/800x600?6",
    title: "Foto 6",
    description: "Deskripsi untuk foto 6",
  },
];

export default function PhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter();
  const id = parseInt(params.id);
  const photo = photos.find((p) => p.id === id);

  if (!photo) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={() => router.back()}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[50vh]">
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            className="object-contain"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{photo.title}</h2>
          <p className="text-gray-700">{photo.description}</p>
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => router.back()}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              Tutup
            </button>
            <a
              href={`/gallery/photos/${id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Lihat Halaman Penuh
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
