import type { Metadata } from "next";

import { FAQS, type FaqItemData } from "@/data/faqs";
import { siteConfig } from "@/data/site-config";
import { FaqsPageView } from "@/features/resources/views/faqs-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	buildBreadcrumbSchema,
	buildFaqSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

function buildFaqPageSchema(items: FaqItemData[]) {
	return buildFaqSchema(items);
}

export async function generateMetadata(): Promise<Metadata> {
	return createPageMetadata({
		title: `SEO FAQ in Dubai, UAE | ${siteConfig.shortName}`,
		description:
			"Get clear answers on SEO, AEO, and technical web performance for businesses in Dubai, Abu Dhabi, Sharjah, and the UAE.",
		path: "/faqs",
		keywords: [
			"SEO FAQ UAE",
			"AEO answers Dubai",
			"technical SEO Abu Dhabi",
			"web performance Sharjah",
		],
	});
}

export default async function FaqsPage() {
	const webPageSchema = buildWebPageSchema(
		`SEO FAQ in Dubai, UAE | ${siteConfig.shortName}`,
		"Get clear answers on SEO, AEO, and technical web performance for businesses in Dubai, Abu Dhabi, Sharjah, and the UAE.",
		"/faqs"
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "FAQs", path: "/faqs" },
	]);

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-faqs-webpage" />
			<JsonLdScript data={breadcrumbSchema} id="schema-faqs-breadcrumb" />
			{FAQS.map((category) => (
				<JsonLdScript
					data={buildFaqPageSchema(category.items)}
					id={`faqpage-schema-${category.slug}`}
					key={category.slug}
				/>
			))}
			<FaqsPageView />
		</>
	);
}
