const AboutSection = () => {
  return (
    <section className="py-32 bg-surface-dark relative">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-gold/70 text-sm font-body tracking-[0.2em] uppercase mb-4 block">
              About Our Mission
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
              Structured Support for
              <span className="text-gradient-gold block">Business Growth</span>
            </h2>
          </div>
          
          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              We provide a comprehensive support system designed specifically for MSMEs and entrepreneurs. 
              Our focus is on delivering finance awareness and seamless facilitation within the 
              Network Global ecosystem.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Through strategic partnerships and dedicated resources, we bridge the gap between 
              small businesses and the financial tools they need to thrive in today's competitive market.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div>
                <span className="text-3xl font-display text-gradient-gold">500+</span>
                <p className="text-sm text-muted-foreground mt-1 font-body">MSMEs Supported</p>
              </div>
              <div>
                <span className="text-3xl font-display text-gradient-gold">₹50Cr</span>
                <p className="text-sm text-muted-foreground mt-1 font-body">Loans Facilitated</p>
              </div>
              <div>
                <span className="text-3xl font-display text-gradient-gold">98%</span>
                <p className="text-sm text-muted-foreground mt-1 font-body">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
