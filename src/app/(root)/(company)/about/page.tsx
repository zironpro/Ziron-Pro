import type { Metadata } from "next";

import { AboutPageView } from "@/features/company/views/about-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	buildBreadcrumbSchema,
	buildReviewSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "About ZironPro Digital Agency in Dubai, UAE",
	description:
		"Learn how ZironPro helps businesses in Dubai, Abu Dhabi, and Sharjah grow through integrated branding, websites, SEO, and conversion-focused marketing.",
	path: "/about",
	keywords: [
		"about ZironPro",
		"digital agency in Dubai",
		"marketing company UAE",
		"trusted digital agency UAE",
		"branding and web development Dubai",
	],
});

export default function AboutPage() {
	const webPageSchema = buildWebPageSchema(
		"About ZironPro Digital Agency in Dubai, UAE",
		"Learn how ZironPro helps businesses in Dubai, Abu Dhabi, and Sharjah grow through integrated branding, websites, SEO, and conversion-focused marketing.",
		"/about"
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
	]);
	const reviewSchema = buildReviewSchema({
		authorName: "Direct LS",
		reviewBody:
			"Ziron pro delivered a modern, fast, and professional website that reflects our brand and made the process smooth.",
		reviewRatingValue: 5,
		itemName: "Digital Agency Services",
		itemPath: "/about",
	});

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-about-webpage" />
			<JsonLdScript data={breadcrumbSchema} id="schema-about-breadcrumb" />
			<JsonLdScript data={reviewSchema} id="schema-about-review" />
			<AboutPageView />
		</>
	);
}
