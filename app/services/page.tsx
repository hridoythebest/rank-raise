export default function ServicesPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Our Digital Marketing Services
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Comprehensive digital solutions tailored to elevate your online presence and drive measurable results.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "SEO Optimization",
            description: "Boost your search rankings with data-driven strategies, technical optimization, and content enhancement.",
            features: [
              "Keyword Research & Analysis",
              "On-Page SEO Optimization",
              "Technical SEO Audits",
              "Link Building Strategies"
            ]
          },
          {
            title: "Social Media Marketing",
            description: "Build brand awareness and engage your audience across all major social platforms.",
            features: [
              "Content Strategy & Creation",
              "Community Management",
              "Paid Social Campaigns",
              "Performance Analytics"
            ]
          },
          {
            title: "App Store Optimization",
            description: "Maximize your app's visibility and downloads with expert ASO strategies.",
            features: [
              "Keyword Optimization",
              "Conversion Rate Optimization",
              "A/B Testing",
              "Competitor Analysis"
            ]
          },
          {
            title: "Video SEO",
            description: "Optimize your video content for better reach and engagement across platforms.",
            features: [
              "Video Keyword Research",
              "Thumbnail Optimization",
              "Video Content Strategy",
              "Analytics & Reporting"
            ]
          },
          {
            title: "Content Writing",
            description: "Create engaging, SEO-optimized content that resonates with your target audience.",
            features: [
              "Blog Posts & Articles",
              "Website Copy",
              "Product Descriptions",
              "Email Newsletters"
            ]
          },
          {
            title: "Analytics & Reporting",
            description: "Track and analyze your digital performance with comprehensive reporting.",
            features: [
              "Custom Dashboard Setup",
              "Performance Tracking",
              "ROI Analysis",
              "Monthly Reports"
            ]
          }
        ].map((service) => (
          <div
            key={service.title}
            className="group relative overflow-hidden rounded-lg border border-border/40 bg-background p-6 transition-colors hover:border-border"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {service.description}
            </p>
            <ul className="mt-4 space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm">
                  <svg
                    className="mr-2 h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}