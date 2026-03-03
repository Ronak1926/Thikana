import Link from "next/link";
import {
  PhoneOutlined,
  InstagramOutlined,
  FacebookOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const exploreLinks = [
  { label: "Home", href: "#hero" },
  { label: "Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Book a Table", href: "#reservation" },
];

const openingHours = [
  { day: "Mon – Thu", time: "12:00 – 22:30" },
  { day: "Fri – Sat", time: "12:00 – 23:30" },
  { day: "Sunday", time: "12:00 – 21:00" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 pt-12 md:pt-18 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-nunito text-2xl text-brand-white mb-4">
              Thikana
            </h3>
            <div className="w-8 h-0.5 bg-brand-gold mb-4" />
            <p className="font-nunito text-sm text-brand-white/60 leading-relaxed">
              Modern European dining in the heart of London. Seasonal. Refined.
              Memorable.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <span className="text-sm text-white/60">
                <PhoneOutlined />
              </span>
              <span className="font-nunito text-sm text-brand-white/60">
                +44 20 1234 5678
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm text-white/60">
                <EnvironmentOutlined />
              </span>
              <span className="font-nunito text-sm text-brand-white/60">
                123 Example Street, London W1
              </span>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-nunito text-xs tracking-widest text-brand-gold uppercase mb-6">
              INFORMATION
            </h4>
            <div className="space-y-2">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="flex gap-6 font-nunito text-sm text-brand-white/60"
                >
                  <span className="w-20">{item.day}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-nunito text-xs tracking-widest text-brand-gold uppercase mb-6">
              EXPLORE
            </h4>
            <nav className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-nunito text-sm text-brand-white/60 hover:text-brand-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-white/60 hover:text-brand-white transition-colors"
              >
                <span className="text-xl">
                  <InstagramOutlined />
                </span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-brand-white/60 hover:text-brand-white transition-colors"
              >
                <span className="text-xl">
                  <FacebookOutlined />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-nunito text-xs text-brand-white/40">
            © 2025 Restaurant Name. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-nunito text-xs text-brand-white/40 hover:text-brand-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-nunito text-xs text-brand-white/40 hover:text-brand-white/60 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
