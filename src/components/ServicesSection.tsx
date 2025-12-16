import { Building2, Wallet, Users } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "MSME Support",
    description: "Comprehensive assistance for micro, small, and medium enterprises including documentation, registration, and compliance guidance.",
    features: ["Business Registration", "MSME Certification", "Compliance Support"]
  },
  {
    icon: Wallet,
    title: "Loan Facilitation",
    description: "Streamlined access to various loan products through our network of banking and fintech partners with transparent processes.",
    features: ["Working Capital", "Term Loans", "Equipment Finance"]
  },
  {
    icon: Users,
    title: "Entrepreneur Enablement",
    description: "Empowering business owners with knowledge, resources, and connections needed to scale their ventures sustainably.",
    features: ["Financial Literacy", "Mentorship", "Network Access"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-32 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold/70 text-sm font-body tracking-[0.2em] uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground leading-tight">
            Core Services
          </h2>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 bg-card border border-border/50 rounded-lg hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-2xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover Line */}
              <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-gold/50 to-transparent mt-6 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
