import MDXContent from "@/components/markdown/mdx-component";
import { blogMdxComponents } from "@/components/markdown/mdx-components";
import { Noise } from "@/components/shared/noise";
import { SiteImage } from "@/components/shared/site-image";
import { Badge } from "@/components/ui/badge";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

import type { getBlogBySlug } from "@/features/articles/actions/query";
import { BlogPostSidebar } from "@/features/articles/components/blog-post-sidebar";
import type {
	getRelatedBlogs,
	getRelatedServices,
} from "@/features/articles/lib/blog-related";
import { Blogs } from "@/features/articles/views/blogs";
import { absoluteUrl } from "@/lib/seo";

interface BlogDetailPageViewProps {
	blog: ReturnType<typeof getBlogBySlug>;
	relatedBlogs: ReturnType<typeof getRelatedBlogs>;
	relatedServices: ReturnType<typeof getRelatedServices>;
	canonicalPath: string;
}

export function BlogDetailPageView({
	blog,
	relatedBlogs,
	relatedServices,
	canonicalPath,
}: BlogDetailPageViewProps) {
	return (
		<main>
			<ScrollIndicator />

			<section className="relative w-full bg-[radial-gradient(ellipse_400%_240%_at_50%_100%,#fff,#fff_10%,15%,#c7c5fd_16%,rgba(154,103,250,.6)_17%,21%,#264cab_28%,35%,#00031d_45%,#00031d)]">
				<div className="dashed dashed-x container max-w-7xl py-16 text-center md:py-24">
					<div className="mb-4 flex flex-wrap items-center justify-center gap-4">
						<Badge>{blog.metadata.category}</Badge>
						<div className="size-2 rounded-[2px] bg-primary" />
						<p className="text-muted">{blog.metadata.date}</p>
					</div>
					<h1 className="mx-auto max-w-6xl text-balance font-display font-semibold text-4xl text-primary md:text-5xl lg:text-6xl">
						{blog.metadata.title}
					</h1>
					<p className="mx-auto mt-4 max-w-6xl text-balance text-2xl text-card leading-relaxed tracking-tight">
						{blog.metadata.description}
					</p>
					<div className="relative mx-auto mt-9 aspect-video max-w-4xl overflow-hidden rounded-xl shadow-md">
						<SiteImage
							alt={blog.metadata.title}
							className="object-cover"
							fill
							priority
							sizes="(max-width: 768px) 100vw, 896px"
							src={blog.metadata.image}
						/>
					</div>
				</div>
				<Noise />
			</section>

			<div className="dashed dashed-t relative overflow-x-clip">
				<div className="dashed dashed-x container flex max-w-7xl flex-col-reverse justify-between gap-5 overflow-x-clip py-16 lg:flex-row lg:gap-22 lg:py-20">
					<BlogPostSidebar
						relatedBlogs={relatedBlogs}
						relatedServices={relatedServices}
						shareTitle={blog.metadata.title}
						shareUrl={absoluteUrl(canonicalPath)}
					/>
					<article className="prose prose-stone prose-lg mx-auto prose-headings:mt-0 max-w-none space-y-8 prose-hr:border-muted/60 prose-a:text-primary lg:max-w-[800px]">
						<MDXContent components={blogMdxComponents} source={blog.content} />
					</article>
				</div>
				<div className="absolute inset-x-0 top-0 -z-10 h-1/4 bg-linear-180 from-white" />
			</div>

			<Blogs />
		</main>
	);
}
