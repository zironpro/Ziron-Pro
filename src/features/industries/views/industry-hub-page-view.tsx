import type { Route } from "next";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

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
					<div className="grid gap-6 px-6 py-12 sm:grid-cols-2 md:px-0 lg:grid-cols-3">
						{industries.map((industry) => (
							<Link
								className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-lg"
								href={`/industry/${industry.slug}` as Route}
								key={industry.slug}
							>
								<div>
									<div className="flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-[transform,background-color,color] duration-300 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white">
										<IndustryIcon className="size-6" name={industry.icon} />
									</div>
									<h3 className="mt-4 font-semibold text-foreground text-lg transition-colors group-hover:text-brand-600">
										{industry.title}
									</h3>
									{industry.description && (
										<p className="mt-2 line-clamp-3 text-muted-foreground text-sm leading-relaxed">
											{industry.description}
										</p>
									)}
								</div>
								<div className="mt-6 flex translate-x-2 transform items-center gap-1.5 font-medium text-brand-600 text-xs tracking-wide opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100">
									<span>Explore solutions</span>
									<ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
