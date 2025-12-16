import { Factory, Briefcase, User, Users2 } from "lucide-react";

const audiences = [
  {
    icon: Factory,
    title: "MSMEs",
    description: "Manufacturing, trading, and service enterprises seeking growth capital and support"
  },
  {
    icon: Briefcase,
    title: "Startups",
    description: "Early-stage businesses looking for funding guidance and ecosystem connections"
  },
  {
    icon: User,
    title: "Self-Employed",
    description: "Independent professionals requiring working capital and business expansion finance"
  },
  {
    icon: Users2,
    title: "Network Members",
    description: "Existing ecosystem participants accessing exclusive financial products and services"
  }
];

const AudienceSection = () => {
  return (
    <section className="py-32 bg-surface-medium relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 border border-gold/10 rounded-full" />
      <div className="absolute -right-20 top-1/3 w-60 h-60 border border-gold/10 rounded-full" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold/70 text-sm font-body tracking-[0.2em] uppercase mb-4 block">
            Who Benefits
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
            Who We Support
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Our services are designed for the backbone of the economy — entrepreneurs and 
            small business owners who drive innovation and employment.
          </p>
        </div>
        
        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={audience.title}
              className="group text-center p-8 bg-surface-dark/50 border border-border/30 rounded-lg hover:bg-surface-dark hover:border-gold/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/10 transition-colors">
                <audience.icon className="w-8 h-8 text-gold/70" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
