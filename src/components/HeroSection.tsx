import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      {/* Subtle Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block text-gold/80 text-sm font-body tracking-[0.3em] uppercase mb-6">
            Network Global Ecosystem
          </span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-8 animate-fade-in-delay-1 tracking-tight leading-tight">
          MSME & Loan
          <span className="block text-gradient-gold">Services</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay-2 font-body font-light leading-relaxed">
          Supporting Small Businesses. Enabling Sustainable Growth.
        </p>
        
        <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group px-8 py-4 bg-gold/10 border border-gold/30 text-foreground font-body text-sm tracking-wider uppercase hover:bg-gold/20 hover:border-gold/50 transition-all duration-300 rounded">
            Explore Services
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="px-8 py-4 text-muted-foreground font-body text-sm tracking-wider uppercase hover:text-foreground transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-px h-16 bg-gradient-to-b from-gold/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
