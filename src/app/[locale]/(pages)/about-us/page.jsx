import { Suspense } from 'react';

import AboutUs from '@/components/common/Pages/AboutUs';

import Loading from '../../loading';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <AboutUs initialData={[]} />
    </Suspense>
  );
}
