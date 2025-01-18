// ======={ MAIN }=======
class MAIN {
    private root = ''

    Home = `${this.root}/`
    Catalog = `${this.root}/catalog`
    // Search = `${this.root}/search`
    Product = (id: string | number) => `${this.root}/product/${id}/`
}

export const MAIN_PAGES = new MAIN()
