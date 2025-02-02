import { FC } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { PopularByDaysPageContent } from "@/widgets/Pages/Collection/Popular/Days/PopularByDaysPageContent";
import { IProductPopularRequest } from "@/entities/Product/model/props.product.model";
import { getPopularProductsByDays } from "@/widgets/Shelf/Product/Popular/lib/popular.product.shelf.lib";
import { SITE_NAME, DESCRIPTION__BASE, URL_SPLIT_SEO } from "@/shared/data/seo.data";
import { ISeoSearchParams } from "@/shared/model/seo.model";

interface PopularByDaysPageProps extends ISeoSearchParams {
	params: { days: string };
}

export async function generateMetadata(
    { params, searchParams }: PopularByDaysPageProps,
): Promise<Metadata> {
  
	// DAYS
	// Преобразуем days в число
	const days = Number(params.days) as IProductPopularRequest["days"];


	const validDays: IProductPopularRequest["days"][] = [7, 30];

	// Если days не 7 и не 30 — показываем 404
	if (!validDays.includes(days)) {
		notFound(); // Отправляет пользователя на страницу 404
	}
	
	const popularProductMetaData = getPopularProductsByDays(days)

	// SEARCH_PARAMS
	const searchDescSegment = searchParams.q ? `поиск по запросу «${searchParams.q}»` : ''

	const split = URL_SPLIT_SEO

    return {
        title: {
            absolute: `${popularProductMetaData.title} ${searchDescSegment} — ${SITE_NAME}`
        },
        description: `${popularProductMetaData.title} ${split} ${searchDescSegment} ${split} ${DESCRIPTION__BASE}`,
    }
};
  

// PAGE
const PopularCollectionPage: FC<PopularByDaysPageProps> = ({ params }) => {
	return (
		<Wrapper1280>
			<PopularByDaysPageContent days={+params.days as IProductPopularRequest["days"]}/>
		</Wrapper1280>
  );
}

export default PopularCollectionPage;