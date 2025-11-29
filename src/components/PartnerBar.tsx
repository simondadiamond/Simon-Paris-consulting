import React from 'react';

const PartnerBar: React.FC = () => {
  const techStack = ['n8n', 'OpenAI', 'Supabase', 'React', 'Airtable', 'Make', 'C# (C-Sharp)'];

  const repeatedTech = Array(6).fill(techStack).flat();

  return (
    <section
      className="py-12"
      style={{ backgroundImage: 'linear-gradient(to bottom left, #ebf3fb, #effbfa 55%, #fff)' }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden w-full">
          <div className="flex w-max animate-scroll space-x-24 items-center">
            {repeatedTech.map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="flex-shrink-0 h-9 w-auto flex items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                title={tech}
              >
                <span className="text-xl font-semibold tracking-wide text-gray-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBar;

