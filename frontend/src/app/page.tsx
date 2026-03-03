import {
  Navbar,
  Hero,
  EatAndDrink,
  WhyGuests,
  PrivateDining,
  GalleryLocation,
  Instagram,
  Reservation,
  Footer,
} from "@/features";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EatAndDrink />
        <WhyGuests />
        <PrivateDining />
        <GalleryLocation />
        <Instagram />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
