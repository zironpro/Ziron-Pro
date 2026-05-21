import type { Metadata } from "next";

import { PrivacyPolicyPageView } from "@/features/legal/views/privacy-policy-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	buildBreadcrumbSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
	title: "Privacy Policy | ZironPro Dubai, UAE",
	description:
		"Read the ZironPro privacy policy for how we collect, use, and protect client data for marketing and website projects in Dubai and across the UAE.",
	path: "/privacy-policy",
	keywords: [
		"privacy policy agency UAE",
		"data policy Dubai",
		"ZironPro privacy",
	],
});

export default function PrivacyPage() {
	const webPageSchema = buildWebPageSchema(
		"Privacy Policy | ZironPro Dubai, UAE",
		"Read the ZironPro privacy policy for how we collect, use, and protect client data for marketing and website projects in Dubai and across the UAE.",
		"/privacy-policy"
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Privacy Policy", path: "/privacy-policy" },
	]);

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-privacy-webpage" />
			<JsonLdScript data={breadcrumbSchema} id="schema-privacy-breadcrumb" />
			<PrivacyPolicyPageView />
		</>
	);
}
