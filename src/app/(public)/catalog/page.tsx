import { ProductListContainer } from "@/entities/Product/ui/List/Container/ProductListContainer";
import { ListDirection } from "@/shared/data/list.data";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";

export default function CatalogPage() {
    return (
        <Wrapper1280>
            <ProductListContainer direction={ListDirection.Wrap}/>
        </Wrapper1280>
    )
}
