import { Metadata } from "next";

import { MAIN_PAGES } from "@/config/pages-url.config";
import { fetchDetailedProduct } from "@/entities/Product/fetch/product.fetch";
import { PRODUCTION_URL } from "@/shared/data/api.data";
import { DESCRIPTION__BASE, SITE_NAME, URL_SPLIT_SEO } from "@/shared/data/seo.data";
import { ISeoParamsId } from "@/shared/model/seo.model";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { ProductPageContent } from "@/widgets/Pages/Product/ui/ProductPageContent";


export async function generateMetadata(
    { params }: ISeoParamsId,
): Promise<Metadata> {
  
    const product = await fetchDetailedProduct(params.id as string);

    return {
        title: {
            absolute: `${product.title} — ${SITE_NAME}`
        },
        //   description: `Купить товар для бизнеса оптом: «${product.name}» напрямую от поставщика — ${getNameSupplier(supplier)}.${minQuantityProduct}${minOrderProduct} (${product.id})`,
        description: `Купить ${product.title} ${URL_SPLIT_SEO} ${DESCRIPTION__BASE}`,
        alternates: {
            canonical: `${PRODUCTION_URL}${MAIN_PAGES.Product(product.id)}`,
        }
    }
};

export default function ProductPage() {
    return (
        <Wrapper1280>
            <ProductPageContent />
        </Wrapper1280>
    )
}
