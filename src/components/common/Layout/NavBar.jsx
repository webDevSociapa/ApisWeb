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

  const [hovered, setHovered] = useState(false); // State to track hover
  const [hoverContent, setHoverContent] = useState(false); // Track hover on content

  const handleNavigateToOurBrand = () => {
    const ourBrandPath = `/${locale}/our-brand`; // Our Brand page path
    router.push(ourBrandPath); // Navigate to the page when clicked
    // setHovered(false); // Close hover on click
    // setHoverContent(false); // Close hover content on click
  };

  const handleMouseEnter = () => setHovered(true); // Show hover content
  const handleMouseLeave = () => {
    if (!hoverContent) setHovered(false); // Hide only if not hovering on content
  };

  const handleContentEnter = () => setHoverContent(true); // Keep content open when hovering on it
  const handleContentLeave = () => {
    setHoverContent(false); // Stop tracking hover on content
    setHovered(false); // Hide hover when mouse leaves content
  };

  const handleContentClick =()=>{
    setHovered(false);
    setHoverContent(false);
  }
  return (
    <nav className={cn(className, 'h-full gap-x-8')}>
      {PATH_DATA.map((path) => {
        const tabUrlWithLocale = `/${locale}${path.url}`;

        return (
          <div
            key={path.url}
            onMouseEnter={path.name === 'Our Brand' ? handleMouseEnter : undefined}
            onMouseLeave={path.name === 'Our Brand' ? handleMouseLeave : undefined}
            // className="relative"
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
              <div className="mt-3 flex flex-col items-center cursor-pointer">
                <span className="font-medium text-[#3D3D3D] hoverHeader w-max">
                  {path.name}
                </span>
              </div>
            )}

            {/* Conditionally render hover content for Our Brand */}
            {path.name === 'Our Brand' && hovered && (
              <div
                className="absolute top-full left-0 w-full bg-white z-50"
                onMouseEnter={handleContentEnter} // Keep hover active when mouse is on hover content
                onMouseLeave={handleContentLeave} // Hide hover content when mouse leaves both
                // onClick={handleContentClick}
              >
                <OurBrand onClick={handleNavigateToOurBrand} /> {/* Show OurBrand component */}
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
