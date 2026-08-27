import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'default', className = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  // Sizing for the raw SVG
  const heightClass = isLarge ? 'h-9 md:h-11' : isSmall ? 'h-6' : 'h-7 md:h-8';

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center transition-opacity duration-200 hover:opacity-85 ${className}`}
      aria-label="HAS Lifesciences Home"
    >
      <svg 
        id="Layer_2" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1438.63 372.47"
        className={`${heightClass} w-auto text-white fill-current`}
      >
        <g id="Layer_1-2">
          <g>
            {/* Geometric Mark */}
            <g>
              <rect y="11.45" width="116.33" height="116.33" />
              <rect x="232.67" y="244.11" width="116.33" height="116.33" />
              <polygon points="349 11.45 349 127.78 263.22 127.78 232.67 158.34 232.66 158.34 232.66 244.11 116.34 244.11 116.34 360.44 .01 360.44 .01 244.11 116.33 244.11 116.33 127.78 202.11 127.78 232.67 97.22 232.67 11.45 349 11.45" />
            </g>
            {/* HAS Typography */}
            <g>
              <path d="M646.42,360.38v-156.56h-136.07v156.56h-73.02V11.55h73.02v131.34h136.07V11.55h73.55v348.84h-73.55Z" />
              <path d="M1034.65,360.38l-22.07-71.97h-128.71l-24.69,71.97h-77.23L906.46,11.55h84.58l122.93,348.84h-79.33,0ZM947.96,89.83h-.53l-44.65,138.69h88.79l-43.6-138.69h0Z" />
              <path d="M1358.26,114.52c-3.68-35.72-25.22-53.06-69.35-53.06-40.98,0-62.52,14.71-62.52,40.98,0,22.07,15.23,34.67,54.11,44.13,39.4,9.46,77.75,18.91,103.49,30.47,30.47,13.66,54.64,35.2,54.64,84.58,0,76.7-57.79,110.85-139.22,110.85-86.16,0-146.05-38.35-147.62-116.63h70.4c1.05,35.72,31,57.79,77.75,57.79,43.08,0,67.77-18.39,67.77-49.38,0-20.49-10.51-34.67-54.11-44.13-43.08-9.46-70.92-15.76-95.61-26.79-37.3-16.81-58.31-42.03-58.31-86.16,0-62.52,42.55-107.17,127.66-107.17s137.64,47.81,140.27,114.53h-69.35Z" />
            </g>
          </g>
        </g>
      </svg>
    </Link>
  );
}
