import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touchQuery = window.matchMedia('(pointer: coarse)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (touchQuery.matches || motionQuery.matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseDown = () => setIsHovering(true);
    const onMouseUp = () => setIsHovering(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const handleElementHover = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleElementHover);

    let animationFrameId;
    const animateTrailer = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18
        };
      });
      animationFrameId = requestAnimationFrame(animateTrailer);
    };

    animationFrameId = requestAnimationFrame(animateTrailer);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleElementHover);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '8px' : '5px',
          height: isHovering ? '8px' : '5px',
        }}
      />
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-out ${
          isHovering
            ? 'scale-150 border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
            : 'border-purple-500/70 bg-purple-500/5 shadow-[0_0_12px_rgba(139,92,246,0.3)]'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: '32px',
          height: '32px',
        }}
      />
    </div>
  );
}
