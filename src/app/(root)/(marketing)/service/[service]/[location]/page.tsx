import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceLocationPageView } from "@/features/locations/views/service-location-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	formatLocation,
	formatService,
	getServiceLocationContent,
	isLocationSlug,
	isServiceSlug,
	LOCATION_SLUGS,
	SERVICE_SLUGS,
	serviceLocationPath,
} from "@/lib/location-seo";
import {
	buildAreaLocalBusinessSchema,
	buildBreadcrumbSchema,
	buildFaqSchema,
	createPageMetadata,
} from "@/lib/seo";

export function generateStaticParams() {
	return SERVICE_SLUGS.flatMap((service) =>
		LOCATION_SLUGS.map((location) => ({ service, location }))
	);
}

export async function generateMetadata({
	params,
}: PageProps<"/service/[service]/[location]">): Promise<Metadata> {
	const { service, location } = await params;
	if (!isServiceSlug(service) || !isLocationSlug(location))
		return { title: "Page Not Found" };

	const content = getServiceLocationContent(service, location);
	const serviceLabel = formatService(service);
	const locationLabel = formatLocation(location);
	const canonicalPath = serviceLocationPath(service, location);

	return createPageMetadata({
		title:
			content?.frontmatter.title ??
			`${serviceLabel} in ${locationLabel} | ZironPro`,
		description:
			content?.frontmatter.description ??
			`${serviceLabel} solutions delivered for businesses in ${locationLabel}.`,
		path: canonicalPath,
		keywords: content?.frontmatter.keywords ?? [
			`${service} ${location}`,
			`${serviceLabel} UAE`,
		],
		image: content?.frontmatter.ogImage,
	});
}

export default async function ServiceLocationBasedPage({
	params,
}: PageProps<"/service/[service]/[location]">) {
	const { service, location } = await params;
	if (!isServiceSlug(service) || !isLocationSlug(location)) return notFound();

	const content = getServiceLocationContent(service, location);
	const serviceLabel = formatService(service);
	const locationLabel = formatLocation(location);
	const canonicalPath = serviceLocationPath(service, location);

	const breadcrumbItems = [
		{ name: "Home", path: "/" },
		{ name: serviceLabel, path: "/services" },
		{ name: locationLabel, path: canonicalPath },
	];
	const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);
	const localBusinessSchema = buildAreaLocalBusinessSchema(
		locationLabel,
		canonicalPath,
		{ serviceType: content?.frontmatter.serviceType ?? serviceLabel }
	);

	const faqItems = content?.frontmatter.faq;
	const faqSchema =
		faqItems && faqItems.length > 0 ? buildFaqSchema(faqItems) : null;

	return (
		<>
			<JsonLdScript
				data={breadcrumbSchema}
				id="schema-service-location-breadcrumb"
			/>
			<JsonLdScript
				data={localBusinessSchema}
				id="schema-service-location-business"
			/>
			{faqSchema ? (
				<JsonLdScript data={faqSchema} id="schema-service-location-faq" />
			) : null}
			<ServiceLocationPageView location={location} service={service} />
		</>
	);
}
