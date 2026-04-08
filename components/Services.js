import {getServices} from "../lib/api";
import Image from "next/image";

async function Services() {
    const services = await getServices(); // auto cached in App Router
  return (
    <>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 text-center">
          {
            services.map(Service => (
              <div key={Service.sys.id}>
                <div style={{ height: "40px", width: "40px", margin: "0 auto" }}>
                  <Image
                    src={'https:' + Service.fields.icon.fields.file.url}
                    width={Service.fields.icon.fields.file.details.image.width} 
                    height={Service.fields.icon.fields.file.details.image.height}
                    alt={Service.fields.title}
                  />
                </div>
                <div className='content'>
                    <div className='info'>
                        <h6 >{Service.fields.title}</h6>
                        <p >{Service.fields.icon.fields.description}</p>
                    </div>
                </div>
              </div>
            ))
          }
        </div>
    </>
  )
}

export default Services