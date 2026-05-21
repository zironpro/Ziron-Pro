import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { IndustryDetailPageView } from "@/features/industries/views/industry-detail-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	getIndustryContent,
	INDUSTRY_SLUGS,
	type IndustrySlug,
	isIndustrySlug,
} from "@/lib/industry-seo";
import {
	buildBreadcrumbSchema,
	buildFaqSchema,
	buildServiceSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

export function generateStaticParams() {
	return INDUSTRY_SLUGS.map((industry) => ({ industry }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ industry: string }>;
}): Promise<Metadata> {
	const { industry } = await params;
	if (!isIndustrySlug(industry)) return { title: "Page Not Found" };

	const content = getIndustryContent(industry);
	if (!content) return { title: "Page Not Found" };

	const { frontmatter } = content;

	return createPageMetadata({
		title: frontmatter.title,
		description: frontmatter.description,
		path: `/industry/${industry}`,
		keywords: frontmatter.keywords ?? [],
		image: frontmatter.ogImage,
	});
}

export default async function IndustryDetailPage({
	params,
}: {
	params: Promise<{ industry: string }>;
}) {
	const { industry } = await params;
	if (!isIndustrySlug(industry)) return notFound();

	const content = getIndustryContent(industry);
	if (!content) return notFound();

	const { frontmatter } = content;
	const slug = industry as IndustrySlug;
	const canonicalPath = `/industry/${slug}`;

	const webPageSchema = buildWebPageSchema(
		frontmatter.title,
		frontmatter.description,
		canonicalPath
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Industries", path: "/industry" },
		{ name: frontmatter.heroBadge ?? frontmatter.title, path: canonicalPath },
	]);
	const serviceSchema = buildServiceSchema({
		name: `${frontmatter.heroBadge ?? frontmatter.title} Marketing Services`,
		description: frontmatter.description,
		path: canonicalPath,
		image: frontmatter.ogImage,
		serviceType: "Digital Marketing",
		areaServed: "United Arab Emirates",
	});
	const faqSchema =
		frontmatter.faq?.length > 0 ? buildFaqSchema(frontmatter.faq) : null;

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-industry-webpage" />
			<JsonLdScript data={breadcrumbSchema} id="schema-industry-breadcrumb" />
			<JsonLdScript data={serviceSchema} id="schema-industry-service" />
			{faqSchema ? (
				<JsonLdScript data={faqSchema} id="schema-industry-faq" />
			) : null}
			<IndustryDetailPageView content={content} industrySlug={slug} />
		</>
	);
}
