import { MAIN_PAGES } from "@/config/pages-url.config";


/**
 * Данные для полки с самыми популярными продуктами за 7 дней 
 */
export const POPULAR_PRODUCTS_WEEK = {
    title: 'Хит недели',
    href: MAIN_PAGES.CollectionPopularByDays(7),
}

/**
 * Данные для полки с самыми популярными продуктами за 30 дней 
 */
export const POPULAR_PRODUCTS_MONTH = {
    title: 'Хит месяца',
    href: MAIN_PAGES.CollectionPopularByDays(30),
}
