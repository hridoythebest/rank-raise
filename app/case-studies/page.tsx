export default function CaseStudiesPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Client Success Stories
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Discover how we've helped businesses transform their digital presence and achieve remarkable results.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {[
          {
            title: "E-commerce Revenue Growth",
            client: "TechGear Pro",
            industry: "E-commerce",
            results: [
              "250% increase in organic traffic",
              "185% growth in online sales",
              "45% improvement in conversion rate",
              "Top 3 rankings for 50+ target keywords"
            ],
            description: "Transformed an e-commerce store's digital presence through comprehensive SEO and content strategy.",
            tags: ["SEO", "Content Marketing", "E-commerce"]
          },
          {
            title: "App Store Success Story",
            client: "HealthFit App",
            industry: "Health & Fitness",
            results: [
              "1M+ app downloads in 6 months",
              "Featured in App Store",
              "4.8 star rating average",
              "300% increase in user acquisition"
            ],
            description: "Optimized app store presence and implemented strategic marketing campaigns for a fitness app.",
            tags: ["ASO", "Mobile Marketing", "User Acquisition"]
          },
          {
            title: "B2B Lead Generation",
            client: "ConsultCo Solutions",
            industry: "Professional Services",
            results: [
              "400% increase in qualified leads",
              "65% reduction in cost per lead",
              "89% improvement in lead quality",
              "2.5x increase in conversion rate"
            ],
            description: "Developed and executed a comprehensive B2B digital marketing strategy.",
            tags: ["Lead Generation", "B2B Marketing", "Content Strategy"]
          },
          {
            title: "Social Media Growth",
            client: "FoodieFinds",
            industry: "Food & Beverage",
            results: [
              "1M+ social media followers",
              "500% increase in engagement",
              "200% growth in website traffic",
              "45% increase in online orders"
            ],
            description: "Created and executed a viral social media strategy for a restaurant chain.",
            tags: ["Social Media", "Content Creation", "Brand Growth"]
          }
        ].map((study) => (
          <div
            key={study.title}
            className="group relative overflow-hidden rounded-lg border border-border/40 bg-background p-6 transition-colors hover:border-border"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{study.industry}</p>
                <h3 className="mt-1 text-xl font-semibold">{study.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{study.client}</p>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-muted-foreground">
              {study.description}
            </p>

            <div className="mt-4">
              <h4 className="text-sm font-semibold">Key Results:</h4>
              <ul className="mt-2 space-y-2">
                {study.results.map((result) => (
                  <li key={result} className="flex items-center text-sm">
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
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}