import Image from "next/image";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, CardContent } from "@/components/ui/card";

const menuCategories = [
  {
    image: "/images/Cuisine.png",
    badge: "50+ DISHES",
    tag: "CUISINE",
    title: "The Kitchen",
    description:
      "Inspired by Indian culinary heritage and crafted with the finest locally sourced British ingredients.",
    link: "#menu",
  },
  {
    image: "/images/Cocktails.png",
    badge: "CRAFTED DAILY",
    tag: "DRINKS",
    title: "The Bar",
    description:
      "Handcrafted cocktails, curated wines, and a considered selection of spirits for every palate.",
    link: "#menu",
  },
  {
    image: "/images/Wine.png",
    badge: "MADE FRESH",
    tag: "DESSERTS",
    title: "Sweet Endings",
    description:
      "Indulge in our pastry chef's seasonal dessert menu, a delicate close to every meal.",
    link: "#menu",
  },
];

export default function EatAndDrink() {
  return (
    <section id="menu" className="section-padding bg-brand-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-nunito font-semibold text-sm text-brand-gold tracking-[0.84px] block">
            Our Offerings
          </span>
          <h2
            className="font-nunito text-brand-dark mt-2 mb-3 font-semibold text-[clamp(28px,3.5vw,44px)]"
          >
            Eat & Drink
          </h2>
          {/* Gold divider */}
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-5" />
          <p className="font-nunito text-brand-text-light max-w-110 mx-auto text-[15px] leading-relaxed">
            Discover our carefully curated menu featuring seasonal dishes and
            handcrafted cocktails.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuCategories.map((item) => (
            <Card
              key={item.title}
              className="overflow-hidden p-0 rounded-2xl border border-black/6 shadow-[0_4px_24px_0_rgba(28,28,26,0.08)] h-full"
            >
              <div className="relative overflow-hidden h-52 sm:h-64 md:h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center bg-white text-brand-dark font-nunito text-[11px] font-semibold tracking-[0.06em] rounded-full px-3 py-1 shadow-[0_1px_4px_rgba(0,0,0,0.12)]">
                    {item.badge}
                  </span>
                </div>
              </div>
              <CardContent className="px-7 pt-1.5 pb-4 flex flex-col gap-2">
                <span className="font-nunito font-bold text-[11px] text-brand-tag-green tracking-widest uppercase">
                  {item.tag}
                </span>
                <h3 className="font-nunito text-2xl text-brand-dark font-bold m-0">
                  {item.title}
                </h3>
                <p className="font-nunito text-sm text-brand-text-light leading-[1.65] m-0">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="font-nunito text-sm text-brand-dark flex items-center gap-1.5 mt-2 hover:opacity-70 transition-opacity"
                >
                  Explore Menu <span className="text-[12px]"><ArrowRightOutlined /></span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
