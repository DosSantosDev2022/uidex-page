import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/assets/fonts";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
	title: "Page UIDEX",
	description: "Landing page UIDEX",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${poppins.className} antialiased`}>
				<Header />
				<main className="pt-20">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
