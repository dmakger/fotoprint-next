import { Metadata } from "next";

import { DESCRIPTION__BASE, SITE_NAME } from "@/shared/data/seo.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { PopularProductShelf } from "@/widgets/Shelf/Product/Popular/ui/PopularProductShelf";


export const metadata: Metadata = {
    title: {
        absolute: `${SITE_NAME} — Заказ фотографий, багетов, фотокниг`
    },
    description: DESCRIPTION__BASE
}

export default function Home() {
	return (
		<Wrapper1280>
			<PopularProductShelf days={7} />
			<PopularProductShelf days={30} />
		</Wrapper1280>
  );
}
