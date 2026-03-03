import Image from "next/image";
import { InstagramOutlined } from "@ant-design/icons";

const instagramPosts = [
  { src: "/images/Instagram Post 1.png", alt: "Thikana dish presentation" },
  {
    src: "/images/Instagram Post 2.png",
    alt: "Chef preparing food at Thikana",
  },
  { src: "/images/Instagram Post 3.png", alt: "Thikana dining atmosphere" },
  { src: "/images/Instagram Post 4.png", alt: "Thikana cutting board" },
  { src: "/images/Instagram Post 5.png", alt: "Thikana cocktails" },
  { src: "/images/Instagram Post 6.png", alt: "Thikana exterior at night" },
];

export default function Instagram() {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-nunito uppercase tracking-widest text-[13px] text-brand-gold">
            Follow Along
          </span>
          <h2 className="font-nunito text-brand-dark mt-1.5 mb-4 font-semibold text-[clamp(28px,3vw,44px)]">
            Follow Our Journey
          </h2>
          <div className="w-10 h-0.75 bg-brand-gold mx-auto mb-4" />
          <p className="font-nunito text-brand-text-light text-sm">
            @Thikana · London
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.src}
              className="relative group cursor-pointer aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute inset-0 group-hover:opacity-100 opacity-0 flex items-center justify-center transition-all duration-300 bg-brand-dark/30">
                <span className="text-3xl text-white">
                  <InstagramOutlined />
                </span>
              </div> */}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-brand-accent text-brand-accent font-nunito text-[11px] tracking-widest py-3.5 px-8 hover:bg-brand-accent hover:text-white transition-colors"
          >
            FOLLOW US ON INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  );
}
