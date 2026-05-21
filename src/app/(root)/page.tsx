import type { Metadata } from "next";

import { siteConfig } from "@/data/site-config";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import { HomePageView } from "@/features/views/home/home-page-view";
import { buildWebPageSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: siteConfig.title,
	description: siteConfig.description,
	path: "/",
	keywords: [...siteConfig.keywords],
});

export default function HomePage() {
	const webPageSchema = buildWebPageSchema(
		siteConfig.title,
		siteConfig.description,
		"/"
	);

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-home-webpage" />
			<HomePageView />
		</>
	);
}
