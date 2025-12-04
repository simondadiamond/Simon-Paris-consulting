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

      const heroImageField = Array.isArray(fields['Hero Image']) ? fields['Hero Image'] : [];
      const architectureImageField = Array.isArray(fields['Architecture Diagram'])
        ? fields['Architecture Diagram'][0]
        : null;

      const techStackRaw = fields['Tech Stack'];
      const techStackCsv = fields['Tech Stack (CSV)'];
      const techStack = Array.isArray(techStackRaw)
        ? techStackRaw.filter(Boolean)
        : typeof techStackCsv === 'string' && techStackCsv.length > 0
          ? techStackCsv.split(',').map((item) => item.trim()).filter(Boolean)
          : [];

      const rawVideo = fields['Demo Video URL'] || fields['Demo Video (Valid URL)'] || '';
      const demoVideoUrl = (typeof rawVideo === 'string' && rawVideo.startsWith('http')) ? rawVideo : '';

      return {
        id: record.id,
        title: fields['Project Name'] || '',
        tagline: fields['Short Tagline'] || '',
        slug: fields['Slug'] || '',
        status: fields['Status'] || '',
        engineeringChallenge: fields['Engineering Challenge'] || '',
        techStack,
        heroImages: heroImageField.map((image) => image?.url).filter(Boolean),
        heroImage: heroImageField[0]?.url ?? '',
        problem: fields['The Problem'] || '',
        solution: fields['The Solution'] || '',
        demoVideoUrl,
        architectureUrl: architectureImageField?.url ?? '',
        outcomes: fields['Key Outcomes'] || '',
        liveLink: fields['Live Link'] || '',
        githubUrl: fields['GitHub Repo'] || '',
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
