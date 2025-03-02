"use client";
import cn from "@/utils/cn";
import { useRef, useState, useEffect } from "react";

interface MagnifierProps {
  src: string;
  zoom?: number;
  className?: string;
  size?: number;
}

const Magnifier: React.FC<MagnifierProps> = ({
  src,
  zoom = 3,
  size = 220,
  className,
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const glassRef = useRef<HTMLDivElement | null>(null);
  const [glassSize] = useState(size);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (glassRef.current) {
      glassRef.current.style.backgroundImage = "";
    }
  }, [src]);

  useEffect(() => {
    if (!imgRef.current || !glassRef.current || loading) return;

    const img = imgRef.current;
    const glass = glassRef.current;

    glass.style.backgroundImage = `url(${src})`;

    const moveMagnifier = (e: MouseEvent | TouchEvent) => {
      if (!imgRef.current || !glassRef.current) return;
      e.preventDefault();

      const { x, y } = getCursorPos(e);
      const imgWidth = img.width;
      const imgHeight = img.height;
      const halfGlass = glassSize / 2;

      const posX = Math.max(Math.min(x - halfGlass, imgWidth - glassSize), 0);
      const posY = Math.max(Math.min(y - halfGlass, imgHeight - glassSize), 0);

      glass.style.left = `${posX}px`;
      glass.style.top = `${posY}px`;

      glass.style.backgroundPosition = `-${x * zoom - halfGlass}px -${
        y * zoom - halfGlass
      }px`;
      glass.style.backgroundSize = `${imgWidth * zoom}px ${imgHeight * zoom}px`;
    };

    const getCursorPos = (e: MouseEvent | TouchEvent) => {
      const rect = img.getBoundingClientRect();
      let x = 0,
        y = 0;

      if ("touches" in e) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }

      return { x, y };
    };

    const showMagnifier = () => !loading && setVisible(true);
    const hideMagnifier = () => setVisible(false);

    img.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("mouseenter", showMagnifier);
    img.addEventListener("mouseleave", hideMagnifier);

    return () => {
      img.removeEventListener("mousemove", moveMagnifier);
      img.removeEventListener("touchmove", moveMagnifier);
      img.removeEventListener("mouseenter", showMagnifier);
      img.removeEventListener("mouseleave", hideMagnifier);
    };
  }, [zoom, glassSize, src, loading]);

  return (
    <div className="relative w-fit h-full mx-auto cursor-zoom-in">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60">
          loading...
        </div>
      )}

      {!loading && (
        <div
          ref={glassRef}
          className={`absolute border-2 border-black bg-white rounded-full pointer-events-none cursor-zoom-in ${
            visible ? "block" : "hidden"
          }`}
          style={{
            width: `${glassSize}px`,
            height: `${glassSize}px`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "absolute",
            transform: "translate(0%, -0%)",
          }}
        />
      )}

      <img
        ref={imgRef}
        src={src}
        alt="Magnified"
        className={cn(`w-full h-full object-contain`, className)}
        onLoad={() => {
          setLoading(false);
          if (glassRef.current) {
            glassRef.current.style.backgroundImage = `url(${src})`;
          }
        }}
        onError={() => setLoading(false)}
      />
    </div>
  );
};

export default Magnifier;
