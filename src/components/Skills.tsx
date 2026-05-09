export default function Skills() {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: '🧠',
      skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Deep Learning', 'Computer Vision'],
      color: 'ai-model',
    },
    {
      title: 'Geospatial Analysis',
      icon: '🗺️',
      skills: ['QGIS', 'ArcGIS', 'PostGIS', 'Geospatial Data', 'Remote Sensing'],
      color: 'earth-land',
    },
    {
      title: 'Programming',
      icon: '💻',
      skills: ['Python', 'JavaScript/TypeScript', 'SQL', 'R', 'GDAL/OGR'],
      color: 'geoai-primary',
    },
    {
      title: 'Data Science',
      icon: '📊',
      skills: ['Data Visualization', 'Statistical Analysis', 'Big Data', 'ETL Pipelines', 'Cloud Computing'],
      color: 'ai-data',
    },
    {
      title: 'Environmental Science',
      icon: '🌱',
      skills: ['Climate Modeling', 'Biodiversity Analysis', 'Land Use Classification', 'Sustainability'],
      color: 'earth-water',
    },
    {
      title: 'Tools & Frameworks',
      icon: '⚙️',
      skills: ['Google Earth Engine', 'Jupyter', 'Git', 'Docker', 'AWS/GCP'],
      color: 'ai-insight',
    },
  ]

  return (
    <section className="py-20 bg-geoai-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-geoai-primary mb-4">Technical Skills</h2>
          <p className="text-xl text-geoai-neutral max-w-2xl mx-auto">
            A comprehensive toolkit combining AI, geospatial technologies, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-geoai-surface p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4"
              style={{
                borderLeftColor: category.color === 'ai-model' ? '#8b5cf6' :
                                category.color === 'earth-land' ? '#16a34a' :
                                category.color === 'geoai-primary' ? '#1e3a8a' :
                                category.color === 'ai-data' ? '#06b6d4' :
                                category.color === 'earth-water' ? '#0ea5e9' : '#f97316'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-geoai-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-geoai-primary/10 text-geoai-primary rounded-full text-sm font-medium hover:bg-geoai-primary hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 bg-geoai-surface p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-geoai-primary mb-8">Proficiency Levels</h3>
          <div className="space-y-6">
            {[
              { name: 'Python & Data Science', level: 95 },
              { name: 'Geospatial Technologies', level: 90 },
              { name: 'Machine Learning & AI', level: 85 },
              { name: 'Full-Stack Web Development', level: 80 },
              { name: 'Cloud Platforms (AWS/GCP)', level: 85 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-geoai-neutral">{skill.name}</span>
                  <span className="text-geoai-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-geoai-background rounded-full h-2">
                  <div
                    className="bg-geoai-primary rounded-full h-2 transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
