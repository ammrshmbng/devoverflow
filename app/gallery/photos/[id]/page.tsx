import Image from "next/image";
import Link from "next/link";

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

export default function PhotoPage({ params }: { params: { id: string } }) {
  // Mendapatkan ID dari params tanpa mengakses properti secara langsung
  const photoId = Array.isArray(params) ? params[0]?.id : params?.id;
  const id = photoId ? parseInt(photoId) : 0;

  const photo = photos.find((p) => p.id === id);

  if (!photo) {
    return <div className="container mx-auto py-8">Foto tidak ditemukan</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <Image
            src={photo.src}
            alt={photo.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{photo.title}</h1>
          <p className="text-gray-700 mb-6">{photo.description}</p>
          <Link
            href="/gallery"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Kembali ke Galeri
          </Link>
        </div>
      </div>
    </div>
  );
}
