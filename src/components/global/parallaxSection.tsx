"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface ParallaxSectionProps {
	backgroundImage: string;
	height?: string; // altura customizável (ex: '100vh', '60vh')
	speed?: number; // velocidade do efeito, ex: 0.5
	className?: string; // classes adicionais
	children?: ReactNode;
	overlayColor?: string;
}

export const Parallax = ({
	backgroundImage,
	height = "100vh",
	speed = 0.5,
	className,
	children,
	overlayColor = "bg-black/50",
}: ParallaxSectionProps) => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return;

			const scrollY = window.scrollY;
			sectionRef.current.style.backgroundPositionY = `${scrollY * speed}px`;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [speed]);

	return (
		<div
			ref={sectionRef}
			className={twMerge(
				"fixed top-0 left-0 w-full bg-cover bg-center z-[-10] pointer-events-none",
				className,
			)}
			style={{
				backgroundImage: `url(${backgroundImage})`,
				height,
				backgroundAttachment: "scroll",
			}}
		>
			<div className={twMerge("absolute inset-0", overlayColor)} />
			<div className="w-full h-full text-center px-4">{children}</div>
		</div>
	);
};
