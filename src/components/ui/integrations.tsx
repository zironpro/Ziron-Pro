"use client";

import { useEffect, useId, useRef, useState } from "react";

import {
	BarChart,
	File,
	Globe,
	HeartHandshake,
	Rss,
	Shield,
} from "lucide-react";
import { motion, useAnimation, useInView } from "motion/react";

import { Marquee } from "@/components/ui/marquee";

import { cn } from "@/lib/utils";

const tiles = [
	{
		icon: <HeartHandshake className="size-full" />,
		bg: (
			<div className="pointer-events-none absolute top-1/2 left-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-linear-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px]" />
		),
	},
	{
		icon: <Globe className="size-full" />,
		bg: (
			<div className="pointer-events-none absolute top-1/2 left-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-[20px]" />
		),
	},
	{
		icon: <File className="size-full" />,
		bg: (
			<div className="pointer-events-none absolute top-1/2 left-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-linear-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 blur-[20px]" />
		),
	},
	{
		icon: <Shield className="size-full" />,
		bg: (
			<div className="pointer-events-none absolute top-1/2 left-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 blur-[20px]" />
		),
	},
	{
		icon: <Rss className="size-full" />,
		bg: (
			<div className="pointer-events-none absolute top-1/2 left-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-linear-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px]" />
		),
	},
	{
		icon: <BarChart className="size-full" />,
		bg: (
			<div className="pointer-events-none absolute top-1/2 left-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-linear-to-r from-cyan-600 via-cyan-500 to-teal-400 opacity-70 blur-[20px]" />
		),
	},
];

function shuffleArray<T>(array: T[]): T[] {
	let currentIndex = array.length;
	let randomIndex;
	// While there remain elements to shuffle.
	while (currentIndex !== 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	return array;
}

function Card(card: { icon: React.ReactNode; bg: React.ReactNode }) {
	const id = useId();
	const controls = useAnimation();
	const ref = useRef(null);
	const inView = useInView(ref, { once: true });

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
			});
		}
	}, [controls, inView]);

	return (
		<motion.div
			animate={controls}
			className={cn(
				"relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4",
				// light styles
				"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
				// dark styles
				"transform-gpu dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
			)}
			initial={{ opacity: 0 }}
			key={id}
			ref={ref}
		>
			{card.icon}
			{card.bg}
		</motion.div>
	);
}

export default function Integrations() {
	const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);
	const [randomTiles2, setRandomTiles2] = useState<typeof tiles>([]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			// Ensures this runs client-side
			setRandomTiles1(shuffleArray([...tiles]));
			setRandomTiles2(shuffleArray([...tiles]));
		}
	}, []);

	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee className="-delay-[200ms] [--duration:18s]" repeat={6} reverse>
				{randomTiles1.map((review, i) => (
					<Card key={`item-${Number(i) + 1}`} {...review} />
				))}
			</Marquee>
			<Marquee className="[--duration:25s]" repeat={6} reverse>
				{randomTiles2.map((review, i) => (
					<Card key={`item-${Number(i) + 1}`} {...review} />
				))}
			</Marquee>
			<Marquee className="-delay-[300ms] [--duration:20s]" repeat={6} reverse>
				{randomTiles1.map((review, i) => (
					<Card key={`item-${Number(i) + 1}`} {...review} />
				))}
			</Marquee>
			<Marquee className="[--duration:30s]" repeat={6} reverse>
				{randomTiles2.map((review, i) => (
					<Card key={`item-${Number(i) + 1}`} {...review} />
				))}
			</Marquee>
		</div>
	);
}
