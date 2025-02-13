import { notFound } from 'next/navigation';
import { getServiceContent, generateStaticParams } from './utils';
import ServicePageClient from './client';

export { generateStaticParams };

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const content = await getServiceContent(params.slug);

  if (!content) {
    notFound();
  }

  return <ServicePageClient params={params} content={content} />;
}
