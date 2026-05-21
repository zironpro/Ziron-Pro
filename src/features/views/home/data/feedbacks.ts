import { MEDIA } from "@/data/media";

export interface FeedbackItem {
	image1: string;
	image2: string;
	gradientImage: string;
	quote1: string;
	author1: string;
	quote2: string;
	author2: string;
	authorImage: string;
	authorName: string;
	authorRole: string;
}

const FEEDBACK_TEMPLATE: Omit<FeedbackItem, "image1" | "image2" | "gradientImage" | "authorImage"> = {
	quote1:
		"Ziron pro has completely transformed our social media presence! Their striking posters and engaging motion reels have noticeably boosted our reach and engagement.",
	author1: "Arjun",
	quote2: "We'll love to work with you",
	author2: "Ziron pro",
	authorName: "Arjun Unnikrishnan",
	authorRole: "It Support in Maxline Global",
};

function createFeedbackItem(): FeedbackItem {
	return {
		...FEEDBACK_TEMPLATE,
		image1: MEDIA.feedback.maxline1,
		image2: MEDIA.feedback.maxline2,
		gradientImage: MEDIA.bg.gradient,
		authorImage: MEDIA.feedback.maxline1,
	};
}

export const FEEDBACK_ITEMS: FeedbackItem[] = Array.from({ length: 5 }, createFeedbackItem);
