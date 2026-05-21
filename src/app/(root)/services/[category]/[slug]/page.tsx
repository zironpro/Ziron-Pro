import type { Metadata } from "next";
import { notFound } from "next/navigation";

import fs from "fs";
import path from "path";

import { siteConfig } from "@/data/site-config";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import { getServiceBySlug } from "@/features/services/actions/query";
import { ServiceDetailPageView } from "@/features/services/views/service-detail-page-view";
import {
	buildBreadcrumbSchema,
	buildServiceSchema,
	buildWebPageSchema,
	createPageMetadata,
	makeNationalServiceTitle,
} from "@/lib/seo";

export async function generateStaticParams() {
	const contentDir = path.join(process.cwd(), "src/content/services");
	const categories = fs.readdirSync(contentDir);

	const params: { category: string; slug: string }[] = [];

	categories.forEach((category) => {
		const files = fs.readdirSync(path.join(contentDir, category));
		files.map((file) => {
			params.push({
				category,
				slug: file.replace(".mdx", ""),
			});
		});
	});

	return params;
}

export async function generateMetadata({
	params,
}: PageProps<"/services/[category]/[slug]">): Promise<Metadata> {
	const { category, slug } = await params;
	const service = getServiceBySlug(category, slug);

	if (!service) {
		return {
			title: "Service Not Found",
		};
	}

	const metaTitle = service.metadata.meta?.title;
	const metaDescription = service.metadata.meta?.description;

	const title = metaTitle ?? makeNationalServiceTitle(service.metadata.title);
	const description =
		(metaDescription ?? service.metadata.description) +
		" Delivered for businesses in Dubai, Abu Dhabi, Sharjah, and across the UAE.";
	const canonicalPath = `/services/${category}/${slug}`;

	return createPageMetadata({
		title,
		description,
		path: canonicalPath,
		image: service.metadata.image,
		keywords: [
			`${service.metadata.title.toLowerCase()} in Abu Dhabi`,
			`${service.metadata.title.toLowerCase()} in Dubai`,
			`${service.metadata.title.toLowerCase()} UAE`,
			...siteConfig.keywords,
		],
	});
}

export default async function ServicePage({
	params,
}: PageProps<"/services/[category]/[slug]">) {
	const { category, slug } = await params;
	const service = getServiceBySlug(category, slug);

	if (!service) return notFound();
	const canonicalPath = `/services/${category}/${slug}`;
	const pageTitle =
		service.metadata.meta?.title ??
		makeNationalServiceTitle(service.metadata.title);
	const pageDescription = `${service.metadata.description} Delivered for businesses in Dubai, Abu Dhabi, Sharjah, and across the UAE.`;
	const webPageSchema = buildWebPageSchema(
		pageTitle,
		pageDescription,
		canonicalPath
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Services", path: "/services" },
		{ name: category, path: `/services/${category}` },
		{ name: service.metadata.title, path: canonicalPath },
	]);
	const serviceSchema = buildServiceSchema({
		name: service.metadata.title,
		description: service.metadata.description,
		path: canonicalPath,
		image: service.metadata.image,
		serviceType: service.metadata.category,
	});

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-service-detail-webpage" />
			<JsonLdScript
				data={breadcrumbSchema}
				id="schema-service-detail-breadcrumb"
			/>
			<JsonLdScript data={serviceSchema} id="schema-service-detail-service" />
			<ServiceDetailPageView service={service} />
		</>
	);
}
