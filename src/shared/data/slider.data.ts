/**
 * Варианты пролистования слайдера:  
 * 1. `Amount` - опирается на количество, минимальное возможное `1`
 * 2. `Full` - полное пролистование. Если из 10 элементов показано 3, то перелистование происходит по 3 элемента
 */
export enum SliderPagingVariant {
    Amount = 'amount',
    Full = 'full',
}

/**
 * Минимальное расстояние свайпа для переключения слайда
 */ 
export const SWIPE_THRESHOLD = 50; 
