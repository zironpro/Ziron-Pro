import type { Metadata } from "next";

import { ContactPageView } from "@/features/company/views/contact-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	buildBreadcrumbSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

const title = "Contact ZironPro | Web Design & Digital Agency in Dubai, UAE";
const description =
	"Speak with ZironPro in Dubai for web design, SEO, branding, and growth marketing across Abu Dhabi, Sharjah, and the UAE. Request your free strategy call.";
const slug = "/contact";

export const metadata: Metadata = createPageMetadata({
	title,
	description,
	path: slug,
	keywords: [
		"contact digital agency Dubai",
		"SEO consultation UAE",
		"web design call Abu Dhabi",
	],
});

export default function ContactPage() {
	const webPageSchema = buildWebPageSchema(title, description, slug);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Contact", path: slug },
	]);

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-contact-webpage" />
			<JsonLdScript data={breadcrumbSchema} id="schema-contact-breadcrumb" />
			<ContactPageView />
		</>
	);
}
