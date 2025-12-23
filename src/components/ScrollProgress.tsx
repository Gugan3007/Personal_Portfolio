import React, { useEffect, useState } from 'react';
import { initLenis } from '../lib/lenis';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const lenis = initLenis();
    const handler = ({ scroll, limit }: any) => {
      const p = limit > 0 ? scroll / limit : 0;
      setProgress(p);
    };
    lenis.on('scroll', handler);
    // set initial progress
    handler({ scroll: window.scrollY || 0, limit: document.documentElement.scrollHeight - window.innerHeight });
    return () => lenis.off('scroll', handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
      <div
        className="h-1 bg-gradient-to-r from-cyan-500 to-teal-500 shadow-lg"
        style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
      />
    </div>
  );
}
