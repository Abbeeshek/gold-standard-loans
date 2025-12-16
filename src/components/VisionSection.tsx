const VisionSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold rounded-full blur-[200px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-gold/70 text-sm font-body tracking-[0.2em] uppercase mb-6 block">
          Our Vision
        </span>
        
        <h2 className="font-display text-4xl md:text-6xl font-medium text-foreground leading-tight mb-8">
          Empowering India's
          <span className="text-gradient-gold block mt-2">Economic Backbone</span>
        </h2>
        
        <p className="text-xl text-muted-foreground font-body leading-relaxed mb-12 max-w-3xl mx-auto">
          We envision a future where every entrepreneur in India has access to the financial 
          resources and knowledge they need to build sustainable, thriving businesses. 
          Together, we're building an ecosystem that fuels innovation, creates employment, 
          and drives economic growth at the grassroots level.
        </p>
        
        {/* Decorative Quote */}
        <div className="relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-gold/10 font-display">"</div>
          <blockquote className="text-2xl md:text-3xl font-display text-foreground italic leading-relaxed">
            Building bridges between ambition and opportunity.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
