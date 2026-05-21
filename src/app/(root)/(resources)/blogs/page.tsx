import type { Metadata } from "next";

import { siteConfig } from "@/data/site-config";
import {
	filterBlogsByQuery,
	getBlogs,
	getFeaturedBlog,
} from "@/features/articles/actions/query";
import { BlogsListPageView } from "@/features/articles/views/blogs-list-page-view";
import { JsonLdScript } from "@/features/seo/json-ld-script";
import {
	buildBreadcrumbSchema,
	buildWebPageSchema,
	createPageMetadata,
} from "@/lib/seo";

type BlogsSearchParams = Promise<{ query?: string | string[] }>;

function pickSearchQuery(
	params: { query?: string | string[] } | undefined
): string {
	const raw = params?.query;
	if (Array.isArray(raw)) return raw[0]?.trim() ?? "";
	return raw?.trim() ?? "";
}

export async function generateMetadata({
	searchParams,
}: {
	searchParams: BlogsSearchParams;
}): Promise<Metadata> {
	const blogs = getBlogs();
	const keywords = Array.from(
		new Set(blogs.flatMap((blog) => [blog.meta.title, ...blog.tags]))
	).slice(0, 12);

	const query = pickSearchQuery(await searchParams);
	const baseTitle = `Marketing, Tech & Business Growth Insights for UAE | ${siteConfig.shortName}`;
	const baseDescription =
		"Explore expert blogs on digital marketing, websites, technology, and business growth. Get practical insights to help UAE businesses scale smarter and faster.";

	return createPageMetadata({
		title: query
			? `“${query}” — Blog search | ${siteConfig.shortName}`
			: baseTitle,
		description: query
			? `Blog posts matching “${query}” on ${siteConfig.shortName}. ${baseDescription}`
			: baseDescription,
		path: query ? `/blogs?query=${encodeURIComponent(query)}` : "/blogs",
		keywords,
	});
}

export default async function BlogsPage({
	searchParams,
}: {
	searchParams: BlogsSearchParams;
}) {
	const query = pickSearchQuery(await searchParams);
	const allBlogs = getBlogs();
	const featuredBlog = getFeaturedBlog();
	const blogs = filterBlogsByQuery(allBlogs, query);
	const webPageSchema = buildWebPageSchema(
		`Marketing, Tech & Business Growth Insights for UAE | ${siteConfig.shortName}`,
		"Explore expert blogs on digital marketing, websites, technology, and business growth. Get practical insights to help UAE businesses scale smarter and faster.",
		"/blogs"
	);
	const breadcrumbSchema = buildBreadcrumbSchema([
		{ name: "Home", path: "/" },
		{ name: "Blogs", path: "/blogs" },
	]);

	return (
		<>
			<JsonLdScript data={webPageSchema} id="schema-blogs-webpage" />
			<JsonLdScript data={breadcrumbSchema} id="schema-blogs-breadcrumb" />
			<BlogsListPageView
				blogs={blogs}
				featuredBlog={featuredBlog}
				query={query}
				totalCount={allBlogs.length}
			/>
		</>
	);
}
