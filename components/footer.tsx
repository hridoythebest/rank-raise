import Link from "next/link";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container max-w-screen-xl mx-auto py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold">Rank Raise</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming digital presence through innovative SEO and marketing solutions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary">
                  All Services
                </a>
              </li>
              <li>
                <a href="/services/seo" className="text-muted-foreground hover:text-primary">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="/services/social-media" className="text-muted-foreground hover:text-primary">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="/services/app-store" className="text-muted-foreground hover:text-primary">
                  App Store Optimization
                </a>
              </li>
              <li>
                <a href="/services/content" className="text-muted-foreground hover:text-primary">
                  Content Writing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-muted-foreground hover:text-primary">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="/legal/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legal/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {new Date().getFullYear()} Rank Raise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}