import Image from "next/image";

export default function RoomGallery({ pictures }) {
  if (!pictures?.length) return null;

  return (
    <section className="max-w-6xl mx-auto py-10 px-6">
      <div className="flex flex-wrap gap-4 justify-center">
        {pictures.map((img) => (
          <Image
            key={img.sys.id}
            src={"https:" + img.fields.file.url}
            width={300}
            height={200}
            className="object-cover rounded"
            alt="room"
          />
        ))}
      </div>
    </section>
  );
}