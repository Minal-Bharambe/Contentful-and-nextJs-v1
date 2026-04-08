
import Link from "next/link";
import { getHeroBanner } from "../lib/api";
import Image from "next/image";
async function Hero() {
    const bannner = await getHeroBanner(); // auto cached in App Router
  return (
    <>
        <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src={'https:' + bannner[0].fields.bannner.fields.file.url}
          width={bannner[0].fields.bannner.fields.file.details.image.width} 
          height={bannner[0].fields.bannner.fields.file.details.image.height}
          alt={bannner[0].fields.title}
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            {bannner[0].fields.title}
          </h1>
          <p className="mb-6 text-lg">
            {bannner[0].fields.description}
          </p>

          <Link
            href="/rooms"
            className="bg-white text-black px-6 py-3 rounded font-semibold"
          >
            Explore Rooms
          </Link>
        </div>
      </section>
    </>
  )
}

export default Hero