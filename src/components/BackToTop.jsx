import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`back-to-top ${show ? "show" : ""}`.trim()}
      id="backToTop"
      aria-label="Back to top">
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
}
