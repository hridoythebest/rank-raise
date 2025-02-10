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
              <span className="font-bold">FutureRank</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming digital presence through innovative SEO and marketing solutions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/services/seo" className="text-muted-foreground hover:text-primary">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-muted-foreground hover:text-primary">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/app-store" className="text-muted-foreground hover:text-primary">
                  App Store Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/content" className="text-muted-foreground hover:text-primary">
                  Content Writing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {new Date().getFullYear()} FutureRank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}