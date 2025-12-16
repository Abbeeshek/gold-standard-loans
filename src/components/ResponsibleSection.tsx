import { Shield, Eye, Scale } from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Clear communication of terms, conditions, and processes at every step of the facilitation journey."
  },
  {
    icon: Scale,
    title: "Ethical Facilitation",
    description: "We act as facilitators, not lenders. Our role is to connect you with the right financial partners."
  },
  {
    icon: Shield,
    title: "No False Promises",
    description: "We do not guarantee loan approvals. Final decisions rest with the respective financial institutions."
  }
];

const ResponsibleSection = () => {
  return (
    <section className="py-32 bg-surface-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold/70 text-sm font-body tracking-[0.2em] uppercase mb-4 block">
            Our Commitment
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
            Responsible Approach
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            We believe in building trust through ethical practices and transparent communication.
          </p>
        </div>
        
        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={principle.title}
              className="relative p-8 border-l border-gold/20"
            >
              <principle.icon className="w-10 h-10 text-gold/60 mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-2xl text-foreground mb-4">
                {principle.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Disclaimer */}
        <div className="mt-16 p-6 bg-surface-medium border border-border/30 rounded-lg">
          <p className="text-sm text-muted-foreground font-body text-center">
            <span className="text-gold/70 font-medium">Important:</span> Network Global MSME & Loan Services 
            is a facilitation platform. We do not directly provide loans or financial products. 
            All loan decisions are subject to the policies of respective banking and financial partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleSection;
