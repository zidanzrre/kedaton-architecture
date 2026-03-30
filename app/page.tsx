"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let viewer: any;

    const init = () => {
      const PANOLENS = (window as any).PANOLENS;

      if (!PANOLENS) {
        console.log("PANOLENS belum load");
        return;
      }

      const container = document.getElementById("pano");
      if (!container) return;

      const panorama = new PANOLENS.ImagePanorama("/image1.jpeg");

      viewer = new PANOLENS.Viewer({
        container,
        autoRotate: true,
        autoRotateSpeed: 0.3,
        controlBar: true,
      });

      viewer.add(panorama);
    };

    const script1 = document.createElement("script");
    script1.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r105/three.min.js";

    const script2 = document.createElement("script");
    script2.src =
      "https://cdn.jsdelivr.net/npm/panolens@0.12.0/build/panolens.min.js";

    script1.onload = () => document.body.appendChild(script2);
    script2.onload = () => setTimeout(init, 300);

    document.body.appendChild(script1);

    return () => {
      if (viewer) viewer.dispose();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center relative px-6">
        <img
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2c5b"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-7xl font-serif">
            PT Jaya Kedhaton
          </h1>

          <p className="mt-4 opacity-80">
            Designing Spaces That Inspire Human Experience
          </p>

          <button
            onClick={() => scrollTo("story")}
            className="mt-6 border px-6 py-2 hover:bg-white hover:text-black transition"
          >
            Explore Our Vision
          </button>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 text-center px-6">
        <h2 className="text-xl md:text-3xl max-w-3xl mx-auto">
          Every space begins with a vision. We transform ideas into meaningful architecture.
        </h2>
      </section>

      {/* PORTFOLIO */}
      <section className="px-6 py-16">
        <h2 className="text-center text-2xl mb-10">Selected Works</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" className="w-full h-[250px] object-cover"/>
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" className="w-full h-[250px] object-cover"/>
          <img src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc" className="w-full h-[250px] object-cover"/>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => scrollTo("experience")}
            className="underline"
          >
            Experience the Space ↓
          </button>
        </div>
      </section>

      {/* 360 SECTION */}
      <section id="experience" className="py-24 px-6 text-center">
        <h2 className="text-3xl mb-4">Experience Our Space</h2>

        <p className="opacity-70 mb-10">
          Explore our architecture in immersive 360° interaction
        </p>

        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <div
              id="pano"
              className="w-full h-[400px] md:h-[500px] bg-black rounded-xl"
            />
          </div>
        </div>

        <p className="mt-4 text-sm opacity-70">
          Drag to explore
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl mb-4">Let’s Build Your Future Space</h2>

        <button className="border px-6 py-2 hover:bg-white hover:text-black transition">
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