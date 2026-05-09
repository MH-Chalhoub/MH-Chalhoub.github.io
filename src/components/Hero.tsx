export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-geoai-primary via-geoai-background to-geoai-background flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-geoai-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-earth-water opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 relative z-10 text-center">
        <div className="mb-8">
          <div className="inline-block p-4 bg-geoai-primary/10 rounded-full mb-6">
            <span className="text-6xl">🌍🤖</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          GeoAI Engineer
        </h1>

        <p className="text-xl md:text-2xl text-geoai-neutral mb-8 max-w-3xl mx-auto">
          Bridging Geospatial Intelligence and Artificial Intelligence to solve tomorrow's
          environmental and urban challenges today.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-geoai-accent text-white rounded-lg font-semibold hover:bg-geoai-accent/90 transition-all shadow-lg">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-geoai-primary text-geoai-primary rounded-lg font-semibold hover:bg-geoai-primary hover:text-white transition-all">
            Get In Touch
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-geoai-surface/50 backdrop-blur p-6 rounded-lg">
            <div className="text-3xl font-bold text-geoai-primary mb-2">15+</div>
            <p className="text-geoai-neutral">Projects Delivered</p>
          </div>
          <div className="bg-geoai-surface/50 backdrop-blur p-6 rounded-lg">
            <div className="text-3xl font-bold text-earth-land mb-2">5+</div>
            <p className="text-geoai-neutral">Years Experience</p>
          </div>
          <div className="bg-geoai-surface/50 backdrop-blur p-6 rounded-lg">
            <div className="text-3xl font-bold text-ai-model mb-2">20+</div>
            <p className="text-geoai-neutral">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-geoai-neutral text-2xl">↓</div>
      </div>
    </section>
  )
}
