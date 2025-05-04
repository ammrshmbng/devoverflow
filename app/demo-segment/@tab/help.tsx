export default function HelpTab() {
  return (
    <div className="mt-6 pt-4 border-t bg-yellow-50 p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Help Tab</h3>
      <p>
        Ini adalah tab bantuan. Tab segment saat ini adalah:{" "}
        <strong>help</strong>
      </p>
      <p className="mt-2">
        Tab segment diambil menggunakan{" "}
        <code>useSelectedLayoutSegment(&apos;tab&apos;)</code>.
      </p>
    </div>
  );
}
