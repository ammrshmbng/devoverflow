import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    id: 1,
    src: "https://source.unsplash.com/random/300x300?1",
    title: "Foto 1",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/random/300x300?2",
    title: "Foto 2",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/random/300x300?3",
    title: "Foto 3",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/random/300x300?4",
    title: "Foto 4",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/random/300x300?5",
    title: "Foto 5",
  },
  {
    id: 6,
    src: "https://source.unsplash.com/random/300x300?6",
    title: "Foto 6",
  },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Galeri Foto</h1>
      <p className="mb-6">
        Klik pada foto untuk melihat detail (menggunakan intercepting routes)
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/gallery/photos/${photo.id}`}
            className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{photo.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
