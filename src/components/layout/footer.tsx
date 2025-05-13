import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	const listContact = [
		{
			label: "Email: uidex@gmail.com",
		},
		{
			label: "Tel: (11) 99999-9999",
		},
		{
			label: "Seg - Sex: 08h às 18h",
		},
	];

	const socialLinks = [
		{
			icon: <FaFacebook />,
			url: "/#",
			label: "Facebook",
		},
		{
			icon: <FaInstagram />,
			url: "/#",
			label: "Instagram",
		},
		{
			icon: <FaTwitter />,
			url: "/#",
			label: "Twitter",
		},
	];

	return (
		<footer className="px-4 py-8 md:px-8">
			<div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 items-center gap-8  h-52">
				{/* Logo / About */}
				<div>
					<h2 className="text-2xl font-bold">Uidex</h2>
					<p className="mt-2 text-sm">
						Sua agência favorita online. Qualidade, preço justo e confiança.
					</p>
				</div>
				{/* Contato */}
				<nav>
					<h3 className="text-lg font-semibold mb-2">Contato</h3>
					<ul className="space-y-1 text-sm">
						{listContact.map((list, index) => (
							<li key={index}>{list.label} </li>
						))}
					</ul>
				</nav>

				{/* Redes Sociais */}
				<div>
					<h3 className="text-lg font-semibold mb-2">Redes Sociais</h3>
					<div className="flex gap-4 text-xl">
						{socialLinks.map((link, index) => (
							<Link
								className="hover:scale-95 duration-300 transition-all"
								key={index}
								href={link.url}
								aria-label={link.label}
							>
								{link.icon}
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className="mt-28 border-t border-muted-foreground pt-4 text-xs text-center text-muted">
				© {new Date().getFullYear()} Uidex. Todos os direitos reservados.
			</div>
		</footer>
	);
};

export default Footer;
