import { notFound } from 'next/navigation';
import { getServiceContent, generateStaticParams } from './utils';
import ServicePageClient from './client';
import { Metadata } from 'next';

export { generateStaticParams };

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await getServiceContent(params.slug);
  if (!data) return { title: 'Service Not Found' };

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const serviceData = await getServiceContent(params.slug);

  if (!serviceData) {
    notFound();
  }

  return <ServicePageClient params={params} content={serviceData.content} metadata={serviceData.metadata} />;
}