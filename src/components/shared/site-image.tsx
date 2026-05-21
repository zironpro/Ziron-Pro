import Image, { type ImageProps } from "next/image";

type SiteImageProps = Omit<ImageProps, "alt"> & {
	alt: string;
};

const DEFAULT_FILL_SIZES =
	"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

export function SiteImage({
	alt,
	fill,
	sizes,
	loading,
	priority,
	...props
}: SiteImageProps) {
	const resolvedSizes = fill && !sizes ? DEFAULT_FILL_SIZES : sizes;
	const resolvedLoading = priority ? undefined : (loading ?? "lazy");

	return (
		<Image
			alt={alt}
			fill={fill}
			loading={resolvedLoading}
			priority={priority}
			sizes={resolvedSizes}
			{...props}
		/>
	);
}
