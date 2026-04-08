import { getRooms } from "../lib/api";
import Image from "next/image";
import Link from "next/link";

async function FeaturedRooms() {
    const rooms = await getRooms(); // auto cached in App Router
  return (
    <> 
    <div className="flex flex-wrap gap-6">
    {rooms.map(room => {
      const { title, price, thumbnail, pageLink } = room.fields;

      return (
        <div
          key={room.sys.id}
          className = "w-[350px] shadow-lg rounded overflow-hidden"
        >
          <Image
            src={"https:" + thumbnail.fields.file.url}
            width={400}
            height={300}
            className="object-cover"
            alt={title}
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-600">{price}</p>
          </div>

          <Link className="bg-black text-white hover:bg-gray-100 hover:text-black px-4 py-4 flex justify-center" href={'/rooms/' + pageLink}>Feature</Link> 
        </div>
      );
    })}
  </div>
  </>
  )
}

export default FeaturedRooms