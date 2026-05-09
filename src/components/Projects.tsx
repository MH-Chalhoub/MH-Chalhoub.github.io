export default function Projects() {
  const projects = [
    {
      title: 'Urban Green Space Optimization',
      description: 'ML-powered satellite imagery analysis to optimize urban green spaces for air quality and biodiversity',
      tags: ['Python', 'TensorFlow', 'Google Earth Engine', 'GIS'],
      image: '🌳',
      impact: '25% improvement in identified green space potential',
    },
    {
      title: 'Climate Change Impact Assessment',
      description: 'Predictive models assessing climate change impacts on coastal regions using historical climate data',
      tags: ['Machine Learning', 'Remote Sensing', 'R', 'Statistical Analysis'],
      image: '🌊',
      impact: 'Used by 5+ environmental organizations',
    },
    {
      title: 'Land Use Classification AI',
      description: 'Automated land use classification system using deep learning on aerial imagery',
      tags: ['Deep Learning', 'Computer Vision', 'GDAL', 'PostgreSQL'],
      image: '📍',
      impact: '95% classification accuracy',
    },
    {
      title: 'Biodiversity Monitoring System',
      description: 'Real-time biodiversity monitoring platform integrating species data with geospatial analysis',
      tags: ['React', 'Node.js', 'PostGIS', 'Docker'],
      image: '🦋',
      impact: '500K+ species observations tracked',
    },
    {
      title: 'Smart City Analytics Dashboard',
      description: 'Interactive dashboard for urban planners analyzing city metrics through geospatial lens',
      tags: ['TypeScript', 'React', 'Mapbox', 'Time-Series DB'],
      image: '🏙️',
      impact: 'Deployed in 3 major cities',
    },
    {
      title: 'Disaster Response Planning',
      description: 'AI system for predicting and planning disaster response using geospatial data',
      tags: ['Python', 'Disaster ML', 'GIS', 'AWS'],
      image: '🚨',
      impact: 'Reduced response time by 40%',
    },
  ]

  return (
    <section className="py-20 bg-geoai-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-geoai-primary mb-4">Featured Projects</h2>
          <p className="text-xl text-geoai-neutral max-w-2xl mx-auto">
            Innovative solutions combining AI, geospatial analysis, and environmental impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-geoai-background rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="h-40 bg-gradient-to-br from-geoai-primary to-geoai-accent flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-geoai-primary mb-3">{project.title}</h3>
                <p className="text-geoai-neutral mb-4">{project.description}</p>

                {/* Impact */}
                <div className="bg-geoai-primary/10 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-geoai-primary">💡 {project.impact}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-geoai-accent/20 text-geoai-accent text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <button className="w-full py-2 bg-geoai-primary text-white rounded-lg font-semibold hover:bg-geoai-primary/90 transition-all">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-geoai-primary text-geoai-primary rounded-lg font-semibold hover:bg-geoai-primary hover:text-white transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
