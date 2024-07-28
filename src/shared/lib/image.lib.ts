import { MEDIA_API_URL, PRODUCTION_API_URL } from "../data/api.data"


export const getImage = (image: string): string => {    
    if (typeof image !== "string")
        return image
    if (image.startsWith('http'))
        return image
    // return `${MEDIA_API_URL}/${image}`
    let newImage = MEDIA_API_URL
    if (!image.startsWith('/'))
        newImage += '/'
    return newImage + image
}