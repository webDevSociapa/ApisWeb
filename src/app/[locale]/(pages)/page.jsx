import { Suspense } from 'react';

import HomePage from '@/components/common/Pages/HomePage';

import Loading from '../loading';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage initialData={[]} />
    </Suspense>
  );
}
