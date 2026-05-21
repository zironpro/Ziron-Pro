import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LocationPageView } from "@/features/locations/views/location-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	formatLocation,
	getLocationContent,
	isLocationSlug,
	LOCATION_SLUGS,
} from "@/lib/location-seo";
import {
	buildAreaLocalBusinessSchema,
	buildBreadcrumbSchema,
	createPageMetadata,
} from "@/lib/seo";

export function generateStaticParams() {
	return LOCATION_SLUGS.map((location) => ({ location }));
}

export async function generateMetadata({
	params,
}: PageProps<"/[location]">): Promise<Metadata> {
	const { location } = await params;
	if (!isLocationSlug(location)) return { title: "Page Not Found" };

	const locationContent = getLocationContent(location);
	const formattedLocation = formatLocation(location);
	const title =
		locationContent?.frontmatter.title ?? `${formattedLocation} | ZironPro`;
	const description =
		locationContent?.frontmatter.description ??
		`Explore professional digital services for businesses in ${formattedLocation}.`;

	return createPageMetadata({
		title,
		description,
		path: `/${location}`,
		keywords: locationContent?.frontmatter.keywords ?? [
			`${formattedLocation} digital marketing`,
			`${formattedLocation} web design`,
		],
		image: locationContent?.frontmatter.ogImage,
	});
}

export default async function LocationPage({
	params,
}: PageProps<"/[location]">) {
	const { location } = await params;
	if (!isLocationSlug(location)) return notFound();

	const formattedLocation = formatLocation(location);
	const breadcrumbItems = [
		{ name: "Home", path: "/" },
		{ name: formattedLocation, path: `/${location}` },
	];
	const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);
	const localBusinessSchema = buildAreaLocalBusinessSchema(
		formattedLocation,
		`/${location}`
	);

	return (
		<>
			<JsonLdScript data={breadcrumbSchema} id="schema-location-breadcrumb" />
			<JsonLdScript data={localBusinessSchema} id="schema-location-business" />
			<LocationPageView locationSlug={location} />
		</>
	);
}
