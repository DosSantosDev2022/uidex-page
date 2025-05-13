import { Parallax } from "@/components/global/parallaxSection";
import { ScrollAnimation } from "@/components/global/scrollAnimation";
import { Button } from "@/components/ui";
import { brands, services, testimonials } from "@/config/enums";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "UIDEX - Agência Digital Criativa",
	description:
		"Impulsione sua presença online com estratégias personalizadas, design moderno e tecnologia de ponta. Transformamos ideias em experiências digitais.",
	keywords: [
		"agência digital",
		"UIDEX",
		"marketing digital",
		"design",
		"desenvolvimento web",
		"experiência do usuário",
		"sites profissionais",
		"branding",
		"SEO",
	],
	authors: [{ name: "UIDEX Agência Digital" }],
	creator: "UIDEX",
	metadataBase: new URL("https://uidex.vercel.app"),
	openGraph: {
		title: "UIDEX - Agência Digital Criativa",
		description:
			"Soluções digitais completas para sua empresa. Design, desenvolvimento, estratégia e inovação que transformam marcas.",
		url: "https://uidex.vercel.app",
		siteName: "UIDEX",
		locale: "pt_BR",
		type: "website",
		images: [
			{
				url: "https://uidex.vercel.app/og-image.png", // coloque a imagem correta
				width: 1200,
				height: 630,
				alt: "UIDEX - Agência Digital",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function Home() {
	return (
		<>
			<Parallax backgroundImage="/bg.webp" />
			<section id="hero">
				<ScrollAnimation className="flex flex-col justify-center items-center gap-8  py-16 px-4 text-center max-w-screen-xl mx-auto">
					<div className="flex flex-col gap-4 w-full max-w-3xl">
						<h1 className="font-semibold text-3xl sm:text-4xl lg:text-6xl">
							Solução para <span className="text-primary">Agência</span> digital
						</h1>
						<p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
							Impulsione sua presença online com estratégias personalizadas,
							design moderno e tecnologia de ponta. Transformamos ideias em
							experiências digitais que conectam marcas e pessoas.
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center">
						<Button className="rounded-full px-6 py-3 w-full sm:w-auto">
							Começar
						</Button>
						<Button
							variants="secondary"
							className="rounded-full px-6 py-3 w-full sm:w-auto"
						>
							Ver mais
						</Button>
					</div>
				</ScrollAnimation>
			</section>

			<section id="about">
				<div className="mx-auto max-w-7xl  py-16 px-4">
					<ScrollAnimation>
						<div className="relative w-full">
							<Image
								src="/frame-01.webp"
								alt="Colaborador da agencia UIDEX segurando uma prancheta"
								width={1200}
								height={400}
								quality={100}
								className="w-full h-auto object-cover"
							/>
							<div className="absolute inset-0 bg-black/30 z-10" />
						</div>

						<div className="flex lg:flex-row flex-col gap-8 items-center justify-between w-full lg:p-6 p-0">
							<div className="w-full flex justify-start p-2">
								<p className="text-muted/70 text-center text-sm lg:text-lg">
									Combinamos criatividade, tecnologia e estratégia para entregar
									soluções digitais que geram resultados reais. Nossa equipe é
									especializada em transformar desafios em oportunidades de
									crescimento.
								</p>
							</div>
							<div className="w-full flex lg:justify-end justify-center p-2">
								<ul className="flex lg:flex-row flex-col gap-4">
									<li className="flex flex-col items-center gap-2">
										<span className="text-3xl font-bold text-primary">10+</span>
										<span className="text-muted/70">Anos de experiência</span>
									</li>
									<li className="flex flex-col items-center gap-2">
										<span className="text-3xl font-bold text-primary">30+</span>
										<span className="text-muted/70">Prêmios conquistados</span>
									</li>
									<li className="flex flex-col items-center gap-2">
										<span className="text-3xl font-bold text-primary">
											544+
										</span>
										<span className="text-muted/70">Projetos entregues</span>
									</li>
								</ul>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</section>

			<section>
				<div className="bg-muted-foreground py-16 px-4 w-full mx-auto">
					<ScrollAnimation className=" flex flex-col gap-10 items-center text-center">
						<div className="space-y-4">
							<h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
								Confiável pelas melhores{" "}
								<span className="text-primary">marcas</span>
							</h2>
							<p className="max-w-2xl mx-auto text-muted text-sm lg:text-base md:text-lg">
								Empresas líderes confiam em nossas soluções digitais para
								inovar, acelerar resultados e fortalecer sua presença online.
								Juntos, construímos experiências que conectam marcas e pessoas.
							</p>
						</div>

						<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-4xl">
							{brands.map(({ name, icon: Icon }) => (
								<li
									key={name}
									className="flex flex-col items-center gap-2 text-sm font-medium"
								>
									<Icon className="w-10 h-10 text-primary" />
									<span>{name}</span>
								</li>
							))}
						</ul>
					</ScrollAnimation>
				</div>
			</section>

			<section id="services">
				<div>
					<ScrollAnimation className="flex items-center justify-center flex-col p-10 gap-8">
						<div className="flex flex-col items-center gap-8">
							<h3 className="text-2xl lg:text-5xl max-w-3xl text-center font-semibold">
								Oferecemos uma{" "}
								<span className="text-primary">ampla variedade</span> de
								serviços digitais
							</h3>
							<p className="max-w-2xl text-center text-sm md:text-lg">
								Do design de interfaces ao desenvolvimento completo de produtos
								digitais, entregamos soluções personalizadas para fortalecer sua
								marca e gerar resultados reais.
							</p>
						</div>
						<div className="w-full md:w-auto">
							<ul className="space-y-6">
								{services.map((service) => (
									<li
										key={service.title}
										className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-6 border rounded-xl border-muted-foreground"
									>
										<div className="flex items-center gap-3 w-full md:w-auto">
											<service.icon className="w-8 h-8 text-primary flex-shrink-0" />
											<span className="font-semibold">{service.title}</span>
										</div>

										<p className="text-sm text-muted max-w-lg text-start">
											{service.description}
										</p>
									</li>
								))}
							</ul>
						</div>
					</ScrollAnimation>
				</div>
			</section>

			<section>
				<div className=" bg-muted-foreground py-16 px-4">
					<ScrollAnimation className="flex items-center flex-col">
						<h4 className="text-4xl lg:text-5xl max-w-3xl text-center font-semibold mb-12">
							O que dizem nossos <span className="text-primary">clientes</span>
						</h4>

						<div className="grid gap-8 md:grid-cols-3 lg:p-10 p-2">
							{testimonials.map((item) => (
								<div
									key={item.name}
									className="bg-muted/10 rounded-xl p-6 shadow flex flex-col gap-4"
								>
									<p className="text-muted">"{item.testimonial}"</p>

									<div className="flex items-center gap-4 mt-auto">
										<img
											src={item.avatar}
											alt={`Avatar de ${item.name}`}
											className="w-12 h-12 rounded-full object-cover"
										/>
										<div>
											<p className="font-semibold text-primary">{item.name}</p>
											<span className="text-sm text-muted">{item.role}</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</ScrollAnimation>
				</div>
			</section>

			<section id="contact">
				<div className="bg-primary text-primary-foreground">
					<ScrollAnimation className="py-16 px-4 container mx-auto text-center flex flex-col items-center gap-6">
						<h5 className="text-2xl font-bold max-w-2xl">
							Pronto para levar seu negócio ao próximo nível?
						</h5>

						<p className="max-w-xl text-base lg:text-lg opacity-90">
							Fale com a nossa equipe e descubra como podemos transformar suas
							ideias em soluções digitais reais e escaláveis.
						</p>

						<Link
							href="/#contact"
							aria-label="Fale com a nossa equipe"
							className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-full hover:scale-95 transition-all"
						>
							Fale com a gente
							<span className="text-xl">🚀</span>
						</Link>
					</ScrollAnimation>
				</div>
			</section>
		</>
	);
}
