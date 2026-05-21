import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLdScript } from "@/features/seo/json-ld-script";
import { findServiceBySlug } from "@/features/services/actions/query";
import { SERVICES } from "@/features/services/constant";
import { ServiceCategoryPageView } from "@/features/services/views/service-category-page-view";
import {
	buildBreadcrumbSchema,
	buildServiceSchema,
	buildWebPageSchema,
	createPageMetadata,
	makeNationalServiceTitle,
} from "@/lib/seo";

type PageProps = {
	params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
	return SERVICES.map((service) => ({
		category: service.slug,
	}));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { category } = await params;
	const service = findServiceBySlug(category);

	if (!service) {
		return {
			title: "Service Not Found",
		};
	}

	const description = `${service.description} We serve businesses in Dubai, Abu Dhabi, Sharjah, and across the UAE.`;
	const pageTitle = makeNationalServiceTitle(service.title);

	return createPageMetadata({
		title: pageTitle,
		description,
		path: `/services/${service.slug}`,
		image: service.image,
		keywords: [
			`${service.title.toLowerCase()} in Dubai`,
			`${service.title.toLowerCase()} in Abu Dhabi`,
			`${service.title.toLowerCase()} UAE`,
		],
	});
}

export default async function ServiceCategoryPage({ params }: PageProps) {
	const { category } = await params;
	const service = findServiceBySlug(category);

	if (!service) {
		notFound();
	}
	const canonicalPath = `/services/${service.slug}`;
	const pageTitle = makeNationalServiceTitle(service.title);
	const webPageSchema = buildWebPageSchema(
		pageTitle,
		`${service.description} We serve businesses in Dubai, Abu Dhabi, Sharjah, and across the UAE.`,
		canonicalPath
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Services", path: "/services" },
		{ name: service.title, path: canonicalPath },
	]);
	const serviceSchema = buildServiceSchema({
		name: service.title,
		description: service.description,
		path: canonicalPath,
		image: service.image,
		serviceType: service.title,
	});

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-service-category-webpage" />
			<JsonLdScript
				data={breadcrumbSchema}
				id="schema-service-category-breadcrumb"
			/>
			<JsonLdScript data={serviceSchema} id="schema-service-category-service" />
			<ServiceCategoryPageView service={service} />
		</>
	);
}
