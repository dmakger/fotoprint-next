import https from 'https'; // Для работы с агентом HTTPS


export const getHttpsAgent = () => {
    return {
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
    }
}
