import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroImg from "../assets/hero5.png";
import heroImg2 from "../assets/hero3.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef();
  const headline = useRef();
  const centerImg = useRef();
  const sideImg = useRef();
  const card = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {

      // HEADLINE PARALLAX
      gsap.to(headline.current, {
        y: 100,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          scrub: true,
        },
      });

      // CENTER IMAGE SCALE REVEAL
      gsap.fromTo(
        centerImg.current,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: centerImg.current,
            start: "top 80%",
          },
        }
      );

      // SIDE IMAGE PARALLAX
      gsap.to(sideImg.current, {
        y: -80,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          scrub: true,
        },
      });

      // FLOAT CARD ENTRANCE
      gsap.from(card.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card.current,
          start: "top 85%",
        },
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative bg-[#F5F5F5] min-h-[150vh] overflow-hidden px-6 py-16"
    >
      <div className="max-w-7xl mx-auto relative">

        {/* HEADLINE */}
        <h1
          ref={headline}
          className="text-[48px] md:text-[90px] leading-[0.95] font-semibold tracking-tight max-w-4xl mt-6"
        >
          We create bold <br />
          architectural <br />
          experiences
        </h1>

        {/* SIDE IMAGE */}
        <div
          ref={sideImg}
          className="absolute right-0 top-32 w-[260px] md:w-[340px] h-[420px] rounded-[40px] overflow-hidden"
        >
          <img src={heroImg} className="w-full h-full object-cover" />
        </div>

        {/* CENTER IMAGE */}
        <div
          ref={centerImg}
          className="mt-12 w-[80%] md:w-[55%] h-[260px] md:h-[340px] rounded-[30px] overflow-hidden"
        >
          <img src={heroImg2} className="w-full h-full object-cover" />
        </div>

        {/* FLOAT CARD */}
        <div
          ref={card}
          className="absolute right-10 bottom-20 bg-white p-6 rounded-[20px] shadow-xl w-[260px]"
        >
          <p className="text-xs text-gray-500">Since 1998</p>
          <p className="mt-3 text-sm">
            We craft modern structures that define identity and stand the test of time.
          </p>
        </div>

        {/* TEXT */}
        <p className="mt-16 max-w-2xl text-gray-600">
          In today’s world, first impressions matter. We design and build
          structures that communicate strength, elegance, and long-term value.
        </p>

      </div>
    </section>
  );
}