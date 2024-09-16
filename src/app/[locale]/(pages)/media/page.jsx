import { Suspense } from 'react';

import Media from '@/components/common/Pages/Media';

import Loading from '../../loading';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Media initialData={[]} />
    </Suspense>
  );
}
