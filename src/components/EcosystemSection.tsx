import { Building, Smartphone, FileCheck, CreditCard, Landmark } from "lucide-react";

const integrations = [
  { icon: Landmark, label: "Banking Partners" },
  { icon: Smartphone, label: "Fintech Solutions" },
  { icon: FileCheck, label: "PM Schemes" },
  { icon: Building, label: "Certifications" },
  { icon: CreditCard, label: "Payment Systems" }
];

const EcosystemSection = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            {/* Central Circle */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 border border-gold/20 rounded-full animate-pulse-soft" />
              <div className="absolute inset-4 border border-gold/15 rounded-full" />
              <div className="absolute inset-8 border border-gold/10 rounded-full" />
              
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center">
                  <span className="font-display text-xl text-gold text-center leading-tight">
                    Network<br/>Global
                  </span>
                </div>
              </div>
              
              {/* Orbiting Icons */}
              {integrations.map((item, index) => {
                const angle = (index * 72) - 90; // 360/5 = 72 degrees apart
                const radius = 130;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={item.label}
                    className="absolute w-14 h-14 rounded-full bg-surface-medium border border-border/50 flex items-center justify-center group hover:border-gold/30 transition-all duration-300"
                    style={{
                      left: `calc(50% + ${x}px - 28px)`,
                      top: `calc(50% + ${y}px - 28px)`,
                    }}
                  >
                    <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-gold transition-colors" strokeWidth={1.5} />
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right - Content */}
          <div>
            <span className="text-gold/70 text-sm font-body tracking-[0.2em] uppercase mb-4 block">
              Connected Solutions
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-8 leading-tight">
              Ecosystem
              <span className="text-gradient-gold block">Integration</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              Our platform seamlessly connects with India's financial infrastructure, 
              providing unified access to banking services, government schemes, and digital payment solutions.
            </p>
            
            {/* Integration List */}
            <div className="space-y-4">
              {integrations.map((item) => (
                <div 
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-surface-dark border border-border/30 rounded-lg hover:border-gold/20 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-gold/70" strokeWidth={1.5} />
                  <span className="text-foreground font-body">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
