export default function RoomDetails({ details, info }) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Details
            </h3>
            <p className="text-gray-700">
              {details?.content?.[0]?.content?.[0]?.value}
            </p>
          </div>
  
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              Info
            </h3>
            {info?.split(/\r?\n/).map((line, i) => (
              <p key={i} className="text-gray-700">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }