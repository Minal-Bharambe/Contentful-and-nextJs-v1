import Image from "next/image";

export default function RoomHero({ data }) {
  const { heroTitle, thumbnail, heroBannerNew } = data;
  const title = heroBannerNew?.fields?.title ?? heroTitle;

  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <Image
        src={"https:" + thumbnail.fields.file.url}
        fill
        className="object-cover"
        alt={title}
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <h1 className="relative text-white text-4xl md:text-6xl font-bold text-center">
        {title}
      </h1>
    </section>
  );
}