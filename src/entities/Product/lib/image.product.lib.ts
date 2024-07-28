import { getImage } from "@/shared/lib/image.lib"
import ProductDefaultSVG from '@/shared/assets/ProductDefault.svg'

export const getProductImage = (image?: string | null) => {
    return image ? getImage(image) : ProductDefaultSVG
} 