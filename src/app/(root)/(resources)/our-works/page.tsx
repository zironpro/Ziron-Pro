import type { Metadata } from "next";

import { OurWorksPageView } from "@/features/resources/views/our-works-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	buildBreadcrumbSchema,
	buildReviewSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Our Work Portfolio in Dubai, UAE | ZironPro",
	description:
		"See recent branding, website, and marketing projects delivered by ZironPro for clients across Dubai, Abu Dhabi, Sharjah, and the UAE.",
	path: "/our-works",
	keywords: [
		"portfolio agency Dubai",
		"web design case studies UAE",
		"branding projects Abu Dhabi",
	],
});

export default function WorksPage() {
	const webPageSchema = buildWebPageSchema(
		"Our Work Portfolio in Dubai, UAE | ZironPro",
		"See recent branding, website, and marketing projects delivered by ZironPro for clients across Dubai, Abu Dhabi, Sharjah, and the UAE.",
		"/our-works"
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Our Works", path: "/our-works" },
	]);
	const reviewSchema = buildReviewSchema({
		authorName: "Direct LS",
		reviewBody:
			"Ziron pro delivered a modern, fast, and professional website that reflects our brand and made the process smooth.",
		reviewRatingValue: 5,
		itemName: "Website Design and Development Service",
		itemPath: "/services/websites",
	});

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-works-webpage" />
			<JsonLdScript data={breadcrumbSchema} id="schema-works-breadcrumb" />
			<JsonLdScript data={reviewSchema} id="schema-works-review" />
			<OurWorksPageView />
		</>
	);
}
