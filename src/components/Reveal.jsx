import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal wrapper. Extra <div> add nahi karta — jo tag do (as="div" / "h3" ...)
 * wahi render hota hai, uspar "reveal" aur (screen par aane ke baad) "active" class lagti hai.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} reveal ${visible ? "active" : ""}`.trim()}
      {...rest}>
      {children}
    </Tag>
  );
}
