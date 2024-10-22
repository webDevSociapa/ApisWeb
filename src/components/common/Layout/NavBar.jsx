'use client';

import { PATH_DATA } from '@/lib/constants';
import { isActive } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useState } from 'react';
import OurBrand from '../Pages/OurBrand/index';
import Link from 'next/link';

const NavBar = ({ className, linkClass }) => {
  const routerPath = usePathname();
  const router = useRouter();
  const locale = routerPath.split('/')[1];

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    // Do nothing when leaving a menu item
  };

  const handleOurBrandContentMouseEnter = () => {
    setHoveredItem('Our Brand');
  };

  const handleOurBrandContentMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleNavigateToOurBrand = (event) => {    
    event.preventDefault(); // Prevent default navigation
    setHoveredItem('Our Brand'); // Show hover content
  };

  const isOurBrandActive = () => {
    return routerPath.includes('/our-brand');
  };

  const handleOurBrandContentClick = (event) => {
    // Close the hover content
    setHoveredItem(null);
    // Navigate to the clicked product
    // The navigation is handled by the Link component in OurBrand
  };

  return (
    <nav className={cn(className, 'h-full gap-x-8')}>
      {PATH_DATA.map((path) => {
        const tabUrlWithLocale = `/${locale}${path.url}`;

        return (
          <div
            key={path.url}
            onMouseEnter={() => handleMouseEnter(path.name)}
            onMouseLeave={handleMouseLeave}
          >
            {path.name !== 'Our Brand' ? (
              <Link href={tabUrlWithLocale} className={cn(linkClass)}>
                <div className='mt-3 flex flex-col items-center'>
                  <span
                    className={isActive(routerPath, path)
                      ? 'font-bold text-[#3D3D3D] w-max uppercase'
                      : 'font-medium text-[#3D3D3D] hoverHeader w-max'}>
                    {path.name}
                  </span>
                </div>
              </Link>
            ) : (
              <div 
                className="mt-3 flex flex-col items-center cursor-pointer"
                onClick={handleNavigateToOurBrand}
              >
                <span className={cn(
                  "font-medium text-[#3D3D3D] w-max",
                  isOurBrandActive() ? 'font-bold uppercase' : 'hoverHeader'
                )}>
                  {path.name}
                </span>
              </div>
            )}

            {path.name === 'Our Brand' && hoveredItem === 'Our Brand' && (
              <div
                className="absolute top-full left-0 w-full bg-white z-1000"
                onMouseEnter={handleOurBrandContentMouseEnter}
                onMouseLeave={handleOurBrandContentMouseLeave}
              >
                <OurBrand onProductClick={handleOurBrandContentClick} />
                
              </div>
            )}
          </div>
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
