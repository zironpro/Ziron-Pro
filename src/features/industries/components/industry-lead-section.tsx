import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Frame, FramePanel } from "@/components/ui/frame";

import { IndustryLeadForm } from "./industry-lead-form";

interface IndustryLeadSectionProps {
	industrySlug: string;
	industryTitle: string;
}

export function IndustryLeadSection({
	industrySlug,
	industryTitle,
}: IndustryLeadSectionProps) {
	return (
		<section className="dashed dashed-y">
			<div className="dashed dashed-x container mx-auto max-w-7xl">
				<div className="grid gap-8 py-12 md:grid-cols-2 md:py-16">
					<div className="flex flex-col justify-center">
						<h2 className="font-display font-semibold text-3xl text-primary tracking-tight md:text-4xl">
							Ready to grow your {industryTitle.toLowerCase()} brand?
						</h2>
						<p className="mt-3 max-w-md text-muted-foreground">
							Tell us about your goals and we&apos;ll map out a strategy
							tailored to your industry and market.
						</p>
					</div>
					<div>
						<Frame>
							<FramePanel className="shadow-sm">
								<CardHeader className="p-3 pb-0">
									<CardTitle>Start your project today</CardTitle>
									<CardDescription className="text-sm">
										Tell us about your goals and we&apos;ll take it from there.
									</CardDescription>
								</CardHeader>
								<CardContent className="p-3">
									<IndustryLeadForm
										formId="industry-lead-footer"
										industrySlug={industrySlug}
										industryTitle={industryTitle}
										placement="page_footer"
									/>
								</CardContent>
							</FramePanel>
						</Frame>
					</div>
				</div>
			</div>
		</section>
	);
}
