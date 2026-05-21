import Link from "next/link";

import MDXContent from "@/components/markdown/mdx-component";

import { Breadcrumbs } from "@/features/locations/components/breadcrumbs";
import { CTASection } from "@/features/locations/components/cta-section";
import { FAQSection } from "@/features/locations/components/faq-section";
import { ServiceHero } from "@/features/locations/components/service-hero";
import {
	formatLocation,
	formatService,
	getServiceLocationContent,
	LOCATION_SLUGS,
	type LocationSlug,
	type ServiceSlug,
	serviceLocationPath,
} from "@/lib/location-seo";

interface ServiceLocationPageViewProps {
	service: ServiceSlug;
	location: LocationSlug;
}

export function ServiceLocationPageView({
	service,
	location,
}: ServiceLocationPageViewProps) {
	const content = getServiceLocationContent(service, location);
	const serviceLabel = formatService(service);
	const locationLabel = formatLocation(location);
	const canonicalPath = serviceLocationPath(service, location);

	return (
		<main>
			<Breadcrumbs
				items={[
					{ label: "Home", href: "/" },
					{ label: serviceLabel, href: "/services" },
					{ label: locationLabel, href: canonicalPath },
				]}
			/>

			<ServiceHero
				description={
					content?.frontmatter.description ??
					`${serviceLabel} services tailored for ${locationLabel}.`
				}
				isFallback={content?.isFallback}
				location={locationLabel}
				service={serviceLabel}
				title={
					content?.frontmatter.title ?? `${serviceLabel} in ${locationLabel}`
				}
			/>

			{content ? (
				<article className="prose prose-stone container max-w-5xl py-10 prose-a:text-primary">
					<MDXContent source={content.content} />
				</article>
			) : (
				<section className="container max-w-5xl py-10">
					<p className="text-muted-foreground">
						We are preparing this page. Please check other locations or contact
						us for a custom plan.
					</p>
				</section>
			)}

			<section className="dashed dashed-y">
				<div className="container max-w-7xl py-10">
					<h2 className="font-semibold text-2xl text-primary">
						{serviceLabel} in other locations
					</h2>
					<ul className="mt-4 grid gap-3 md:grid-cols-3">
						{LOCATION_SLUGS.filter((item) => item !== location).map((item) => (
							<li key={item}>
								<Link
									className="block rounded-lg border p-4 transition-colors hover:bg-card"
									href={serviceLocationPath(service, item)}
								>
									{serviceLabel} in {formatLocation(item)}
								</Link>
							</li>
						))}
					</ul>
					<Link
						className="mt-5 inline-block text-primary underline"
						href="/services"
					>
						Back to all services
					</Link>
				</div>
			</section>

			<FAQSection items={content?.frontmatter.faq} />
			<CTASection
				description={`Get a tailored ${serviceLabel.toLowerCase()} growth plan for ${locationLabel}.`}
				title={`Need ${serviceLabel} in ${locationLabel}?`}
			/>
		</main>
	);
}
