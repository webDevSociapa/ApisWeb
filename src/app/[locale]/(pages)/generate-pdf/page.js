'use client'

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function GeneratePDF() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const batchNumber = searchParams.get('batchNumber');

  const handleDownload = () => {
    // Implement PDF download logic here
    console.log('Downloading PDF for batch number:', batchNumber);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Generate PDF for Batch {batchNumber}</h1>
      <div className="space-x-4">
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF
        </button>
        <button
          onClick={handleBack}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
}