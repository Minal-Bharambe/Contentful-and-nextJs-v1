export default function RoomFeatures({ highlight }) {
    if (!highlight?.length) return null;
  
    return (
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <ul className="grid md:grid-cols-3 gap-4">
          {highlight.map((item, i) => (
            <li
              key={i}
              className="bg-white shadow p-3 rounded text-center"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  }