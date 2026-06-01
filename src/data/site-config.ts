export const BASE_URL =
	process.env.NEXT_PUBLIC_SITE_URL ??
	process.env.BASE_URL ??
	"https://zironpro.ae";

export const siteConfig = {
	title:
		"AI-Powered Digital Marketing Agency in Abu Dhabi & Dubai | ZironPro",
	shortName: "ZironPro",
	description:
		"ZironPro is a leading AI-powered digital marketing & growth agency in Abu Dhabi and Dubai. We offer SEO, paid ads, social media, CRM automation, web design, and NFC smart cards to help startups, SMEs, and enterprise brands grow. Book your free 30-minute growth consultation today.",
	keywords: [
		"digital marketing agency Abu Dhabi",
		"digital marketing agency Dubai",
		"SEO services Dubai affordable",
		"SEO services Dubai",
		"SEO services Abu Dhabi",
		"PPC management",
		"Google ads management Dubai",
		"Facebook ads agency Abu Dhabi",
		"social media management company UAE",
		"social media marketing",
		"CRM integration Dubai",
		"WhatsApp automation UAE",
		"lead generation agency Dubai",
		"web design Dubai",
		"web development",
		"web ui",
		"website",
		"NFC smart business cards UAE",
		"nfc card",
		"digital printing",
		"TikTok ads agency Abu Dhabi",
		"email marketing company UAE",
		"content marketing agency Abu Dhabi",
		"Instagram marketing agency UAE",
		"digital marketing packages Abu Dhabi",
		"performance marketing Dubai",
		"growth agency UAE",
	],
	companyName: "ZironPro Digital Design LLC",
	url: BASE_URL,
	logo: "/favicon.svg",
	ogImage: "/images/og.jpg",
	links: {
		// twitter: "https://x.com/itzTedx_",
		linkedin: "https://www.linkedin.com/company/zironpro",
		instagram: "https://www.instagram.com/ziron_pro",
		facebook: "https://www.facebook.com/profile.php?id=61574382451601",
	},
	contact: "+971 58 171 1486",
	/** Custom meta for crawlers / internal tooling */
	siteCategory: "technology",
	siteClassification: "Digital Marketing Agency",
} as const;
