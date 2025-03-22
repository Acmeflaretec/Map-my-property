"use client";
import cn from "@/utils/cn";
import { useRef, useState, useEffect, useCallback } from "react";

interface MagnifierProps {
  src: string;
  className?: string;
}

const Magnifier: React.FC<MagnifierProps> = ({ src, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [loading, setLoading] = useState(true);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [lastDistance, setLastDistance] = useState(0);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [showHint, setShowHint] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const targetScaleRef = useRef(1);
  const targetPositionRef = useRef({ x: 0, y: 0 });

  // Show hint when image loads
  useEffect(() => {
    setLoading(true);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setLoading(false);
      // Show hint if user hasn't interacted yet
      if (!hasInteracted) {
        setShowHint(true);
      }
    };
  }, [src, hasInteracted]);

  const animate = useCallback(
    (timestamp: number) => {
      if (!previousTimeRef.current) {
        previousTimeRef.current = timestamp;
      }
      const deltaTime = timestamp - previousTimeRef.current;
      const easing = 0.15;

      // Smooth scale animation
      const scaleDiff = targetScaleRef.current - scale;
      if (Math.abs(scaleDiff) > 0.001) {
        setScale((prev) => prev + scaleDiff * easing);
      }

      // Smooth position animation
      const positionDiffX = targetPositionRef.current.x - position.x;
      const positionDiffY = targetPositionRef.current.y - position.y;
      if (Math.abs(positionDiffX) > 0.1 || Math.abs(positionDiffY) > 0.1) {
        setPosition((prev) => ({
          x: prev.x + positionDiffX * easing,
          y: prev.y + positionDiffY * easing,
        }));
      }

      previousTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(animate);
    },
    [scale, position]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);

  const updateTargetScale = useCallback(
    (newScale: number, center?: { x: number; y: number }) => {
      const container = containerRef.current;
      if (!container || !imgRef.current) return;

      targetScaleRef.current = Math.min(Math.max(newScale, 1), 4);

      if (targetScaleRef.current <= 1) {
        targetPositionRef.current = { x: 0, y: 0 };
        return;
      }

      if (center) {
        const rect = container.getBoundingClientRect();
        const mouseX = center.x - rect.left;
        const mouseY = center.y - rect.top;

        const scaleChange = targetScaleRef.current - scale;
        targetPositionRef.current = {
          x: position.x - ((mouseX - rect.width / 2) * scaleChange) / scale,
          y: position.y - ((mouseY - rect.height / 2) * scaleChange) / scale,
        };
      }
    },
    [scale, position]
  );

  const handleInteraction = useCallback(() => {
    setHasInteracted(true);
    setShowHint(false);
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    handleInteraction();
    if (scale > 1) {
      setIsDragging(true);
      setStartPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && scale > 1) {
      const container = containerRef.current;
      const img = imgRef.current;
      if (container && img) {
        const containerRect = container.getBoundingClientRect();
        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;

        const maxX = Math.max(0, (scaledWidth - containerRect.width) / 2);
        const maxY = Math.max(0, (scaledHeight - containerRect.height) / 2);

        const newX = e.clientX - startPosition.x;
        const newY = e.clientY - startPosition.y;

        targetPositionRef.current = {
          x: Math.min(Math.max(newX, -maxX), maxX),
          y: Math.min(Math.max(newY, -maxY), maxY),
        };
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: WheelEvent) => {
    handleInteraction();
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = -e.deltaY;
      const zoomSpeed = 0.008;

      const newScale = scale + delta * zoomSpeed;
      updateTargetScale(newScale, { x: e.clientX, y: e.clientY });
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    handleInteraction();
    if (e.touches.length === 2) {
      const distance = getDistanceBetweenTouches(e.touches[0], e.touches[1]);
      setLastDistance(distance);
    } else if (e.touches.length === 1) {
      setIsDragging(true);
      setStartPosition({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const distance = getDistanceBetweenTouches(e.touches[0], e.touches[1]);
      const deltaScale = (distance - lastDistance) * 0.04; // Significantly increased for touchpad pinch zoom
      setLastDistance(distance);

      const newScale = scale + deltaScale;
      const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      updateTargetScale(newScale, { x: centerX, y: centerY });
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      const container = containerRef.current;
      const img = imgRef.current;
      if (container && img) {
        const containerRect = container.getBoundingClientRect();
        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;

        const maxX = Math.max(0, (scaledWidth - containerRect.width) / 2);
        const maxY = Math.max(0, (scaledHeight - containerRect.height) / 2);

        const newX = e.touches[0].clientX - startPosition.x;
        const newY = e.touches[0].clientY - startPosition.y;

        targetPositionRef.current = {
          x: Math.min(Math.max(newX, -maxX), maxX),
          y: Math.min(Math.max(newY, -maxY), maxY),
        };
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setLastDistance(0);

    if (scale <= 1) {
      updateTargetScale(1);
    }
  };

  const getDistanceBetweenTouches = (touch1: Touch, touch2: Touch) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousedown", handleMouseDown as any);
    container.addEventListener("mousemove", handleMouseMove as any);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart as any);
    container.addEventListener("touchmove", handleTouchMove as any);
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchcancel", handleTouchEnd);
    container.addEventListener("wheel", handleWheel as any, { passive: false });

    return () => {
      container.removeEventListener("mousedown", handleMouseDown as any);
      container.removeEventListener("mousemove", handleMouseMove as any);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart as any);
      container.removeEventListener("touchmove", handleTouchMove as any);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
      container.removeEventListener("wheel", handleWheel as any);
    };
  }, [scale, position, isDragging, lastDistance]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden touch-none select-none cursor-grab active:cursor-grabbing"
      style={{ touchAction: "none" }}
    >
      {loading && (
        <div className="absolute z-20 inset-0 flex items-center justify-center bg-black/70">
          <div className="flex flex-col items-center gap-2">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-purple-500"></div>
            <span className="text-white">Loading image...</span>
          </div>
        </div>
      )}

      {showHint && !loading && (
        <div className="absolute inset-0 z-10 pointer-events-none bg-black/20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/75 text-white px-6 py-4 rounded-xl flex flex-col items-center gap-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 animate-[pinch_2s_ease-in-out_infinite]"
                >
                  <path
                    fill="currentColor"
                    d="M9,11.24V7.5C9,6.12 10.12,5 11.5,5S14,6.12 14,7.5v3.74c1.21-0.81 2-2.18 2-3.74c0-2.49-2.01-4.5-4.5-4.5S7,5.01 7,7.5C7,9.06 7.79,10.43 9,11.24z M18.84,15.87l-4.54-2.26c-0.17-0.07-0.35-0.11-0.54-0.11H13v-6C13,6.67 12.33,6 11.5,6S10,6.67 10,7.5v10.74c-0.61,0.55-2,1.76-2,1.76s-1.05,1.05-2,0C5.05,19.05 6,18 6,18s1.39-1.21 2-1.76V7.5C8,5.57 9.57,4 11.5,4S15,5.57 15,7.5v4.15l4.84,2.42C20.21,14.49 20.21,16.23 18.84,15.87z"
                  />
                </svg>
              </div>
              <span className="text-base font-medium whitespace-nowrap">
                Pinch or scroll to zoom
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 animate-[drag_2s_ease-in-out_infinite]"
                >
                  <path
                    fill="currentColor"
                    d="M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z"
                  />
                </svg>
              </div>
              <span className="text-base font-medium whitespace-nowrap">
                Click and drag to pan
              </span>
            </div>
          </div>
        </div>
      )}

      <div
        className="w-full h-full will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
          transition: isDragging ? "none" : "transform 0.1s ease-out",
        }}
      >
        <img
          ref={imgRef}
          src={currentSrc}
          alt="Zoomable"
          className={cn(`w-full h-full object-contain`, className)}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          draggable={false}
        />
      </div>

      <style jsx global>{`
        @keyframes pinch {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.8);
          }
        }
        @keyframes drag {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Magnifier;
