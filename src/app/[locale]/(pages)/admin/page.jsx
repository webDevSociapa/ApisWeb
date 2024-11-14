import { Suspense } from 'react';

import Careers from '@/components/common/Pages/Careers';

import Loading from '../../loading';
import AdminPage from '@/components/common/Pages/Admin';

export default async function AdminPageData() {
  return (
    // <Suspense fallback={<Loading />}>
      <AdminPage  />
    // </Suspense>
  );
}
