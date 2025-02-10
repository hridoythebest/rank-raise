import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Globe, Smartphone, Video } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="container relative">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
          <h1 className="max-w-4xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-7xl">
            Next Generation SEO & Digital Marketing
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Transform your digital presence with our cutting-edge SEO, social media, and content
            solutions. Powered by advanced AI and data-driven strategies.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "SEO Optimization",
              description:
                "Boost your search rankings with our data-driven SEO strategies.",
              icon: Globe,
            },
            {
              title: "Social Media",
              description:
                "Engage your audience across all major social platforms.",
              icon: BarChart2,
            },
            {
              title: "App Store Optimization",
              description:
                "Maximize your app's visibility and downloads.",
              icon: Smartphone,
            },
            {
              title: "Video SEO",
              description:
                "Optimize your video content for better reach and engagement.",
              icon: Video,
            },
          ].map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-lg border border-border/40 bg-background p-6 transition-colors hover:border-border"
            >
              <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <div className="mt-4">
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}