
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Stay updated with our latest products, exclusive offers and design inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="focus:border-accent" 
            />
            <Button>
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-border">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="space-y-6">
              <Link to="/" className="text-2xl font-semibold tracking-tight">
                Minima
              </Link>
              <p className="text-muted-foreground">
                Premium minimalist products designed for modern living.
              </p>
              <div className="flex space-x-4">
                <SocialLink icon={<Facebook size={18} />} href="#" label="Facebook" />
                <SocialLink icon={<Twitter size={18} />} href="#" label="Twitter" />
                <SocialLink icon={<Instagram size={18} />} href="#" label="Instagram" />
                <SocialLink icon={<Linkedin size={18} />} href="#" label="LinkedIn" />
              </div>
            </div>

            {/* Shop Column */}
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-3">
                <FooterLink href="/shop" label="All Products" />
                <FooterLink href="/shop?category=Audio" label="Audio" />
                <FooterLink href="/shop?category=Computers" label="Computers" />
                <FooterLink href="/shop?category=Accessories" label="Accessories" />
                <FooterLink href="/shop?category=Wearables" label="Wearables" />
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <FooterLink href="/about" label="About Us" />
                <FooterLink href="/contact" label="Contact" />
                <FooterLink href="/careers" label="Careers" />
                <FooterLink href="/press" label="Press" />
                <FooterLink href="/sustainability" label="Sustainability" />
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <FooterLink href="/help" label="Help Center" />
                <FooterLink href="/shipping" label="Shipping Info" />
                <FooterLink href="/returns" label="Returns & Exchanges" />
                <FooterLink href="/warranty" label="Warranty" />
                <FooterLink href="/faq" label="FAQ" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-border py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Minima. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <a
    href={href}
    aria-label={label}
    className="h-8 w-8 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-accent hover:text-white transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link
      to={href}
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </Link>
  </li>
);

export default Footer;
