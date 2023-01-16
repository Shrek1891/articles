export const BASE_URL: string = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=40';
export const searchByCountry = (id: number | string) => {
    return `https://api.spaceflightnewsapi.net/v3/articles/${id}`;
};