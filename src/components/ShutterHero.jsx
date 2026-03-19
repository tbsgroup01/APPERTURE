import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Shutter.css";

import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ShutterHero = () => {
  const component = useRef();
  const lineRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const blades = gsap.utils.toArray(".shutter-blade");

      blades.forEach((blade) => {
        const r = getComputedStyle(blade).getPropertyValue("--r");
        gsap.set(blade, { rotation: r });
      });

      // ✅ Mobile fix only
      const getDistance = () => {
        if (window.innerWidth < 640) return 140;
        return 600;
      };

      const heroTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=150%",
          scrub: 1.5,
          pin: true,
        },
      });

      heroTL
        .to(
          lineRef.current,
          {
            scaleY: 1,
            duration: 2,
            ease: "none",
          },
          0,
        )
        .to(
          blades,
          {
            rotation: "+=120",
            x: (i) => Math.cos(((i * 60 - 30) * Math.PI) / 180) * getDistance(),
            y: (i) => Math.sin(((i * 60 - 30) * Math.PI) / 180) * getDistance(),
            opacity: 0,
            stagger: 0.05,
            ease: "power2.inOut",
          },
          0,
        )
        .to(
          ".logo-reveal",
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1,
          },
          "-=1",
        );

      gsap
        .timeline()
        .to(".transition-col", {
          yPercent: -100,
          duration: 1,
          stagger: 0.1,
          ease: "expo.inOut",
        })
        .from(
          ".hero-content",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className=" text-white overflow-x-hidden">
      {/* Loading Overlay */}
      <div className="fixed inset-0 flex z-[100] pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="transition-col flex-1 bg-[#0b0b0f] border-r border-[#46B0D5]/10"
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero-section overflow-hidden relative min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-around px-6 md:px-10 gap-12 lg:gap-0">
        {/* Shutter */}
        <div className="relative z-10 flex justify-center items-center">
          <div className="shutter-container w-[180px] sm:w-[280px] md:w-[420px]">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`shutter-blade b${i}`} />
            ))}

            <div className="logo-reveal absolute inset-0 flex items-center justify-center opacity-0 scale-50 blur-lg z-0">
              <img
                src={logo}
                alt="Logo"
                className="w-20 sm:w-28 md:w-40 h-auto"
              />
            </div>
          </div>
        </div>

        <div className="hero-content content-box relative z-10 lg:pl-20 flex flex-col items-center lg:items-start text-center lg:text-left group cursor-default">
          {/* The Scroll Line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute left-0 top-0 w-[6px] bg-[#48B0C8] origin-top scale-y-0 transition-colors duration-500 group-hover:bg-[#46B0D5]"
            style={{ height: "100%" }}
          />

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none uppercase tracking-tighter transition-all duration-700">
            <span className="block text-white mb-1">CINEMATIC</span>

            {/* REVOLUTION: Left-to-Right Fill Effect */}
            <span
              className="shutter-wipe-text block bg-gradient-to-r from-[#46B0D5] from-50% to-white/20 to-50% bg-[length:200%_100%] bg-[100%_0%] bg-clip-text text-transparent transition-all duration-1000 ease-in-out group-hover:bg-[0%_0%]"
              style={{ WebkitBackgroundClip: "text" }}
            >
              REVOLUTION
            </span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-md text-sm sm:text-lg leading-relaxed px-4 lg:px-0 opacity-80 group-hover:text-gray-200 transition-colors duration-500">
            Experience the art of digital focus. We blend premium engineering
            with high-fidelity visuals to redefine your perspective.
          </p>

          <Link
            to="/contact"
            className="glass-btn btn mt-10 inline-flex items-center justify-center"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ShutterHero;
