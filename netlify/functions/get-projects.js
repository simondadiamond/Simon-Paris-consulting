import Airtable from 'airtable';

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

export const handler = async () => {
  try {
    const records = await base('Portfolio Projects')
      .select({
        filterByFormula: "NOT({Status} = 'Concept')",
        sort: [{ field: 'Sort Order', direction: 'asc' }],
      })
      .all();

    const projects = records.map((record) => {
      const fields = record.fields || {};
      const heroImageField = Array.isArray(fields['Hero Image']) ? fields['Hero Image'][0] : null;

      return {
        id: record.id,
        title: fields['Project Name'] || '',
        tagline: fields['Short Tagline'] || '',
        slug: fields['Slug'] || '',
        status: fields['Status'] || '',
        techStack: fields['Tech Stack'] || [],
        heroImage: heroImageField?.url ?? null,
      };
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projects),
    };
  } catch (error) {
    console.error('Error fetching projects from Airtable:', error);

    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to fetch projects' }),
    };
  }
};
