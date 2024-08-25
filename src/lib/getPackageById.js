const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


export async function getPackageById(id) {
  try {
    const entry = await client.getEntry(`${id}`);

    if (entry.sys.contentType.sys.id !== 'packages') {
      throw new Error('Invalid content type');
    }

    // Extract and format the tour data
    const tour = {
      id: entry.sys.id,
      name: entry.fields.packageTitle,
      description: entry.fields.packageDescription,
      mainImage: entry.fields.packageMainImage?.fields?.file?.url,
      images: entry.fields.pimages?.map(image => image.fields.file.url) || [],
      cost: entry.fields.cost,
      tourGuide: entry.fields.tourGuide,
      days: entry.fields.days,
      nights: entry.fields.nights,
      included: entry.fields.included,
      excluded: entry.fields.excluded,
      itinerary: entry.fields.itinerary,
    };

    return tour;
  } catch (error) {
    console.error('Error fetching Package:', error);
    return null;
  }
}