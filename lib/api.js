import { client } from "./contentful";

export async function getRooms() {
  const res = await client.getEntries({
    content_type: "rooms",
    include: 2,
  });

  return res.items;
}

export async function getServices() {
    const res = await client.getEntries({
      content_type: "services",
      include: 2,
    });
  
    return res.items;
}

export async function getReview() {
    const res = await client.getEntries({
      content_type: "testimonial",
      include: 1,
    });
  
    return res.items;
}

export async function getHeroBanner() {
  const res = await client.getEntries({
    content_type: "heroBanner",
    include: 1,
  });

  return res.items;
}