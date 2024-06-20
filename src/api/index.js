import { GetAllData } from "@/serive/global";

export default async function fetchData(endpoint, params) {
    let url = `${endpoint}`;
    if (params) {
        const queryString = new URLSearchParams(params).toString()
        url += `?${queryString}`;
    }
    try {
        const res = await  GetAllData(url)
        return res
    } catch (err) {
        console.error(err); // Log error to console
        throw new Error('Failed to fetch data'); // Optionally, rethrow the error
    }
}

