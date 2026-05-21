import type { Route } from "next";
import Link from "next/link";

import MDXContent from "@/components/markdown/mdx-component";

import { CTASection } from "@/features/locations/components/cta-section";
import { Achievements } from "@/features/views/home/achievements";
import { Hero } from "@/features/views/home/hero";
import { Products } from "@/features/views/home/products";
import { Services } from "@/features/views/home/services";
import { WhyUs } from "@/features/views/home/why-us";
import {
	formatLocation,
	formatService,
	getLocationContent,
	type LocationSlug,
	SERVICE_SLUGS,
	serviceLocationPath,
} from "@/lib/location-seo";

interface LocationPageViewProps {
	locationSlug: LocationSlug;
}

export function LocationPageView({ locationSlug }: LocationPageViewProps) {
	const formattedLocation = formatLocation(locationSlug);
	const locationContent = getLocationContent(locationSlug);

	return (
		<main>
			<Hero
				badgeLabel={`${formattedLocation} digital marketing partner`}
				heading={`Turn your ${formattedLocation} brand into a revenue engine`}
				subheading={
					locationContent?.frontmatter.description ??
					`We help ambitious companies in ${formattedLocation} grow with branding, websites, SEO, and performance marketing.`
				}
			/>

			{locationContent ? (
				<article className="prose prose-stone container max-w-5xl py-10 prose-a:text-primary">
					<MDXContent source={locationContent.content} />
				</article>
			) : (
				<section className="container max-w-5xl py-10">
					<p className="text-muted-foreground">
						Content for this location is coming soon. You can still explore
						available services below.
					</p>
				</section>
			)}

			<section className="dashed dashed-y bg-card/30">
				<div className="container max-w-7xl py-12 md:py-16">
					<h2 className="font-semibold text-2xl text-primary md:text-3xl">
						Popular services in {formattedLocation}
					</h2>
					<p className="mt-2 max-w-2xl text-muted-foreground">
						Jump into location-specific pages for our core offerings—each is
						tailored for businesses operating in {formattedLocation}.
					</p>
					<ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{SERVICE_SLUGS.map((serviceSlug) => (
							<li key={serviceSlug}>
								<Link
									className="block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary hover:bg-card/80"
									href={serviceLocationPath(serviceSlug, locationSlug) as Route}
								>
									<span className="font-medium text-foreground">
										{formatService(serviceSlug)}
									</span>
									<span className="mt-1 block text-muted-foreground text-sm">
										{formattedLocation}
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>

			<Achievements />

			<Services />

			<WhyUs />

			<Products />

			<CTASection
				description={
					locationContent?.frontmatter.description ??
					`Talk to our team about a practical, performance-focused strategy for your ${formattedLocation} business.`
				}
				title={`Ready to grow in ${formattedLocation}?`}
			/>
		</main>
	);
}
