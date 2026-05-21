import Image from "next/image";
import Link from "next/link";

import MDXContent from "@/components/markdown/mdx-component";
import { serviceMdxComponents } from "@/components/markdown/mdx-components";
import { Noise } from "@/components/shared/noise";
import { Button } from "@/components/ui/button";

import { IconArrowRightTag } from "@/assets/icons/arrow";

import { getServiceBySlug } from "@/features/services/actions/query";

interface ServiceDetailPageViewProps {
	service: NonNullable<ReturnType<typeof getServiceBySlug>>;
}

export function ServiceDetailPageView({ service }: ServiceDetailPageViewProps) {
	return (
		<main>
			<header className="dashed dashed-b relative w-full">
				<div className="md:dashed dashed-x container relative z-20 flex h-full max-w-7xl flex-col justify-end space-y-4 pt-12 pb-20">
					<div className="mx-auto max-w-5xl space-y-4">
						<h1 className="font-semibold text-4xl text-primary tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl">
							{service.metadata.title}
						</h1>
						<div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
							<p className="text-balance font-medium text-lg text-muted-foreground md:text-xl">
								{service.metadata.description}
							</p>
							<div>
								<Button
									className="w-48 justify-between"
									data-label="Service page - Get started"
									data-location="service_detail_hero"
									data-track="cta_click"
									render={<Link href="/contact" />}
									size="lg"
								>
									Get started
									<IconArrowRightTag className="size-5" />
								</Button>
							</div>
						</div>
					</div>
					<div className="relative mt-9 aspect-video overflow-hidden rounded-3xl">
						<Image
							alt={`${service.metadata.title} service hero by Ziron pro`}
							className="pointer-events-none object-cover"
							fill
							priority
							sizes="(max-width: 1280px) 100vw, 1280px"
							src={service.metadata.image}
						/>
					</div>
				</div>
				<div className="absolute inset-x-0 bottom-0 z-10 mb-px h-3/4 bg-linear-to-t from-card" />
				<div className="absolute inset-x-0 top-0 z-10 h-3/4 bg-linear-to-b from-card" />
				<Noise />
			</header>

			<article className="prose prose-stone [&>div]:dashed [&>div]:dashed-x prose-xl max-w-none prose-a:text-primary prose-a:underline [&>div]:container [&>div]:max-w-7xl [&>div]:py-12">
				<MDXContent
					components={{
						...serviceMdxComponents,
						h1: (props) => (
							<h2 className="font-semibold text-3xl text-primary" {...props} />
						),
						hr: (props) => (
							<hr className="dashed border-transparent" {...props} />
						),
					}}
					source={service.content}
				/>
			</article>
		</main>
	);
}
