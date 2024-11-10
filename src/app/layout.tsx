import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import { cls } from "@/shared/lib/classes.lib";
import "./globals.scss";
import { Providers } from "./_providers/app-provider";
import { SITE_NAME } from "@/shared/data/seo.data";


const geologica = Geologica({ 
	subsets: ["latin", "cyrillic"], 
	variable: '--geologica-font',
	// display: "swap",
});


export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Платформа для поиска оптовых поставщиков и покупателей, маркетплейс для бизнеса, B2B площадка'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru" className={cls(geologica.className)}>
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
