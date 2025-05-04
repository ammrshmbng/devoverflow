export default function InfoTab() {
  return (
    <div className="mt-6 pt-4 border-t bg-blue-50 p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Info Tab</h3>
      <p>
        Ini adalah tab informasi. Tab segment saat ini adalah:{" "}
        <strong>info</strong>
      </p>
      <p className="mt-2">
        Tab segment diambil menggunakan{" "}
        <code>useSelectedLayoutSegment(&apos;tab&apos;)</code>.
      </p>
    </div>
  );
}
