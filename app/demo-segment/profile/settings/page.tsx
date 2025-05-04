export default function ProfileSettingsPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Halaman Profile Settings</h2>
      <p className="mb-4">
        Ini adalah halaman pengaturan profile. Perhatikan bahwa nilai{" "}
        <code>useSelectedLayoutSegments()</code> sekarang mengembalikan array{" "}
        <code>[&apos;profile&apos;, &apos;settings&apos;]</code>.
      </p>
      <div className="bg-green-100 p-4 rounded-md">
        <h3 className="font-bold mb-2">
          Perbedaan dengan useSelectedLayoutSegment:
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <code>useSelectedLayoutSegment()</code> hanya mengembalikan{" "}
            <code>profile</code> karena itu adalah segment pertama.
          </li>
          <li>
            <code>useSelectedLayoutSegments()</code> mengembalikan array{" "}
            <code>[&apos;profile&apos;, &apos;settings&apos;]</code> yang berisi
            semua segment.
          </li>
        </ul>
      </div>
    </div>
  );
}
