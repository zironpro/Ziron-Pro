import type { Metadata } from "next";

import { IndustryHubPageView } from "@/features/industries/views/industry-hub-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	formatIndustryTitle,
	getIndustryContent,
	INDUSTRY_SLUGS,
} from "@/lib/industry-seo";
import {
	buildBreadcrumbSchema,
	buildItemListSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Industries We Serve in UAE | ZironPro",
	description:
		"From real estate to healthcare, retail to SaaS — ZironPro delivers tailored digital marketing, branding, and web solutions for every major industry across Dubai, Abu Dhabi, and Sharjah.",
	path: "/industry",
	keywords: [
		"digital marketing agency UAE industries",
		"industry marketing dubai",
		"sector-specific marketing uae",
		"branding for industries dubai",
	],
});

export default function IndustryHubPage() {
	const webPageSchema = buildWebPageSchema(
		"Industries We Serve in UAE",
		"Tailored digital marketing, branding, and web solutions for every major industry across the UAE.",
		"/industry"
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Industries", path: "/industry" },
	]);
	const itemListSchema = buildItemListSchema(
		INDUSTRY_SLUGS.map((slug) => ({
			name: formatIndustryTitle(slug),
			path: `/industry/${slug}`,
		})),
		{
			name: "Industries served by ZironPro",
			numberOfItems: INDUSTRY_SLUGS.length,
		}
	);

	const industries = INDUSTRY_SLUGS.map((slug) => {
		const content = getIndustryContent(slug);
		return {
			slug,
			title: content?.frontmatter.heroBadge ?? formatIndustryTitle(slug),
			description: content?.frontmatter.description ?? "",
			icon: content?.frontmatter.icon ?? "Building2",
		};
	});

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-industry-hub-webpage" />
			<JsonLdScript
				data={breadcrumbSchema}
				id="schema-industry-hub-breadcrumb"
			/>
			<JsonLdScript data={itemListSchema} id="schema-industry-hub-itemlist" />
			<IndustryHubPageView industries={industries} />
		</>
	);
}
