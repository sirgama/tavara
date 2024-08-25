const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


export async function getTourById(id) {
  try {
    const entry = await client.getEntry(`${id}`);

    if (entry.sys.contentType.sys.id !== 'tours') {
      throw new Error('Invalid content type');
    }

    // Extract and format the tour data
    const tour = {
      id: entry.sys.id,
      name: entry.fields.tourName,
      description: entry.fields.tourDescription,
      mainImage: entry.fields.tourMainImage?.fields?.file?.url,
      images: entry.fields.tourImages?.map(image => image.fields.file.url) || [],
      cost: entry.fields.tourCost,
      tourGuide: entry.fields.tourGuide,
      days: entry.fields.days,
      included: entry.fields.included,
      excluded: entry.fields.excluded,
      itinerary: entry.fields.itinerary,
    };

    return tour;
  } catch (error) {
    console.error('Error fetching tour:', error);
    return null;
  }
}