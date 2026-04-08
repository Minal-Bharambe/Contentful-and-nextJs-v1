import { client } from "./../../../lib/contentful";
import { unstable_noStore as noStore } from "next/cache";
import RoomHero from "../../../components/room/RoomHero";
import RoomGallery from "../../../components/room/RoomGallery";
import RoomDetails from "../../../components/room/RoomDetails";
import RoomFeatures from "../../../components/room/RoomFeatures";

//Generate static paths (App Router way)
export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: "rooms",
  });

  return res.items.map((item) => ({
    slug: item.fields.pageLink,
  }));
}

//Fetch single room
async function getRoom(slug) {
  noStore(); //disables cache per request
  await new Promise(res => setTimeout(res, 2000)); // added to check loading
  const res = await client.getEntries({
    content_type: "rooms",
    include: 2, //important for references
  });

  const room = res.items.find(
    (item) =>
      item.fields.pageLink?.toLowerCase().trim() ===
      slug?.toLowerCase().trim()
  );

  return room;
}

//Server Component
export default async function RoomDetail({ params }) {
  const {slug} = await params;
  const room = await getRoom(slug);

  if (!room) throw new Error("Test error");

  const data = room.fields;
console.log(room);
  return (
    <main className="bg-gray-50">
      <RoomHero data={data} />
      <RoomGallery pictures={data.pictures} />
      <RoomDetails details={data.details} info={data.info} />
      <RoomFeatures highlight={data.highlight} />
    </main>
  );
}