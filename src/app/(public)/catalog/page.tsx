import { Metadata } from "next";

import { URL_SPLIT_SEO, SITE_NAME, DESCRIPTION__BASE } from "@/shared/data/seo.data";
import { ISeoSearchParams } from "@/shared/model/seo.model";
import { CatalogPageContent } from "@/widgets/Pages/Catalog/ui/CatalogPageContent";



export async function generateMetadata(
    { searchParams }: ISeoSearchParams,
): Promise<Metadata> {
	// SEARCH_PARAMS
	const searchDescSegment = searchParams.q ? `поиск по запросу «${searchParams.q}»` : ''

	const split = URL_SPLIT_SEO

    return {
        title: {
            absolute: `Каталог ${searchDescSegment} — ${SITE_NAME}`
        },
        description: `Каталог ${split} ${searchDescSegment} ${split} ${DESCRIPTION__BASE}`,
    }
};


export default function CatalogPage() {
    return (
        <CatalogPageContent />
    )
}
