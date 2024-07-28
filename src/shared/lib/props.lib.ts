/**
 * Переданный `props` переводит в строку.  
 * Используется для параметров `url`
 */
export const propsToString = <T extends object>(props: T) => {
    return Object.keys(props).map(key => {
        let value = props[key as keyof T];
        if (value === undefined)
            return ''
        return `${key}=${value}`
    }).join('&')
}