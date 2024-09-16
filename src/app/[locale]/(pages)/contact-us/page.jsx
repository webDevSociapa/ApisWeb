import { Suspense } from 'react';

import ContactUs from '@/components/common/Pages/ContactUs';

import Loading from '../../loading';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <ContactUs initialData={[]} />
    </Suspense>
  );
}
