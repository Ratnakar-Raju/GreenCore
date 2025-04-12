import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <h2 className="text-2xl font-semibold text-plant-green-700 mb-4">{title}</h2>
    {children}
  </section>
);

interface SubSectionProps {
  title: string;
  items: string[];
  className?: string;
}

const SubSection: React.FC<SubSectionProps> = ({ title, items, className = '' }) => (
  <div className={`bg-white p-4 mb-4 rounded-md border-l-4 border-plant-green-500 hover:border-plant-green-600 transition-colors duration-300 ${className}`}>
    <h3 className="text-xl font-medium text-plant-green-600 mb-3">{title}</h3>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      {items.map((item, index) => (
        <li key={index} className="hover:text-plant-green-700 transition-colors duration-200">{item}</li>
      ))}
    </ul>
  </div>
);

const NaturalDiseaseControl: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8 pb-4 border-b-2 border-plant-green-600">
        <h1 className="text-4xl font-bold text-plant-green-800 mb-2">Natural Disease Control Methods</h1>
        <p className="text-gray-600">Sustainable approaches to managing crop diseases</p>
      </header>

      <Section title="Introduction">
        <p className="text-gray-700 leading-relaxed">
          Natural disease control methods offer sustainable alternatives to chemical treatments, 
          promoting healthy ecosystems while effectively managing plant diseases. These methods 
          focus on prevention, biological control, and enhancing plant immunity through natural means.
        </p>
      </Section>

      <Section title="Biological Control Methods">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SubSection
            title="Beneficial Microorganisms"
            items={[
              "Trichoderma species for fungal control",
              "Bacillus subtilis for bacterial diseases",
              "Mycorrhizal fungi for root health",
              "Pseudomonas fluorescens for soil-borne diseases",
              "Beauveria bassiana for insect vectors"
            ]}
          />
          <SubSection
            title="Predatory Organisms"
            items={[
              "Ladybugs for aphid control",
              "Nematodes for soil pest management",
              "Predatory mites for mite control",
              "Parasitic wasps for caterpillar control",
              "Ground beetles for soil pest control"
            ]}
          />
        </div>
      </Section>

      <Section title="Cultural Practices">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SubSection
            title="Soil Management"
            items={[
              "Compost application for soil health",
              "Cover cropping for disease suppression",
              "Crop rotation to break disease cycles",
              "Organic mulching for moisture control",
              "Biochar application for soil improvement"
            ]}
          />
          <SubSection
            title="Plant Management"
            items={[
              "Proper spacing for air circulation",
              "Pruning for disease prevention",
              "Sanitation practices",
              "Resistant variety selection",
              "Intercropping for disease control"
            ]}
          />
        </div>
      </Section>

      <Section title="Natural Products">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SubSection
            title="Plant Extracts"
            items={[
              "Neem oil for fungal and insect control",
              "Garlic extract for bacterial diseases",
              "Chamomile tea for damping-off",
              "Horsetail extract for fungal prevention",
              "Comfrey tea for plant health"
            ]}
          />
          <SubSection
            title="Mineral-Based Solutions"
            items={[
              "Copper-based fungicides (organic approved)",
              "Sulfur for powdery mildew",
              "Diatomaceous earth for pest control",
              "Kaolin clay for insect protection",
              "Rock dust for plant immunity"
            ]}
          />
        </div>
      </Section>

      <Section title="Ecosystem Management">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SubSection
            title="Habitat Enhancement"
            items={[
              "Planting beneficial insect habitats",
              "Creating biodiversity corridors",
              "Maintaining hedgerows",
              "Installing bird houses",
              "Water feature management"
            ]}
          />
          <SubSection
            title="Environmental Controls"
            items={[
              "Proper irrigation management",
              "Windbreak establishment",
              "Shade management",
              "Microclimate optimization",
              "Water drainage improvement"
            ]}
          />
        </div>
      </Section>

      <Section title="Implementation Strategies">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SubSection
            title="Monitoring and Assessment"
            items={[
              "Regular field scouting",
              "Disease forecasting",
              "Soil health testing",
              "Beneficial organism counts",
              "Weather pattern analysis"
            ]}
          />
          <SubSection
            title="Integrated Approach"
            items={[
              "Combining multiple control methods",
              "Timing of interventions",
              "Record keeping and analysis",
              "Adaptive management",
              "Community knowledge sharing"
            ]}
          />
        </div>
      </Section>

      <Section title="Benefits and Considerations">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SubSection
            title="Advantages"
            items={[
              "Environmental sustainability",
              "Long-term effectiveness",
              "Cost-effectiveness",
              "Improved soil health",
              "Enhanced biodiversity"
            ]}
          />
          <SubSection
            title="Challenges"
            items={[
              "Requires more knowledge",
              "Longer implementation time",
              "Weather dependency",
              "Initial establishment period",
              "Monitoring requirements"
            ]}
          />
        </div>
      </Section>

      <section className="p-6 bg-plant-green-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-plant-green-700 mb-4">References</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li className="hover:text-plant-green-700 transition-colors duration-200">Stirling, G.R. (2014). Biological Control of Plant-Pathogenic Nematodes. CABI.</li>
          <li className="hover:text-plant-green-700 transition-colors duration-200">Palti, J. (1981). Cultural Practices and Infectious Crop Diseases. Springer.</li>
          <li className="hover:text-plant-green-700 transition-colors duration-200">Gurr, G.M., et al. (2017). Habitat Management to Suppress Pest Populations. Annual Review of Entomology.</li>
        </ol>
      </section>
    </div>
  );
};

export default NaturalDiseaseControl; 