import FeaturedRooms from "../../components/FeaturedRooms";

export default async function RoomsPage() {
    return (
      <>
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Rooms
        </h2>
        <FeaturedRooms />
      </section>
      </>
    )
  }