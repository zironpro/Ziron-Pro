import Link from "next/link";

import { SiteImage } from "@/components/shared/site-image";

import { Card } from "@/features/services/components/card";
import { Faq, FaqContent } from "@/features/services/components/faq";
import {
	ImageGallery,
	ImageGalley,
} from "@/features/services/components/image-gallery";
import { LogoVariants } from "@/features/services/components/logo-variants";
import { Group, Section } from "@/features/services/components/section";
import { Cta } from "@/features/views/cta";
import { cn } from "@/lib/utils";

function MdxImage({
	className,
	...props
}: React.ComponentProps<typeof SiteImage>) {
	return (
		<SiteImage
			{...props}
			className={cn(
				"rounded-2xl transition-transform hover:-translate-y-2",
				className
			)}
		/>
	);
}

function MdxLink(props: React.ComponentProps<typeof Link>) {
	return (
		<Link
			{...props}
			className={cn(
				"group no-underline! relative items-center",
				"before:pointer-events-none before:absolute before:top-[1.3em] before:left-0 before:h-[0.072em] before:w-full before:bg-current before:content-['']",
				"prose-headings:text-primary before:origin-right before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out",
				"hover:before:origin-left hover:before:scale-x-100",
				props.className
			)}
		/>
	);
}

/** Shared MDX component map for service pages, blogs, and marketing MDX. */
export const serviceMdxComponents = {
	a: MdxLink,
	Image: MdxImage,
	Card,
	Faq,
	FaqContent,
	Group,
	ImageGallery,
	ImageGalley,
	LogoVariants,
	Section,
	Cta,
};

export const blogMdxComponents = {
	a: MdxLink,
	Faq,
	FaqContent,
};
