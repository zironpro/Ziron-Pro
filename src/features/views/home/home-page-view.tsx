import { Blogs } from "@/features/articles/views/blogs";
import { Achievements } from "@/features/views/home/achievements";
import { Hero } from "@/features/views/home/hero";
import { Services } from "@/features/views/home/services";
import { Video } from "@/features/views/home/video";
import { VideoReel } from "@/features/views/home/video-reel";
import { WhyUs } from "@/features/views/home/why-us";

export function HomePageView() {
	return (
		<main>
			<Hero />
			<Achievements />
			<Services />
			<VideoReel />
			<WhyUs />
			<Blogs />
			<Video />
		</main>
	);
}
