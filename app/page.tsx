"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const panoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let viewer: any;

    const init = async () => {
      // @ts-ignore
      const PANOLENS = await import("panolens");

      if (!panoRef.current) return;

      const panorama = new PANOLENS.ImagePanorama("/image1.jpeg");

      viewer = new PANOLENS.Viewer({
        container: panoRef.current,
        autoRotate: true,
        autoRotateSpeed: 0.2,
        controlBar: false,
      });

      viewer.add(panorama);
    };

    const timer = setTimeout(init, 500);

    return () => {
      clearTimeout(timer);
      if (viewer) viewer.dispose();
    };
  }, []);

  // SCROLL FUNCTIONS (UX FLOW)
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-black text-white overflow-x-hidden animate-fadeIn">

      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center text-center px-4">

        <img
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2c5b"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-7xl font-serif">
            PT Jaya Kedhaton
          </h1>

          <p className="mt-4 md:mt-6 text-sm md:text-lg opacity-80">
            Designing Spaces That Inspire Human Experience
          </p>

          <button
            onClick={() => scrollTo("story")}
            className="mt-6 md:mt-8 border px-6 py-2 md:py-3 hover:bg-white hover:text-black transition"
          >
            Explore Our Vision
          </button>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 md:py-32 text-center px-6 scroll-mt-20">
        <h2 className="text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed opacity-90">
          Every space begins with a vision. We transform ideas into meaningful architecture that connects people, environment, and experience.
        </h2>

        <button
          onClick={() => scrollTo("portfolio")}
          className="mt-10 text-sm underline opacity-70 hover:opacity-100"
        >
          See Our Work ↓
        </button>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="px-6 md:px-10 py-20 scroll-mt-20">
        <h2 className="text-center text-2xl md:text-3xl mb-10">
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" className="w-full h-[250px] object-cover"/>
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" className="w-full h-[250px] object-cover"/>
          <img src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc" className="w-full h-[250px] object-cover"/>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => scrollTo("experience")}
            className="text-sm underline opacity-70 hover:opacity-100"
          >
            Experience the Space ↓
          </button>
        </div>
      </section>

      {/* 360 EXPERIENCE */}
      <section id="experience" className="px-6 md:px-10 py-24 scroll-mt-20">
        <h2 className="text-center text-2xl md:text-3xl mb-6">
          Experience Our Space
        </h2>

        <p className="text-center text-sm md:text-base opacity-70 mb-10">
          Explore our architecture in immersive 360° interaction
        </p>

        <div className="flex justify-center">
          <div className="relative w-full md:w-[90%]">

            <div
              ref={panoRef}
              className="w-full h-[350px] md:h-[500px] bg-black rounded-xl overflow-hidden"
            />

            <div className="absolute bottom-4 left-4 bg-black/50 px-4 py-2 rounded-lg text-sm">
              Drag to explore
            </div>

          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => scrollTo("cta")}
            className="text-sm underline opacity-70 hover:opacity-100"
          >
            Start Your Project ↓
          </button>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 text-center scroll-mt-20">
        <h2 className="text-2xl md:text-4xl mb-4">
          Let’s Build Your Future Space
        </h2>

        <p className="opacity-70 mb-6 text-sm md:text-base">
          Collaborate with us to bring your vision to life
        </p>

        <button
          onClick={() => scrollTo("contact")}
          className="border px-6 py-2 hover:bg-white hover:text-black transition"
        >
          Contact Us
        </button>
      </section>

      {/* CONTACT */}
      <section id="contact" className="flex justify-center px-6 pb-20 scroll-mt-20">
        <div className="w-full max-w-md text-center">
          <h2 className="text-xl md:text-2xl mb-6">Get In Touch</h2>

          <p className="mb-4 opacity-80">
            Jl. AW Syahranie No. 36 A,<br />
            Samarinda 75123, Kalimantan Timur
          </p>

          <p className="mb-6">
            corporate@jayakedhaton.co.id
          </p>

          <input className="w-full p-3 mb-3 bg-neutral-900 outline-none" placeholder="Name" />
          <input className="w-full p-3 mb-3 bg-neutral-900 outline-none" placeholder="Email" />
          <textarea className="w-full p-3 mb-3 bg-neutral-900 outline-none" placeholder="Your Project"></textarea>

          <button className="border px-6 py-2">
            Send Message
          </button>
        </div>
      </section>

    </main>
  );
}