import { BACKEND_PARAMS } from "@/config/params/backend.params.config"

/**
 * Интерфейс необходимый для успешной работы `SEO` при работе с детальными страницами.
 */
export interface ISeoParamsId {
    params: {id: string}
}


/**
 * Интерфейс необходимый для успешной работы `SEO` при работе со страницами с `SearchParams`.  
 * @param q - Поиск, берётся из `BACKEND_PARAMS.Search`
 */
export interface ISeoSearchParams{
    searchParams: {
        q?: string,
    }
}