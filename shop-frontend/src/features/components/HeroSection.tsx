const HeroSection = () => {
  return (
    <section className="hero-section bg-gray-100 py-12 bg-cover bg-center h-200" style={{ backgroundImage: "url('/Hero.png')" } }>
      <div className="heroContent container mx-auto text-left text-white px-4 flex flex-row">
        <div className="w-full md:w-1/2 max-w-xl py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12">
          <span className="inline-block bg-blue-600 text-white text-xs md:text-sm font-semibold px-4 py-1 rounded-full mb-6">
            NEW SEASON 2026
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-black">
            Elevate Your
            <br />
            <span className="text-blue-600">Style</span>
          </h1>

          <p className="text-2xl text-gray-700 leading-relaxed mb-10 max-w-md">
            Discover curated collections designed for modern living. Quality craftsmanship meets contemporary design.
          </p>

          <a
            href="/products"
            className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white font-semibold text-xl px-10 py-4 rounded-xl transition-colors"
          >
            Shop Now
            <span aria-hidden="true" className="text-2xl leading-none">→</span>
          </a>
        </div>
      
      </div>
    </section>
  );
};

export default HeroSection;