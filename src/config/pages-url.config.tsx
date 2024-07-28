// ======={ MAIN }=======
class MAIN {
    private root = ''

    HOME = `${this.root}/`
    CATALOG = `${this.root}/catalog`
    PRODUCT = (id: string | number) => `${this.root}/product/${id}/`
}

export const MAIN_PAGES = new MAIN()
