"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const navLinks = [
  { label: "HOME", href: "#hero" },
  { label: "MENU", href: "#menu" },
  { label: "ABOUT US", href: "#about" },
  { label: "LOCATION", href: "#location" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`absolute z-50 top-3 md:top-6.75 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] sm:w-[calc(100%-80px)] md:w-[calc(100%-122px)] max-w-7xl border border-white/40 bg-brand-overlay backdrop-blur-[30.7px] [-webkit-backdrop-filter:blur(30.7px)] overflow-hidden ${
        mobileOpen ? "rounded-[30px]" : "rounded-[60px]"
      }`}
    >
      <div className="flex items-center justify-between h-14 md:h-20 px-5 md:px-8 lg:px-20">
        {/* Logo */}
        <Link
          href="#hero"
          className="font-nunito font-bold tracking-[0.15em] text-white text-lg"
        >
          THIKANA
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-nunito text-white/80 hover:text-white transition-colors duration-200 relative group text-[13px] tracking-widest"
            >
              {link.label}
              {/* Underline for Home (active) */}
              {i === 0 && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-brand-gold" />
              )}
            </Link>
          ))}
        </div>

        {/* Reserve CTA */}
        <Link
          href="#reservation"
          className="hidden md:inline-flex items-center justify-center font-nunito tracking-[0.08em] rounded-full py-3.5 px-7 text-[12px] bg-white text-brand-accent transition-colors duration-200 hover:bg-transparent hover:text-white hover:ring-1 hover:ring-white/40"
        >
          RESERVE A TABLE
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4 bg-brand-charcoal/95">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-nunito text-white/80 hover:text-white tracking-wider text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#reservation"
            className="inline-flex items-center justify-center rounded-full text-sm font-nunito tracking-wider py-3 bg-white text-brand-accent border-none"
            onClick={() => setMobileOpen(false)}
          >
            RESERVE A TABLE
          </Link>
        </div>
      )}
    </nav>
  );
}
