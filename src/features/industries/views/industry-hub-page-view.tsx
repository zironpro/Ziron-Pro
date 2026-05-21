import type { Route } from "next";
import Link from "next/link";

import { Header } from "@/components/shared/header";

import { IndustryIcon } from "@/features/industries/components/industry-icon";

interface IndustryHubItem {
	slug: string;
	title: string;
	description: string;
	icon: string;
}

interface IndustryHubPageViewProps {
	industries: IndustryHubItem[];
}

export function IndustryHubPageView({ industries }: IndustryHubPageViewProps) {
	return (
		<main>
			<Header
				description="Our expertise spans across multiple industries in the UAE, allowing us to understand sector-specific challenges and deliver strategic, results-driven solutions."
				title="Industries We Serve"
			/>

			<section className="dashed dashed-y">
				<div className="dashed dashed-x container mx-auto max-w-7xl">
					<div className="px-6 py-8 md:px-0">
						<p className="mx-auto max-w-3xl text-center text-muted-foreground leading-relaxed">
							We partner with businesses across every major sector in the UAE —
							from property developers in Dubai to healthcare providers in
							Sharjah to tech startups scaling out of Abu Dhabi. Each industry
							gets a strategy built around its market dynamics, compliance
							requirements, and buyer behaviour.
						</p>
					</div>
				</div>
			</section>

			<section className="dashed dashed-y">
				<div className="dashed dashed-x container mx-auto max-w-7xl">
					<div className="grid gap-4 px-6 py-12 sm:grid-cols-2 md:px-0 lg:grid-cols-3 xl:grid-cols-4">
						{industries.map((industry) => (
							<Link
								className="group flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-md"
								href={`/industry/${industry.slug}` as Route}
								key={industry.slug}
							>
								<div className="flex size-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100">
									<IndustryIcon className="size-7" name={industry.icon} />
								</div>
								<h3 className="font-semibold text-primary text-sm">
									{industry.title}
								</h3>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
