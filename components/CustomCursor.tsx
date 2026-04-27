'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const checkCoarse = window.matchMedia('(pointer: coarse)').matches;
    setTimeout(() => {
      setIsVisible(!checkCoarse);
    }, 0);

    if (checkCoarse) return;

    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      if (ringRef.current) {
        // Ring follows with more lag
        setTimeout(() => {
          if (ringRef.current) {
            ringRef.current.style.left = `${e.clientX}px`;
            ringRef.current.style.top = `${e.clientY}px`;
          }
        }, 80);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot — snaps instantly */}
      <div 
        ref={dotRef} 
        className="pointer-events-none fixed z-[9999]" 
        style={{
          width: '6px', 
          height: '6px', 
          background: '#6c63ff',
          borderRadius: '50%', 
          transform: 'translate(-50%,-50%)',
          transition: 'left 0.05s, top 0.05s',
        }} 
      />
      {/* Outer ring — lags behind */}
      <div 
        ref={ringRef} 
        className="pointer-events-none fixed z-[9998]" 
        style={{
          width: isHovering ? '50px' : '30px', 
          height: isHovering ? '50px' : '30px',
          border: '1px solid rgba(108,99,255,0.5)',
          background: isHovering ? 'rgba(108,99,255,0.1)' : 'transparent',
          borderRadius: '50%', 
          transform: 'translate(-50%,-50%)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out, width 0.3s, height 0.3s, background 0.3s',
        }} 
      />
    </>
  );
}
