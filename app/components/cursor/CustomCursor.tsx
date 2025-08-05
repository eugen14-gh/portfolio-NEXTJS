'use client'
import React, { useState, useEffect, useRef } from 'react';

const OUTLINE_SIZE = 32;
const DOT_SIZE = 12;
const DOT_SIZE_HOVER = 40;
const OUTLINE_COLOR = '#333';

const CustomCursor: React.FC = () => {
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  const outlineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setDotPos({ x: e.clientX, y: e.clientY });
      target.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', moveCursor);

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Animate the outline to follow the dot with a delay
  useEffect(() => {
    let outlineX = dotPos.x;
    let outlineY = dotPos.y;

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const animate = () => {
      outlineX = lerp(outlineX, target.current.x, 0.10);
      outlineY = lerp(outlineY, target.current.y, 0.10);

      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlineX}px`;
        outlineRef.current.style.top = `${outlineY}px`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* Outline */}
      <div
        ref={outlineRef}
        className="fixed pointer-events-none"
        style={{
          left: `${dotPos.x}px`,
          top: `${dotPos.y}px`,
          width: OUTLINE_SIZE,
          height: OUTLINE_SIZE,
          opacity: hovered ? 0 : 1,
          borderRadius: '50%',
          border: `2px solid ${OUTLINE_COLOR}`,
          transform: 'translate(-50%, -50%)',
          transition: 'border-color 0.2s',
          background: 'transparent',
          zIndex: 9999,
          mixBlendMode: 'difference', // <--- always invert
        }}
      />
      {/* Dot */}
      <div
        className="fixed pointer-events-none"
        style={{
          left: `${dotPos.x}px`,
          top: `${dotPos.y}px`,
          width: hovered ? DOT_SIZE_HOVER : DOT_SIZE,
          height: hovered ? DOT_SIZE_HOVER : DOT_SIZE,
          borderRadius: '50%',
          background: '#fff', // Use white for best inversion
          mixBlendMode: 'difference', // <--- always invert
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s, background 0.2s, mix-blend-mode 0.2s',
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CustomCursor;