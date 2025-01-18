import { TxtType } from "../model/txt.model"

/**
 * @param type - `TxtType`
 * @returns `React.ElementType` исходя из `TxtType` 
 */
export const getTxtTag = (type: TxtType): React.ElementType => {
    return type as React.ElementType
}