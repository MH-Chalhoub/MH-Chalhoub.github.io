export default function Contact() {
  return (
    <section className="py-20 bg-geoai-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-geoai-secondary max-w-2xl mx-auto">
            Let's discuss how GeoAI can solve your environmental and urban challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-geoai-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📧</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                <p className="text-geoai-secondary hover:text-white cursor-pointer transition-colors">
                  hello@geoai-engineer.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-geoai-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">💼</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">LinkedIn</h3>
                <p className="text-geoai-secondary hover:text-white cursor-pointer transition-colors">
                  linkedin.com/in/geoai-engineer
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-geoai-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">🐙</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">GitHub</h3>
                <p className="text-geoai-secondary hover:text-white cursor-pointer transition-colors">
                  github.com/geoai-engineer
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-geoai-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📍</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Location</h3>
                <p className="text-geoai-secondary">San Francisco, CA, USA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-geoai-surface text-geoai-neutral placeholder-geoai-neutral/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-geoai-accent"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-geoai-surface text-geoai-neutral placeholder-geoai-neutral/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-geoai-accent"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-geoai-surface text-geoai-neutral placeholder-geoai-neutral/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-geoai-accent resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-geoai-accent text-white font-semibold rounded-lg hover:bg-geoai-accent/90 transition-all shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-16 pt-16 border-t border-geoai-primary/30">
          <div className="flex justify-center gap-6 mb-8">
            {[
              { icon: '🐦', label: 'Twitter' },
              { icon: '💬', label: 'Discord' },
              { icon: '🔗', label: 'Blog' },
              { icon: '📰', label: 'Medium' },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 bg-geoai-surface rounded-full flex items-center justify-center text-white hover:bg-geoai-accent transition-all text-lg"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-geoai-primary/30">
            <p className="text-geoai-secondary mb-2">
              © 2024 GeoAI Engineer. All rights reserved.
            </p>
            <p className="text-geoai-secondary/70 text-sm">
              Built with React, TypeScript, Tailwind CSS & 💚 for a sustainable future
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
