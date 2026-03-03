import Image from "next/image";
import {
  EnvironmentOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const galleryImages = [
  {
    src: "/images/Restaurant Interior.png",
    alt: "Thikana restaurant main interior",
  },
  { src: "/images/Table Setting.png", alt: "Elegant table setting" },
  { src: "/images/Atmosphere.png", alt: "Restaurant atmosphere" },
];

const openingHours = [
  { day: "Mon – Thu", time: "12:00 – 22:30" },
  { day: "Fri – Sat", time: "12:00 – 23:30" },
  { day: "Sunday", time: "12:00 – 21:00" },
];

export default function GalleryLocation() {
  return (
    <section id="location" className="bg-brand-cream section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-0 items-start">
          {/* Left: Gallery */}
          <div>
            <div className="relative w-full rounded-2xl overflow-hidden h-48 sm:h-64 md:h-97.5">
              <Image
                src="/images/Restaurant Interior.png"
                alt="Thikana restaurant main interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {galleryImages.map((img) => (
                <div
                  key={img.src}
                  className="relative rounded-lg overflow-hidden h-20 sm:h-28 md:h-34.5"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="pt-8 lg:pl-14 lg:pt-1">
            <span className="font-nunito text-xs text-brand-gold tracking-[0.08em]">
              Find Us
            </span>
            <h2 className="font-nunito text-brand-dark mt-2 mb-5 font-bold text-[clamp(30px,3.2vw,48px)] leading-tight lg:whitespace-nowrap">
              Experience Thikana
            </h2>

            {/* Gold divider */}
            <div className="w-9 h-0.5 bg-brand-gold mb-7" />

            {/* Address details */}
            <div className="flex flex-col gap-3 mb-7">
              <div className="flex items-center gap-3">
                <span className="shrink-0 text-base text-brand-tag-green">
                  <EnvironmentOutlined />
                </span>
                <span className="font-nunito text-sm text-brand-dark">
                  123 Example Street, London W1
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="shrink-0 text-base text-brand-tag-green">
                  <InfoCircleOutlined />
                </span>
                <span className="font-nunito text-sm text-brand-text-light">
                  2 min from Tottenham Court Road
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="shrink-0 text-base text-brand-tag-green">
                  <PhoneOutlined />
                </span>
                <span className="font-nunito text-sm text-brand-dark">
                  +44 20 1234 5678
                </span>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="border-t border-brand-form-border pt-5 mb-7">
              <h3 className="font-nunito uppercase tracking-widest text-[10px] font-bold text-brand-dark mb-3">
                OPENING HOURS
              </h3>
              <div className="flex flex-col gap-1.5">
                {openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between font-nunito text-[13px]"
                  >
                    <span className="text-brand-text-light">{item.day}</span>
                    <span className="text-brand-dark">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[70px] border border-brand-accent text-brand-accent font-nunito text-[11px] tracking-widest py-3.5 px-7.5 hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-colors duration-200"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
