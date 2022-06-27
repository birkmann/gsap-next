import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [blue.current, yellow.current],
      { y: 18 },
      { y: -18, yoyo: true, repeat: -1, duration: 0.5, ease: "power2.inOut" }
    );
    gsap.fromTo(
      [red.current, green.current],
      { y: -18 },
      { y: 18, repeat: -1, yoyo: true, duration: 0.5, ease: "power3.inOut" }
    );
  }, []);

  return (
    <svg viewBox="0 0 150 33.2" width="180" height="150">
      <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" />
      <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#de4431" />
      <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#f4b61a" />
      <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#009e52" />
    </svg>
  );
};

export default Loader;
