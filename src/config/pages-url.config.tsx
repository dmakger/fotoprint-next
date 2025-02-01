import { IProductPopularRequest } from "@/entities/Product/model/props.product.model"

// ======={ MAIN }=======
class MAIN {
    private root = ''

    Home = `${this.root}/`

    Catalog = `${this.root}/catalog`
    
    CollectionPopularByDays = (days: IProductPopularRequest['days']) => {
        return `${this.root}/collection/popular/${days}`
    }
    
    Product = (id: string | number) => `${this.root}/product/${id}/`
}

export const MAIN_PAGES = new MAIN()
