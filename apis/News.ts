import axios from 'axios'

const newsApiKey = process.env.NEWS_API_AUTH_KEY
export const api = axios.create({
  baseURL: `https://newsapi.org/v2`
})

export const getNews = async ()=>{
    const resp = await api.get(`/top-headlines?country=ng&apiKey=${newsApiKey}` )

    return resp.data
}   
