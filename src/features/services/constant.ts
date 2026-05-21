import { IconDesktopPoint } from "@/assets/icons/desktop";
import { IconPlay } from "@/assets/icons/play";
import { IconPointer } from "@/assets/icons/pointer";
import { IconPrinter } from "@/assets/icons/printer";
import { IconSpeaker } from "@/assets/icons/speaker";
import { IconTarget } from "@/assets/icons/target";

import { MEDIA } from "@/data/media";

export const SERVICES = [
	{
		id: 1,
		slug: "branding",
		color: "text-green-500",
		bg: MEDIA.services.bg.branding,
		icon: IconTarget,
		title: "Branding",
		alt: "Logo design, visual identity, and brand guidelines",
		description:
			"Building strong, memorable brands through strategy, identity design, and consistent visual systems.",
		image: MEDIA.services.logoDesign,
		lists: [
			{
				title: "Logo Design",
				slug: "logo-design",
				image: MEDIA.services.logoDesign,
				description: "Logos that represent your brand.",
			},
			{
				title: "Brand Guidelines",
				slug: "brand-guidelines",
				image: MEDIA.services.brandGuidelines,
				description: "Guidelines for consistency and clarity.",
			},
			{
				title: "Pitch Decks",
				slug: "pitch-decks",
				image: MEDIA.services.pitchDeck,
				description: "Pitch decks to secure funding.",
			},
			{
				title: "Packaging Design",
				slug: "packaging-design",
				image: MEDIA.services.package2,
				description: "Functional, aesthetic packaging design.",
			},
			{
				title: "Brand Revamps",
				slug: "brand-revamps",
				image: MEDIA.services.branding,
				description: "Modern, appealing brand revamps.",
			},
		],
	},
	{
		id: 2,
		slug: "websites",
		icon: IconDesktopPoint,
		color: "text-blue-500",
		bg: MEDIA.services.bg.websites,
		title: "Websites",
		description:
			"Designing and developing fast, scalable, and conversion-focused websites that grow with your business.",
		alt: "Fast, scalable, conversion-focused sites",
		image: MEDIA.services.webDev,
		lists: [
			{
				title: "Web UI/UX Design",
				slug: "web-ui-ux-design",
				image: MEDIA.services.webDev,
				description: "Functional, beautiful website design.",
			},
			{
				title: "Website Development",
				slug: "website-development",
				image: MEDIA.services.webDev,
				description: "Functional, beautiful website design.",
			},
			{
				title: "Web Revamps",
				slug: "web-revamps",
				image: MEDIA.services.website,
				description: "Modern, appealing web revamps.",
			},
			{
				title: "Search Engine Optimization (SEO)",
				slug: "seo",
				image: MEDIA.services.seo,
				description: "Search engine visibility optimization.",
			},
			{
				title: "Website Management",
				slug: "management",
				image: MEDIA.services.website,
				description: "Keep site up and running.",
			},
		],
	},
	{
		id: 3,
		slug: "marketing",
		icon: IconSpeaker,
		color: "text-yellow-500",
		bg: MEDIA.services.bg.marketing,
		title: "Digital Marketing",
		description:
			"Driving visibility, engagement, and leads through data-driven digital marketing strategies.",
		alt: "SEO, social media, content, and paid ads",
		image: MEDIA.services.social,
		lists: [
			{
				title: "Social Media Creatives",
				slug: "social-media",
				image: MEDIA.services.social,
				description: "Engaging, informative social content.",
			},
			{
				title: "Content Strategy",
				slug: "content-strategy",
				image: MEDIA.services.contentStrategy,
				description: "Content strategy for your goals.",
			},
			{
				title: "Paid Ads",
				slug: "paid-ads",
				image: MEDIA.services.paidAds,
				description: "Paid ads for your goals.",
			},
		],
	},
	{
		id: 4,
		slug: "printing",
		icon: IconPrinter,
		color: "text-purple-500",
		bg: MEDIA.services.bg.printing,
		title: "Printing & Corporate Gifts",
		description:
			"High-quality printing and branded merchandise that enhance visibility and leave a lasting impression.",
		alt: "Branded merchandise and marketing collateral",
		image: MEDIA.services.corporateGifts,
		lists: [
			{
				title: "Offset & Digital Printing",
				slug: "offset-and-digital",
				image: MEDIA.services.offsetDigital,
				description: "Offset and digital printing.",
			},
			{
				title: "Merchandise",
				slug: "merchandise",
				image: MEDIA.services.merchandise,
				description: "Branded merchandise for your goals.",
			},
			{
				title: "Custom Corporate Gifts",
				slug: "custom-corporate-gifts",
				image: MEDIA.services.corporateGifts,
				description: "Corporate gifts for your goals.",
			},
			{
				title: "Stationary & Corporate Identity",
				slug: "stationary-and-corporate-identity",
				image: MEDIA.services.stationary,
				description: "Stationery and corporate identity.",
			},
			{
				title: "Stickers",
				slug: "stickers",
				image: MEDIA.services.stickers,
				description: "Branded stickers for your goals.",
			},
		],
	},
	{
		id: 5,
		slug: "motion",
		icon: IconPlay,
		color: "text-orange-500",
		bg: MEDIA.services.bg.motion,
		title: "Motion Design & Video",
		description:
			"Bringing stories to life through engaging motion graphics and impactful video content.",
		alt: "Explainer videos, motion graphics, and brand videos",
		image: MEDIA.services.motion,
		lists: [
			{
				title: "Motion Graphics",
				slug: "motion-graphics",
				image: MEDIA.services.motionGraphics,
				description: "Motion graphics for your goals.",
			},
			{
				title: "Explainer Videos",
				slug: "explainer-videos",
				image: MEDIA.services.motionAvif,
				description: "Explainer videos for your goals.",
			},
			{
				title: "Brand Launch Videos",
				slug: "brand-launch-videos",
				image: MEDIA.services.brandLaunch,
				description: "Brand launch videos for goals.",
			},
		],
	},
	{
		id: 6,
		slug: "full-stack",
		icon: IconPointer,
		color: "text-red-500",
		bg: MEDIA.services.bg.fullStack,
		title: "Full-stack Marketing",
		description:
			"End-to-end marketing solutions that align strategy, content, and execution for scalable growth.",
		alt: "End‑to‑end strategy, content, and campaign execution",
		image: MEDIA.services.fullStack,
		lists: [
			{
				title: "Marketing & Growth Strategy",
				slug: "marketing-and-growth-strategy",
				image: MEDIA.services.marketingGrowth,
				description: "Marketing and growth strategy.",
			},
			{
				title: "Emails & Newsletters",
				slug: "emails-and-newsletters",
				image: MEDIA.services.emailNewsletter,
				description: "Emails and newsletters for goals.",
			},
			{
				title: "Copywriting",
				slug: "copywriting",
				image: MEDIA.services.copywriting,
				description: "Copywriting for your goals.",
			},
			{
				title: "Technical Content Writing",
				slug: "technical-content-writing",
				image: MEDIA.services.techContent,
				description: "Technical content for your goals.",
			},
			{
				title: "Campaigns",
				slug: "campaigns",
				image: MEDIA.services.campaigns,
				description: "Campaigns for your goals.",
			},
			{
				title: "Social Media Management",
				slug: "social-media-management",
				image: MEDIA.services.socialManagement,
				description: "Social media management for goals.",
			},
			{
				title: "Community, Events, Podcasts",
				slug: "community-events-podcasts",
				image: MEDIA.services.eventsPodcasts,
				description: "Community, events, and podcasts.",
			},
			{
				title: "Strategic Partnerships",
				slug: "strategic-partnerships",
				image: MEDIA.services.strategicPartnerships,
				description: "Strategic partnerships for your goals.",
			},
		],
	},
] as const;
