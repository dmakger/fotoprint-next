import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// import { Geologica } from "next/font/google";
import Script from "next/script";

import { cls } from "@/shared/lib/classes.lib";
import "./globals.scss";

import { Providers } from "./_providers/app-provider";
import { DESCRIPTION__BASE, SITE_NAME } from "@/shared/data/seo.data";


const montserrat = Montserrat({ 
	subsets: ["latin", "cyrillic"], 
	variable: '--montserrat-font',
	// display: "swap",
});


export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: DESCRIPTION__BASE
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<link rel="icon" type="image/png" sizes="any" href="/favicon.ico" />
			{/* <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" /> */}

            <link rel="manifest" href="/manifest.json" />
			<meta name="application-name" content={SITE_NAME} />

			<body className={montserrat.className}>
				{/* Yandex.Metrika counter */}
                <Script id="yandex-metrika-init" strategy="afterInteractive">
                    {`
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                    ym(99766096, "init", {
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true,
                            webvisor:true
                    });
                `}
                </Script>
                {/* /Yandex.Metrika counter */}

				{/* YANDEX Metrika noscript */}
                <noscript>
                    <div>
                        <img src="https://mc.yandex.ru/watch/99766096" style={{ position: 'absolute', left: '-9999px' }} alt="" />\
                    </div>
                </noscript>
                {/* /YANDEX Metrika noscript */}

				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
