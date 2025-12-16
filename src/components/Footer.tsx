const Footer = () => {
  return (
    <footer className="py-16 bg-surface-dark border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-display text-2xl text-foreground">
              Network<span className="text-gradient-gold">Global</span>
            </span>
            <p className="text-sm text-muted-foreground mt-2 font-body">
              MSME & Loan Services
            </p>
          </div>
          
          {/* Links */}
          <div className="flex gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
              Contact
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground font-body">
              © 2024 Network Global. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Bottom Accent */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
