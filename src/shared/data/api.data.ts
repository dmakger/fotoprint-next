// ===={ LOGIC IS PRODUCTION }====
export const IS_PRODUCTION = false


// API
export const LOCAL_API_URL = "http://127.0.0.1:8000"
export const PRODUCTION_API_URL = "https://api.fotoprintart.ru/"

export const CURRENT_API_URL = IS_PRODUCTION ? PRODUCTION_API_URL : LOCAL_API_URL


// ===={ API URL }====
export const API_URL = `${CURRENT_API_URL}/api`
// export const MEDIA_API_URL = `${CURRENT_API_URL}/media`
export const MEDIA_API_URL = `${CURRENT_API_URL}`

// ===={ FRONT URL }====
export const PRODUCTION_URL = "https://fotoprintart.ru/"
