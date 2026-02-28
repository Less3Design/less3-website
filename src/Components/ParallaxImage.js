import React, { useRef, useEffect } from "react";

function ParallaxImage({ strength = 15, src, className, style, ...props }) {
  const imgRef = useRef(null);
  const scale = 1 + strength / 300;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;
      if (imgRef.current) {
        imgRef.current.style.transform =
          `scale(${scale}) translate(${-xPercent * strength}px, ${-yPercent * strength}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength, scale]);

  return (
    <img
      ref={imgRef}
      src={src}
      className={className}
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.15s ease-out",
        ...style,
      }}
      {...props}
    />
  );
}

export default ParallaxImage;
