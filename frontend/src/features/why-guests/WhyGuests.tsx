import Image from "next/image";

const features = [
  {
    image: "/images/Fresh Ingredients.png",
    tag: "FRESHNESS",
    title: "Always Fresh",
    description:
      "Every ingredient arrives daily. Zero frozen produce, zero pre-made sauces — everything at Thikana is cooked entirely from scratch every single morning.",
    stat: "Delivered fresh daily",
  },
  {
    image: "/images/Authentic Spices.png",
    tag: "AUTHENTICITY",
    title: "Authentic Taste",
    description:
      "Every recipe is a faithful recreation of bold regional South Indian flavours — passed down through generations and cooked with the same respect for tradition.",
    stat: "Generations of recipes",
  },
  {
    image: "/images/Expert Chef.png",
    tag: "EXPERTISE",
    title: "Expert Chefs",
    description:
      "Our kitchen team hails from Tamil Nadu, Kerala and Karnataka — bringing genuine deep regional expertise and passion to every plate we serve.",
    stat: "From Chennai & Kerala",
  },
  {
    image: "/images/Craft Drinks.png",
    tag: "BAR CRAFT",
    title: "Craft Drinks Bar",
    description:
      "Our bartenders craft South Indian-inspired cocktails using house-infused spirits, fresh botanicals and traditional flavours — beautifully reimagined for London.",
    stat: "New menu each season",
  },
];

export default function WhyGuests() {
  return (
    <section id="about" className="section-padding bg-brand-warm">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-nunito uppercase tracking-widest text-[13px] text-brand-gold">
            THE THIKANA DIFFERENCE
          </span>
          <h2 className="font-nunito text-brand-dark mt-2 mb-3 font-semibold text-[clamp(26px,3.2vw,42px)]">
            Why Our Guests Keep Coming Back
          </h2>
          <div className="w-10 h-0.75 bg-brand-gold mx-auto mb-5" />
          <p className="font-nunito text-brand-text-light max-w-130 mx-auto text-[15px]">
            Every detail at Thikana is considered, from the spices we grind each
            morning to the way we pour your last drink of the evening.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-[22px] border border-brand-card-border shadow-[0_3.78px_22.56px_0_rgba(0,0,0,0.05)] p-4 md:p-6.5 flex gap-4 md:gap-5.5 items-start hover:shadow-md transition-shadow duration-300"
            >
              {/* Image — tall oval with gold border, wrapper separated so no gap appears */}
              <div className="shrink-0 rounded-[942px] border-[1.88px] border-brand-amber p-1">
                <div className="relative overflow-hidden rounded-[942px] w-20 h-28 md:w-28 md:h-36">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 pt-1 min-w-0">
                <span className="font-nunito font-bold text-[9.4px] tracking-[1.5px] uppercase bg-brand-tag-amber-bg text-brand-amber rounded-[47px] py-[4.7px] px-3.25 inline-block mb-2">
                  {feature.tag}
                </span>
                <h3 className="font-nunito font-bold text-xl text-brand-dark mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="font-nunito text-[13px] text-brand-text-light leading-[1.7] mb-3">
                  {feature.description}
                </p>
                <span className="flex items-center gap-1.5 font-nunito text-[12px] text-brand-accent">
                  <span className="inline-block rounded-full w-1.5 h-1.5 bg-brand-amber" />
                  {feature.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#reservation"
            className="inline-flex items-center justify-center rounded-full border border-brand-dark text-brand-dark font-nunito text-xs tracking-widest py-4 px-9 hover:bg-brand-dark hover:text-white transition-colors duration-200"
          >
            BEGIN YOUR THIKANA EXPERIENCE
          </a>
        </div>
      </div>
    </section>
  );
}
