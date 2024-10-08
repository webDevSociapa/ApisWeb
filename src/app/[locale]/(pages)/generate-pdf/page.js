'use client'

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function GeneratePDF() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const batchNumber = searchParams.get('batchNumber');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePDFAction = async (action) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkReport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ batch_number: batchNumber }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        if (action === 'view') {
          // Open PDF in a new tab
          window.open(url, '_blank');
        } else if (action === 'download') {
          // Download PDF
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = `batch_${batchNumber}.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }

        // Clean up
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error('Failed to generate PDF');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to process PDF. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Generate PDF for Batch {batchNumber}</h1>
      <div className="space-x-4">
        <button
          onClick={() => handlePDFAction('view')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'View PDF'}
        </button>
        <button
          onClick={() => handlePDFAction('download')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Download PDF'}
        </button>
        <button
          onClick={handleBack}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}