import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-150 md:min-h-175 flex items-center justify-center"
    >
      {/* Background Image */}
      <Image
        src="/images/Hero Background.png"
        alt="Thikana restaurant interior with warm ambient lighting"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-brand-charcoal/55" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl px-6">
        {/* Gold decorative element */}
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-12 h-0.5 bg-brand-gold" />
          <span className="text-brand-gold text-lg">✦</span>
          <span className="block w-12 h-0.5 bg-brand-gold" />
        </div>

        {/* Main Heading */}
        <h1
          className="font-nunito text-white font-semibold mb-5 max-w-3xl leading-[1.15] text-[clamp(36px,5vw,64px)]"
        >
          Modern European Dining
          <br />
          in the Heart of Shoreditch
        </h1>

        {/* Subtitle */}
        <p className="font-nunito font-bold text-lg md:text-xl leading-7 md:leading-9 tracking-[0.2px] text-brand-subtitle mb-8 md:mb-10 max-w-sm md:max-w-xl">
          Seasonal ingredients. Refined flavours. A warm and elegant atmosphere.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Reserve — filled dark green */}
          <Link
            href="#reservation"
            className="inline-flex items-center justify-center bg-brand-accent rounded-full py-4 px-10 text-[13px] font-nunito font-semibold tracking-widest text-white hover:opacity-90 transition-opacity"
          >
            RESERVE A TABLE
          </Link>

          {/* View Menu — outline */}
          <Link
            href="#menu"
            className="inline-flex items-center justify-center rounded-full py-4 px-10 text-[13px] font-nunito font-semibold tracking-widest text-white border border-white/70 hover:bg-white/10 transition-colors"
          >
            VIEW MENU →
          </Link>
        </div>
      </div>
    </section>
  );
}
