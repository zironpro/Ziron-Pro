import type { Metadata } from "next";

import { JsonLdScript } from "@/features/seo/json-ld-script";
import { ServicesHubPageView } from "@/features/services/views/services-hub-page-view";
import {
	buildBreadcrumbSchema,
	buildServiceSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Digital Services in Abu Dhabi, Dubai, UAE | ZironPro",
	description:
		"Explore branding, websites, SEO, social media, printing, and growth services delivered by ZironPro for businesses in Dubai, Abu Dhabi, Sharjah, and the UAE.",
	path: "/services",
	keywords: [
		"digital services UAE",
		"web design services Dubai",
		"branding Abu Dhabi",
	],
});

export default function ServicesPage() {
	const webPageSchema = buildWebPageSchema(
		"Digital Services in Abu Dhabi, Dubai, UAE | ZironPro",
		"Explore branding, websites, SEO, social media, printing, and growth services delivered by ZironPro for businesses in Dubai, Abu Dhabi, Sharjah, and the UAE.",
		"/services"
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Services", path: "/services" },
	]);
	const serviceSchema = buildServiceSchema({
		name: "Integrated Digital Services",
		description:
			"Branding, web design, development, SEO, and growth marketing services for UAE businesses.",
		path: "/services",
		serviceType: "Digital marketing and web services",
	});

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-services-webpage" />
			<JsonLdScript data={breadcrumbSchema} id="schema-services-breadcrumb" />
			<JsonLdScript data={serviceSchema} id="schema-services-service" />
			<ServicesHubPageView />
		</>
	);
}
