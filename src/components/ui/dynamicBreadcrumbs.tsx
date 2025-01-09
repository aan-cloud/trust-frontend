'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import React from 'react';
import { usePathname } from 'next/navigation';

export const DynamicBreadcrumbs = () => {
  const pathname = usePathname();

  // Generate breadcrumb segments dari pathname
  const segments = pathname
    .split('/')
    .filter((segment) => segment !== '')
    .map((segment, index, arr) => {
      const href = '/' + arr.slice(0, index + 1).join('/');
      return { label: capitalize(segment), href };
    });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === segments.length - 1 ? (
                <span aria-current="page">{segment.label}</span>
              ) : (
                <BreadcrumbLink href={segment.href}>
                  {segment.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

// Helper untuk capitalize label breadcrumb
const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);
