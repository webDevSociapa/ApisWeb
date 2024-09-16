import { Suspense } from 'react';

import Careers from '@/components/common/Pages/Careers';

import Loading from '../../loading';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Careers initialData={[]} />
    </Suspense>
  );
}
