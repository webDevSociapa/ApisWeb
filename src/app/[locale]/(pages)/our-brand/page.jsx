import { Suspense } from 'react';

import OurBrand from '@/components/common/Pages/OurBrand';

import Loading from '../../loading';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <OurBrand initialData={[]} />
    </Suspense>
  );
}
