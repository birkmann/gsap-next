/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { InView } from "react-intersection-observer";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el,
          markers: true,
          start: "-50% center",
          end: "50% center",
          scrub: true,
        },
      }
    );
  }, [isVisible]);

  return (
    <InView
      as="div"
      onChange={(inView) => {
        console.log("Inview:", inView);
        setIsVisible(inView);
      }}
      rootMargin="-300px"
    >
      <div className="flex flex-col items-center justify-center w-full p-8 bg-gray-200 min-h-[500px]">
        <h2 className="mb-8 text-2xl font-bold">
          animation trigger {isVisible ? "true" : "false"}
        </h2>
        <div>
          <img
            src="https://images.unsplash.com/photo-1528493366314-e317cd98dd52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
            ref={imgRef}
            className="opacity-0"
          />
        </div>
      </div>
    </InView>
  );
};

export default Intro;
