'use client';
import { useEffect, useRef, useState } from 'react';

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkCoarse = window.matchMedia('(pointer: coarse)').matches;
    setTimeout(() => {
      setIsVisible(!checkCoarse);
    }, 0);

    if (checkCoarse) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.left = `${e.clientX}px`;
      spotlightRef.current.style.top = `${e.clientY}px`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed z-0"
      style={{
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, rgba(108,99,255,0.03) 40%, transparent 70%)',
        transition: 'left 0.12s ease-out, top 0.12s ease-out',
      }}
    />
  );
}
