export const ImageGallery = ({
	children,
	description,
	title,
}: {
	children: React.ReactNode;
	description: string;
	title: string;
}) => {
	return (
		<section className="grid gap-6 md:grid-cols-[1.5fr_2fr]">
			<div className="sticky top-20 h-fit py-4">
				<h2 className="not-prose font-semibold text-5xl text-primary tracking-tight">
					{title}
				</h2>
				<p className="mt-3 text-muted-foreground">{description}</p>
			</div>

			<div className="not-prose grid grid-cols-2 gap-4">{children}</div>
		</section>
	);
};

/** @deprecated Use ImageGallery */
export const ImageGalley = ImageGallery;
