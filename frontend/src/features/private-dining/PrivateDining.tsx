import Image from "next/image";
import Link from "next/link";
import { PhoneOutlined, StarFilled } from "@ant-design/icons";
import { Card, CardContent } from "@/components/ui/card";

const includedItems = [
  "Exclusive private dining room",
  "Dedicated event host & waitstaff",
  "Bespoke menu consultation",
  "Ambient lighting & music control",
  "Floral and décor arrangements",
  "Complimentary welcome drinks",
];

const menuFeatures = [
  "Authentic South Indian Banqueting Menus",
  "Veg, Vegan & Non-Veg Options Available",
  "Drinks Packages Available on Request",
  "Customisable Menu Selections",
];

export default function PrivateDining() {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-nunito uppercase tracking-widest text-[13px] text-brand-gold">
            PRIVATE DINING & SPECIAL EVENTS
          </span>
          <h2 className="font-nunito text-brand-dark mt-1.5 mb-4 font-semibold text-[clamp(28px,3vw,44px)]">
            Make Your Special Day Truly Unforgettable
          </h2>
          <div className="w-10 h-0.75 bg-brand-gold mx-auto mb-6" />
          <p className="font-nunito text-brand-text-light max-w-140 mx-auto text-[15px]">
            Host weddings, birthdays, and private events in an elegant setting
            with delicious food your guests will love.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Private Dining Hall - Large Image */}
          <div className="md:col-span-5 md:row-span-3 relative overflow-hidden rounded-[32px] min-h-75 md:h-200.25">
            <Image
              src="/images/Private Dining Hall.png"
              alt="Thikana private dining hall"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-dark/80 via-brand-dark/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-7 pb-7 pt-6 text-brand-white">
              <span className="inline-flex items-center rounded-full bg-brand-accent/80 px-4 py-1.5 font-nunito text-[11px] tracking-[0.12em] text-white mb-3">
                OUR PRIVATE DINING HALL
              </span>
              <h3 className="font-nunito font-semibold text-2xl leading-8 mb-2 max-w-97.5">
                A Space That Transforms for Your Occasion
              </h3>
              <p className="font-nunito font-normal text-[13.64px] leading-[24.54px] text-white/80 mb-5 max-w-97.5">
                Fully dressable private dining hall with ambient lighting
                control, dedicated event staff, bespoke South Indian menus, and
                every detail tailored to you.
              </p>
              <div className="flex items-end gap-6">
                <div className="flex flex-col gap-1">
                  <span className="font-nunito font-bold text-2xl leading-none text-white">
                    50
                  </span>
                  <span className="font-nunito text-[10px] tracking-[0.12em] text-white/60 uppercase">
                    MAX GUESTS
                  </span>
                </div>
                <span className="w-px h-[27.27px] bg-white/30" />
                <div className="flex flex-col gap-1">
                  <span className="font-nunito font-bold text-2xl leading-none text-white">
                    7
                  </span>
                  <span className="font-nunito text-[10px] tracking-[0.12em] text-white/60 uppercase">
                    DAYS A WEEK
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="md:col-span-3 flex flex-col gap-[19.48px]">
            {/* Bespoke Décor Image */}
            <div className="relative overflow-hidden rounded-[19.48px] min-h-50 md:h-[214.27px]">
              <Image
                src="/images/Atmosphere.png"
                alt="Bespoke décor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/70 via-brand-dark/30 to-transparent" />
              <div className="absolute left-[17.53px] bottom-[17.53px] flex flex-col gap-[3.9px]">
                <span className="inline-flex items-center self-start rounded-full bg-brand-accent/80 px-3 py-1.5 font-nunito text-[10px] tracking-[0.12em] text-white">
                  BESPOKE DÉCOR
                </span>
                <p className="font-nunito font-semibold text-[13.64px] leading-[13.64px] text-white">
                  Every table styled to your vision.
                </p>
              </div>
            </div>

            {/* Set Menu Pricing */}
            <Card className="md:h-[348.59px] rounded-[19.48px] border border-brand-sand shadow-[0_3.9px_11.69px_0_rgba(0,0,0,0.02)] bg-white">
              <CardContent className="p-[27.27px] h-full flex flex-col">
                <span className="font-nunito uppercase tracking-[0.12em] text-[11px] font-semibold text-neutral-500">
                  SET MENUS FROM
                </span>
                <div className="mt-3 flex items-end">
                  <span className="font-nunito text-[54.54px] leading-[54.54px] text-brand-forest font-extrabold">
                    £35
                  </span>
                  <span className="font-nunito text-lg font-semibold text-neutral-500 ml-1 mb-1.5">
                    pp
                  </span>
                </div>
                <div className="mt-4 mb-4 h-px w-full bg-brand-sand" />
                <ul className="flex flex-col gap-2">
                  {menuFeatures.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 font-nunito text-xs text-brand-dark"
                    >
                      <svg
                        className="mt-0.75 shrink-0"
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4L4.5 7.5L11 1"
                          stroke="var(--color-brand-forest)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Talk to Us */}
            <Card className="md:h-50 rounded-[19.48px] border-0 bg-linear-to-b from-brand-forest to-brand-forest-deep">
              <CardContent className="p-6 h-full flex flex-col gap-2.5">
                <div className="text-xl text-white/80">
                  <PhoneOutlined />
                </div>
                <h4 className="font-nunito text-xl leading-5 font-semibold text-white">
                  Talk to Us Today
                </h4>
                <p className="font-nunito text-xs leading-4 text-white/70 max-w-60">
                  Celebrate at Thikana, reserve our banqueting suite today.
                </p>
                <p className="font-nunito text-sm leading-5 font-semibold text-white">
                  +44 20 7123 4567
                </p>
                <p className="font-nunito text-xs leading-4 text-white/60">
                  events@thikana.london
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-4 flex flex-col gap-[19.48px] md:h-200.25">
            {/* What's Included */}
            <Card className="rounded-[19.48px] border border-brand-sand shadow-[0_3.9px_11.69px_0_rgba(0,0,0,0.02)] bg-white shrink-0">
              <CardContent className="p-[27.27px]">
                <h4 className="font-nunito uppercase tracking-widest text-[11px] font-semibold text-brand-forest mb-4">
                  WHAT&apos;S INCLUDED
                </h4>
                <ul className="list-disc list-outside pl-5 flex flex-col gap-2.5 marker:text-brand-forest">
                  {includedItems.map((item) => (
                    <li
                      key={item}
                      className="font-nunito text-sm text-neutral-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="rounded-[19.48px] border border-brand-sand shadow-[0_3.9px_11.69px_0_rgba(0,0,0,0.02)] bg-white flex-1">
              <CardContent className="p-[27.27px] flex flex-col gap-[13.05px] h-full">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm text-brand-forest">
                      <StarFilled />
                    </span>
                  ))}
                </div>
                <p className="font-nunito text-sm text-neutral-600 leading-[1.7]">
                  &quot;Thikana made our wedding dinner the most magical evening
                  of our lives. Every single detail was perfect.&quot;
                </p>
                <div className="h-px w-full bg-brand-sand mt-3" />
                <div className="flex items-center gap-3 pt-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/images/Chef.png"
                      alt="Priya & Arjun"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-nunito text-[13px] font-semibold text-brand-dark">
                      Priya &amp; Arjun
                    </p>
                    <p className="font-nunito text-xs text-neutral-500">
                      Wedding Dinner · Sept 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Check Availability */}
            <Card className="rounded-[19.48px] border-0 bg-brand-forest shadow-[0_3.9px_11.69px_0_rgba(0,0,0,0.02)] md:min-h-67 shrink-0">
              <CardContent className="p-[27.27px] flex flex-col justify-between gap-3.25 h-full">
                <div>
                  <span className="font-nunito uppercase tracking-widest text-[11px] text-white/60">
                    CHECK AVAILABILITY
                  </span>
                  <h4 className="font-nunito text-xl font-bold text-white mt-3 mb-3 leading-snug">
                    Is Your Date Available?
                  </h4>
                  <p className="font-nunito text-[13px] text-white/70 leading-relaxed">
                    Dates book fast, especially weekends. Check now and secure
                    your celebration.
                  </p>
                </div>
                <Link
                  href="#reservation"
                  className="w-full inline-flex items-center justify-center rounded-full bg-white text-brand-forest border border-white font-nunito font-semibold text-xs tracking-widest py-3.5 px-8 hover:bg-transparent hover:text-white hover:border-white transition-colors"
                >
                  CHECK MY DATES →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
