'use client';

import { useParams } from 'next/navigation';

// For testing: PDF is loaded from public. Change this path when you have the final PDF name/location.
const PDF_URL = '/investors/q-result-31-12-2025.pdf';

export default function QuarterlyResultPage() {
  const params = useParams();
  const date = params?.date ?? '';

  return (
    <div className="space-y-4 p-4 w-[80%] max-w-5xl mx-auto">
      <h1 className="text-xl font-semibold text-gray-800">
        Quarterly Result {date ? `– ${date}` : ''}
      </h1>
      <div className="w-full rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
        <iframe
          src={PDF_URL}
          title="Quarterly Result PDF"
          className="w-full min-h-[calc(100vh-200px)] border-0"
          style={{ height: 'calc(100vh - 200px)' }}
        />
      </div>
    </div>
  );
}
