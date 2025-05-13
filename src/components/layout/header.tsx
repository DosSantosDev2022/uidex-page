"use client";

import {
	Button,
	Navigation,
	NavigationItem,
	NavigationList,
} from "@/components/ui";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const handleOpenMenu = () => setIsOpen(!isOpen);

	const links = [
		{ label: "Início", url: "/#hero" },
		{ label: "Sobre nós", url: "/#about" },
		{ label: "Serviços", url: "/#services" },
		{ label: "Contato", url: "/#contact" },
	];

	// Scroll detection
	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={twMerge(
				"fixed top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-sm",
				scrolled
					? "bg-background/90 border-b border-primary shadow"
					: "bg-transparent",
			)}
		>
			<div className="px-4 lg:px-14 py-5 flex flex-col lg:flex-row items-center justify-between">
				{/* Logo + Toggle Mobile */}
				<div className="flex items-center justify-between w-full lg:w-auto">
					<h1 className="text-4xl font-bold">Uidex</h1>
					<Button
						onClick={handleOpenMenu}
						sizes="icon"
						className="lg:hidden"
						aria-label="Toggle menu"
					>
						{isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
					</Button>
				</div>

				{/* Navegação */}
				<div
					className={twMerge(
						`
						transition-all duration-300 ease-in-out overflow-hidden
						w-full lg:w-auto
						flex-col lg:flex-row items-start lg:items-center
						gap-5 lg:gap-8
						lg:!max-h-none lg:!opacity-100 lg:!translate-y-0 lg:flex
					`,
						isOpen
							? "max-h-[500px] opacity-100 translate-y-0"
							: "max-h-0 opacity-0 -translate-y-2",
					)}
				>
					<Navigation>
						<NavigationList className="flex flex-col lg:flex-row gap-5 lg:gap-2">
							{links.map((link) => (
								<Link key={link.label} href={link.url}>
									<NavigationItem hoverType="text">{link.label}</NavigationItem>
								</Link>
							))}
						</NavigationList>
					</Navigation>
					<div className="flex gap-2 w-full lg:w-auto">
						<Button sizes="xs">Começar</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
