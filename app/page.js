
import Link from "next/link";
import {getReview} from "../lib/api";
import TestimonialCarousel from "../components/TestimonialCarousel";
import FeaturedRooms from "../components/FeaturedRooms";
import Services from '../components/Services';
import Hero from "../components/Hero";


export default async function HomePage() {
  const review = await getReview(); // auto cached in App Router
  return (
    <main className="bg-gray-50">
      <Hero />

      <section className="bg-white py-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Services
          </h2>
        <Services />
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Rooms
        </h2>
        <FeaturedRooms />
      </section>

      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Guests Say
        </h2>

        <TestimonialCarousel items={review} />
        {/* <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6"> */}
      </section>

      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready for your next vacation?
        </h2>

        <Link
          href="/rooms"
          className="bg-white text-black px-6 py-3 rounded font-semibold"
        >
          Book Now
        </Link>
      </section>

    </main>
  );
}