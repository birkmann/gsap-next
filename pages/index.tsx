/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import AnimatedBox from "../components/AnimatedBox";
import styles from "../styles/Home.module.css";

import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Loader from "../components/Loader";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
          }}
        />
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
          style={{
            width: "100%",
          }}
        />
        <AnimatedBox />

        <Loader />
        <br />
        <br />
        <br />
        <a href="/layout">Layout</a>
      </main>
    </div>
  );
};

export default Home;
