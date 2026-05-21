import type { Metadata } from "next";

import { TermsOfServicePageView } from "@/features/legal/views/terms-of-service-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	buildBreadcrumbSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Terms of Service | ZironPro Dubai, UAE",
	description:
		"Read ZironPro terms of service for website, branding, and marketing engagements across Dubai, Abu Dhabi, Sharjah, and the UAE.",
	path: "/terms-of-service",
	keywords: ["terms of service UAE", "agency terms Dubai", "ZironPro terms"],
});

export default function TermsOfServicePage() {
	const webPageSchema = buildWebPageSchema(
		"Terms of Service | ZironPro Dubai, UAE",
		"Read ZironPro terms of service for website, branding, and marketing engagements across Dubai, Abu Dhabi, Sharjah, and the UAE.",
		"/terms-of-service"
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Terms of Service", path: "/terms-of-service" },
	]);

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-terms-webpage" />
			<JsonLdScript data={breadcrumbSchema} id="schema-terms-breadcrumb" />
			<TermsOfServicePageView />
		</>
	);
}
