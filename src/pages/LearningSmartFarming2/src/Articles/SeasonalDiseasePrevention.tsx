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

const SeasonalDiseasePrevention: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8 pb-4 border-b-2 border-plant-green-600">
        <h1 className="text-4xl font-bold text-plant-green-800 mb-2">Seasonal Disease Prevention</h1>
        <p className="text-gray-600">Comprehensive guide to managing plant diseases throughout the seasons</p>
      </header>

      <Section title="Introduction">
        <p className="text-gray-700 leading-relaxed">
          Seasonal diseases pose significant challenges to plant health and agricultural productivity. 
          Understanding and implementing effective prevention strategies is crucial for maintaining healthy crops 
          throughout different seasons. This guide provides comprehensive information on identifying, preventing, 
          and managing seasonal plant diseases.
        </p>
      </Section>

      <Section title="Common Seasonal Diseases">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SubSection
            title="Spring Diseases"
            items={[
              "Powdery Mildew",
              "Early Blight",
              "Downy Mildew",
              "Botrytis Blight",
              "Fire Blight"
            ]}
          />
          <SubSection
            title="Summer Diseases"
            items={[
              "Late Blight",
              "Anthracnose",
              "Bacterial Spot",
              "Fusarium Wilt",
              "Verticillium Wilt"
            ]}
          />
          <SubSection
            title="Fall Diseases"
            items={[
              "Leaf Spot Diseases",
              "Rust Diseases",
              "Sooty Mold",
              "Crown Rot",
              "Root Rot"
            ]}
          />
        </div>
      </Section>

      <Section title="Prevention Strategies">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SubSection
            title="Cultural Practices"
            items={[
              "Crop rotation to break disease cycles",
              "Proper spacing for adequate air circulation",
              "Sanitation and removal of infected plant material",
              "Use of disease-resistant varieties",
              "Proper irrigation management"
            ]}
          />
          <SubSection
            title="Environmental Management"
            items={[
              "Monitoring weather conditions",
              "Maintaining optimal humidity levels",
              "Proper ventilation in greenhouses",
              "Soil moisture management",
              "Temperature control"
            ]}
          />
        </div>
      </Section>

      <Section title="Monitoring and Early Detection">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SubSection
            title="Regular Inspection"
            items={[
              "Daily visual inspection of plants",
              "Monitoring for early symptoms",
              "Keeping detailed records",
              "Using disease forecasting models",
              "Implementing scouting programs"
            ]}
          />
          <SubSection
            title="Diagnostic Tools"
            items={[
              "Magnifying lenses for close inspection",
              "Soil testing kits",
              "Plant tissue analysis",
              "Digital imaging for disease detection",
              "Molecular diagnostic tools"
            ]}
          />
        </div>
      </Section>

      <Section title="Treatment Options">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SubSection
            title="Organic Methods"
            items={[
              "Biological control agents",
              "Plant extracts and essential oils",
              "Compost teas",
              "Beneficial microorganisms",
              "Natural fungicides"
            ]}
          />
          <SubSection
            title="Chemical Control"
            items={[
              "Fungicides (when necessary)",
              "Bactericides",
              "Systemic treatments",
              "Contact protectants",
              "Integrated pest management"
            ]}
          />
        </div>
      </Section>

      <Section title="Season-Specific Recommendations">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SubSection
            title="Spring Preparation"
            items={[
              "Clean up winter debris",
              "Apply preventive treatments",
              "Prepare soil for planting",
              "Inspect and clean tools",
              "Start disease-resistant varieties"
            ]}
          />
          <SubSection
            title="Summer Maintenance"
            items={[
              "Regular monitoring",
              "Proper watering schedule",
              "Mulching to prevent soil splash",
              "Pruning for air circulation",
              "Implementing shade structures"
            ]}
          />
          <SubSection
            title="Fall Cleanup"
            items={[
              "Remove infected plant material",
              "Apply fall treatments",
              "Prepare for winter",
              "Clean and store equipment",
              "Plan for next season"
            ]}
          />
        </div>
      </Section>

      <Section title="Conclusion">
        <p className="text-gray-700 leading-relaxed">
          Effective seasonal disease prevention requires a combination of proactive measures, regular monitoring, 
          and timely interventions. By implementing these strategies, growers can significantly reduce the impact 
          of seasonal diseases on their crops and maintain healthy, productive plants throughout the year.
        </p>
      </Section>

      <section className="p-6 bg-plant-green-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-plant-green-700 mb-4">References</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li className="hover:text-plant-green-700 transition-colors duration-200">Agrios, G.N. (2005). Plant Pathology. Academic Press.</li>
          <li className="hover:text-plant-green-700 transition-colors duration-200">Horsfall, J.G., & Cowling, E.B. (1978). Plant Disease: An Advanced Treatise. Academic Press.</li>
          <li className="hover:text-plant-green-700 transition-colors duration-200">Lucas, J.A. (1998). Plant Pathology and Plant Pathogens. Blackwell Science.</li>
        </ol>
      </section>
    </div>
  );
};

export default SeasonalDiseasePrevention; 