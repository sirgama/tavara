const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


export async function getDestinationById(id) {

  try {
    const entry = await client.getEntry(`${id}`);

    if (entry.sys.contentType.sys.id !== 'travelDestination') {
      throw new Error('Invalid content type');
    }

    const destination = {
      id: entry.sys.id,
      name: entry.fields.name,
      description: entry.fields.description,
      mainImage: entry.fields.destinationMainImage?.fields.file.url,
      images: entry.fields.dimages?.map(image => image.fields.file.url) || [],
    };

    // Fetch associated packages
    if (entry.fields.linker) {
      const packagePromises = entry.fields.linker.map(async (link) => {
        const packageEntry = await client.getEntry(link.sys.id);
        return {
          id: packageEntry.sys.id,
          title: packageEntry.fields.packageTitle,
          description: packageEntry.fields.packageDescription,
          mainImage: packageEntry.fields.packageMainImage?.fields.file.url,
          cost: packageEntry.fields.cost,
          days: packageEntry.fields.days,
          nights: packageEntry.fields.nights,
        };
      });

      destination.packages = await Promise.all(packagePromises);
    }

    return destination;
  } catch (error) {
    console.error('Error fetching destination:', error);
    return null;
  }
}