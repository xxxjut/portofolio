import React from 'react';
import StarLoader from '@/components/star-loader';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <StarLoader />
    </div>
  );
}
