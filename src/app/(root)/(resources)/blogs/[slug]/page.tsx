import type { Metadata } from "next";

import { getBlogBySlug, getBlogs } from "@/features/articles/actions/query";
import {
	blogDateToIso,
	extractInternalLinks,
	getFallbackBlogs,
	getFallbackServices,
	getRelatedBlogs,
	getRelatedServices,
} from "@/features/articles/lib/blog-related";
import { BlogDetailPageView } from "@/features/articles/views/blog-detail-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	buildArticleSchema,
	buildBreadcrumbSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

export function generateStaticParams() {
	const blogs = getBlogs();
	return blogs.map((b) => ({
		slug: b.slug,
	}));
}

export async function generateMetadata({
	params,
}: PageProps<"/blogs/[slug]">): Promise<Metadata> {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);
	const publishedIso = blogDateToIso(blog.metadata.date);

	return createPageMetadata({
		title: `${blog.metadata.meta.title} | ZironPro UAE`,
		description: blog.metadata.meta.description,
		path: `/blogs/${blog.metadata.slug}`,
		image: blog.metadata.image,
		imageAlt: blog.metadata.alt ?? blog.metadata.title,
		imageWidth: 1200,
		imageHeight: 675,
		type: "article",
		keywords: blog.metadata.tags,
		authors: [blog.metadata.author],
		section: blog.metadata.category,
		...(publishedIso
			? { publishedTime: publishedIso, modifiedTime: publishedIso }
			: {}),
	});
}

export default async function BlogPage({ params }: PageProps<"/blogs/[slug]">) {
	const { slug } = await params;
	const blog = getBlogBySlug(slug);
	const internalLinks = extractInternalLinks(blog.content);
	const detectedBlogs = getRelatedBlogs(internalLinks, slug);
	const detectedServices = getRelatedServices(internalLinks);
	const relatedBlogs =
		detectedBlogs.length > 0 ? detectedBlogs : getFallbackBlogs(slug);
	const relatedServices =
		detectedServices.length > 0 ? detectedServices : getFallbackServices();
	const canonicalPath = `/blogs/${blog.metadata.slug}`;

	const webPageSchema = buildWebPageSchema(
		`${blog.metadata.meta.title} | ZironPro UAE`,
		`${blog.metadata.meta.description} Insights for businesses in Dubai, Abu Dhabi, Sharjah, and across the UAE.`,
		canonicalPath
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Blogs", path: "/blogs" },
		{ name: blog.metadata.title, path: canonicalPath },
	]);
	const articleSchema = buildArticleSchema({
		title: blog.metadata.meta.title,
		description: blog.metadata.meta.description,
		path: canonicalPath,
		image: blog.metadata.image,
		datePublished: blog.metadata.date,
		authorName: blog.metadata.author,
	});

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-blog-webpage" />
			<JsonLdScript data={breadcrumbSchema} id="schema-blog-breadcrumb" />
			<JsonLdScript data={articleSchema} id="schema-blog-article" />
			<BlogDetailPageView
				blog={blog}
				canonicalPath={canonicalPath}
				relatedBlogs={relatedBlogs}
				relatedServices={relatedServices}
			/>
		</>
	);
}
