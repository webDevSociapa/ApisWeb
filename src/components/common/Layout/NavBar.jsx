'use client';

import { PATH_DATA } from '@/lib/constants';
import { isActive } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

const NavBar = ({ className, linkClass }) => {
  const routerPath = usePathname();
  const locale = routerPath.split('/')[1];

  return (
    <nav className={cn(className, 'h-full gap-x-8 border-8')}>
      {PATH_DATA.map((path) => {
        const tabUrlWithLocale = `/${locale}${path.url}`;

        return (
          <Link
            key={path.url}
            href={tabUrlWithLocale}
            className={cn(
              linkClass
            )}
          >
            <div className='mt-3 flex flex-col items-center '>
              <span className={isActive(routerPath, path)
                ? 'font-bold text-[#3D3D3D] w-max uppercase'
                : 'font-medium text-[#3D3D3D] hoverHeader w-max'}>{path.name}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  className: PropTypes.string,
  linkClass: PropTypes.string,
};
