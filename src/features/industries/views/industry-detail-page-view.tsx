import { Header } from "@/components/shared/header";

import { IndustryCapabilityGrid } from "@/features/industries/components/industry-capability-grid";
import { IndustryFaq } from "@/features/industries/components/industry-faq";
import { IndustryHero } from "@/features/industries/components/industry-hero";
import { IndustryLeadSection } from "@/features/industries/components/industry-lead-section";
import { IndustryLocationLinks } from "@/features/industries/components/industry-location-links";
import { IndustryMdxBody } from "@/features/industries/components/industry-mdx-body";
import { IndustryRelatedGrid } from "@/features/industries/components/industry-related-grid";
import { IndustrySocialProof } from "@/features/industries/components/industry-social-proof";
import { IndustryTailoredServices } from "@/features/industries/components/industry-tailored-services";
import { getIndustryContent, type IndustrySlug } from "@/lib/industry-seo";

interface IndustryDetailPageViewProps {
	content: NonNullable<ReturnType<typeof getIndustryContent>>;
	industrySlug: IndustrySlug;
}

export function IndustryDetailPageView({
	content,
	industrySlug,
}: IndustryDetailPageViewProps) {
	const { frontmatter } = content;

	return (
		<main>
			<IndustryHero frontmatter={frontmatter} industrySlug={industrySlug} />

			<IndustryMdxBody source={content.content} />

			<IndustryTailoredServices
				industryTitle={frontmatter.heroBadge ?? frontmatter.title}
				services={frontmatter.tailoredServices}
			/>

			{frontmatter.socialProof && (
				<IndustrySocialProof data={frontmatter.socialProof} />
			)}

			<IndustryCapabilityGrid capabilities={frontmatter.capabilities} />

			{frontmatter.relatedLocations &&
				frontmatter.relatedLocations.length > 0 && (
					<IndustryLocationLinks
						industryTitle={frontmatter.heroBadge ?? frontmatter.title}
						locations={frontmatter.relatedLocations}
					/>
				)}

			{frontmatter.faq?.length > 0 && (
				<section className="dashed dashed-y">
					<Header
						description="Common questions about our approach to this industry."
						title="Frequently Asked Questions"
					/>
					<div className="dashed dashed-x container mx-auto max-w-7xl">
						<div className="mx-auto max-w-3xl px-6 py-12 md:px-0">
							<IndustryFaq items={frontmatter.faq} />
						</div>
					</div>
				</section>
			)}

			<IndustryRelatedGrid currentSlug={industrySlug} />

			<IndustryLeadSection
				industrySlug={industrySlug}
				industryTitle={frontmatter.heroBadge ?? frontmatter.title}
			/>
		</main>
	);
}
