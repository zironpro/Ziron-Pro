import dynamic from "next/dynamic";
import Link from "next/link";

import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Frame,
	FrameHeader,
	FramePanel,
	FrameTitle,
} from "@/components/ui/frame";

import { ADDRESS, OFFICE_HOURS } from "@/data/constant";
import { ContactForm } from "@/features/contact/contact-form";
import { ContactFaqs } from "@/features/contact/views/contact-faqs";
import { ContactHeader } from "@/features/contact/views/contact-header";
import { HowWeHelp } from "@/features/contact/views/how-we-help";

const LocationMap = dynamic(() =>
	import("@/features/contact/views/map").then((mod) => ({
		default: mod.LocationMap,
	}))
);

export function ContactPageView() {
	return (
		<main className="pt-12">
			<section className="dashed dashed-x mx-auto max-w-7xl py-4 md:py-12">
				<div className="container grid gap-4 md:grid-cols-2">
					<ContactHeader />
					<Frame>
						<FramePanel className="shadow-sm">
							<CardHeader className="p-3 pb-0">
								<CardTitle>Start your project today</CardTitle>
								<CardDescription className="text-sm">
									Tell us about your goals and we'll take it from there.
								</CardDescription>
							</CardHeader>
							<CardContent className="p-3">
								<ContactForm />
							</CardContent>
						</FramePanel>
						<FrameHeader>
							<FrameTitle>
								<p className="text-muted-foreground">
									Prefer to hop on a call?{" "}
									<Link
										className="text-primary hover:underline"
										href="tel:+971566646539"
									>
										Book a call
									</Link>{" "}
									instead.
								</p>
							</FrameTitle>
						</FrameHeader>
						<div className="grid gap-4 md:grid-cols-2">
							<FramePanel>
								<span className="w-12 font-mono text-muted-foreground text-xs uppercase leading-none tracking-tight">
									Address
									<span className="font-bold text-brand-secondary">.</span>
								</span>
								<p className="font-medium text-lg">{ADDRESS}</p>
							</FramePanel>
							<FramePanel>
								<span className="w-12 font-mono text-muted-foreground text-xs uppercase leading-none tracking-tight">
									Office Hours
									<span className="font-bold text-brand-secondary">.</span>
								</span>
								<ul className="space-y-1.5 font-medium text-lg">
									{OFFICE_HOURS.map((h) => (
										<li key={h.period}>
											<h4>{h.period}</h4>
											<p>{h.time}</p>
										</li>
									))}
								</ul>
							</FramePanel>
						</div>
					</Frame>
				</div>
			</section>

			<HowWeHelp />
			<ContactFaqs />
			<LocationMap />
		</main>
	);
}
