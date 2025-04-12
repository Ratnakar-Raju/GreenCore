
const UnderstandingPlantImmunity = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-8 pb-4 border-b-2 border-green-600">
        <h1 className="text-4xl font-bold text-green-800">Understanding Plant Immunity</h1>
      </header>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Plants, like all living organisms, face constant threats from pathogens such as bacteria, viruses, fungi, and pests. 
          Unlike animals, plants lack a mobile immune system and specialized immune cells. Instead, they have evolved sophisticated 
          defense mechanisms that protect them from these threats. Understanding plant immunity is crucial for developing sustainable 
          agricultural practices and improving crop resilience.
        </p>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Types of Plant Immunity</h2>
        
        <div className="bg-white p-4 mb-4 rounded-md border-l-4 border-green-500">
          <h3 className="text-xl font-medium text-green-600 mb-3">1. Pattern-Triggered Immunity (PTI)</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>First line of defense</li>
            <li>Recognizes conserved microbial patterns (PAMPs - Pathogen-Associated Molecular Patterns)</li>
            <li>Activates basal defense responses</li>
            <li>
              Includes:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Cell wall reinforcement</li>
                <li>Production of antimicrobial compounds</li>
                <li>Reactive oxygen species (ROS) generation</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border-l-4 border-green-500">
          <h3 className="text-xl font-medium text-green-600 mb-3">2. Effector-Triggered Immunity (ETI)</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Second line of defense</li>
            <li>More specific and stronger response</li>
            <li>Recognizes pathogen effectors</li>
            <li>Often leads to programmed cell death (hypersensitive response)</li>
            <li>Provides race-specific resistance</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Key Components of Plant Immune System</h2>
        
        <div className="bg-white p-4 mb-4 rounded-md border-l-4 border-green-500">
          <h3 className="text-xl font-medium text-green-600 mb-3">Physical Barriers</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Cell walls</li>
            <li>Cuticle</li>
            <li>Bark</li>
            <li>Thorns and trichomes</li>
          </ul>
        </div>

        <div className="bg-white p-4 mb-4 rounded-md border-l-4 border-green-500">
          <h3 className="text-xl font-medium text-green-600 mb-3">Chemical Defenses</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Phytoalexins</li>
            <li>Antimicrobial proteins</li>
            <li>Secondary metabolites</li>
            <li>Volatile organic compounds</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border-l-4 border-green-500">
          <h3 className="text-xl font-medium text-green-600 mb-3">Signaling Pathways</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Salicylic acid pathway</li>
            <li>Jasmonic acid pathway</li>
            <li>Ethylene signaling</li>
            <li>Systemic acquired resistance (SAR)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Plant-Pathogen Interactions</h2>
        
        <div className="bg-white p-4 mb-4 rounded-md border-l-4 border-green-500">
          <h3 className="text-xl font-medium text-green-600 mb-3">Recognition Systems</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Receptor-like kinases (RLKs)</li>
            <li>Nucleotide-binding leucine-rich repeat (NLR) proteins</li>
            <li>Pattern recognition receptors (PRRs)</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border-l-4 border-green-500">
          <h3 className="text-xl font-medium text-green-600 mb-3">Defense Responses</h3>
          <div className="mb-4 pl-4 border-l-2 border-green-300">
            <h4 className="text-lg font-medium text-green-500 mb-2">1. Local Response</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Hypersensitive response</li>
              <li>Cell wall modifications</li>
              <li>Antimicrobial compound production</li>
            </ul>
          </div>
          <div className="pl-4 border-l-2 border-green-300">
            <h4 className="text-lg font-medium text-green-500 mb-2">2. Systemic Response</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Systemic acquired resistance</li>
              <li>Induced systemic resistance</li>
              <li>Priming for enhanced defense</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Applications in Agriculture</h2>
        
        <div className="bg-white p-4 mb-4 rounded-md border-l-4 border-green-500">
          <h3 className="text-xl font-medium text-green-600 mb-3">Disease Management</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Breeding for resistance</li>
            <li>Genetic engineering</li>
            <li>Biological control</li>
            <li>Integrated pest management</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md border-l-4 border-green-500">
          <h3 className="text-xl font-medium text-green-600 mb-3">Future Perspectives</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>CRISPR-based resistance</li>
            <li>Microbiome engineering</li>
            <li>Smart farming applications</li>
            <li>Climate-resilient crops</li>
          </ul>
        </div>
      </section>

      <section className="mb-8 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          Understanding plant immunity is essential for developing sustainable agricultural practices and ensuring food security. 
          By leveraging natural defense mechanisms and modern biotechnology, we can create more resilient crops that require fewer 
          chemical inputs while maintaining high yields.
        </p>
      </section>

      <section className="p-6 bg-green-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">References</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Jones, J.D.G., & Dangl, J.L. (2006). The plant immune system. Nature, 444(7117), 323-329.</li>
          <li>Dodds, P.N., & Rathjen, J.P. (2010). Plant immunity: towards an integrated view of plant-pathogen interactions. Nature Reviews Genetics, 11(8), 539-548.</li>
          <li>Zipfel, C. (2014). Plant pattern-recognition receptors. Trends in Immunology, 35(7), 345-351.</li>
        </ol>
      </section>
    </div>
  );
};

export default UnderstandingPlantImmunity; 