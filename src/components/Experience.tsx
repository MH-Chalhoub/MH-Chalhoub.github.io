export default function Experience() {
  const experiences = [
    {
      title: 'Senior GeoAI Engineer',
      company: 'EarthTech Innovations',
      period: '2022 - Present',
      description: 'Leading AI/ML initiatives for geospatial analysis, mentoring team of 5 engineers',
      achievements: [
        'Developed ML pipeline processing 100K+ satellite images monthly',
        'Reduced model inference time by 60% through optimization',
        'Published 3 peer-reviewed papers on geospatial AI',
      ],
    },
    {
      title: 'GeoAI Engineer',
      company: 'Environmental Analytics Corp',
      period: '2020 - 2022',
      description: 'Built geospatial data pipelines and ML models for climate monitoring',
      achievements: [
        'Created real-time monitoring system for 50 million hectares',
        'Achieved 92% accuracy in land-use classification',
        'Collaborated with international conservation organizations',
      ],
    },
    {
      title: 'Data Scientist',
      company: 'Urban Planning Solutions',
      period: '2018 - 2020',
      description: 'Developed predictive models for urban development and sustainability',
      achievements: [
        'Built forecasting models for 20+ cities',
        'Presented findings to city councils and stakeholders',
        'Increased project efficiency by 35%',
      ],
    },
    {
      title: 'Junior Geospatial Analyst',
      company: 'Global Geomatics Institute',
      period: '2016 - 2018',
      description: 'Analyzed satellite data and created geospatial visualizations',
      achievements: [
        'Processed and analyzed 500+ satellite datasets',
        'Created interactive maps and visualizations',
        'Supported 10+ research projects',
      ],
    },
  ]

  const education = [
    {
      degree: 'M.Sc. Geospatial Information Systems',
      school: 'University of Advanced Technology',
      year: '2016',
    },
    {
      degree: 'B.S. Computer Science with GIS Minor',
      school: 'Institute of Technology',
      year: '2014',
    },
  ]

  return (
    <section className="py-20 bg-geoai-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-geoai-primary mb-4">Experience & Education</h2>
          <p className="text-xl text-geoai-neutral max-w-2xl mx-auto">
            Building expertise at the intersection of technology, geography, and environmental science
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-geoai-primary mb-8">Professional Experience</h3>
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-geoai-primary/30"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-12 h-12 bg-geoai-primary rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-geoai-surface rounded-full"></div>
                  </div>

                  {/* Experience card */}
                  <div className="bg-geoai-surface p-6 rounded-lg hover:shadow-lg transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-2xl font-bold text-geoai-primary">{exp.title}</h4>
                      <span className="text-sm font-semibold text-geoai-accent bg-geoai-accent/10 px-3 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-geoai-secondary font-semibold mb-2">{exp.company}</p>
                    <p className="text-geoai-neutral mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="text-geoai-primary text-lg mt-1">→</span>
                          <p className="text-geoai-neutral">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="lg:col-span-1">
            <div>
              <h3 className="text-2xl font-bold text-geoai-primary mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="bg-geoai-surface p-4 rounded-lg">
                    <h4 className="font-bold text-geoai-primary mb-1">{edu.degree}</h4>
                    <p className="text-geoai-neutral text-sm mb-1">{edu.school}</p>
                    <p className="text-geoai-accent text-xs font-semibold">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-geoai-primary mb-6">Certifications</h3>
              <div className="space-y-3">
                {[
                  'Google Cloud Professional Data Engineer',
                  'AWS Certified Solutions Architect',
                  'Esri Advanced GIS Developer',
                  'TensorFlow Developer Certificate',
                ].map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-geoai-surface rounded-lg">
                    <span className="text-xl">✓</span>
                    <p className="text-geoai-neutral text-sm">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
