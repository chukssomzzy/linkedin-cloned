import axios from 'axios'

const newsApiKey = process.env.NEWS_API_AUTH_KEY
export const api = axios.create({
  baseURL: `https://newsapi.org/v2`
})

export const getNews = async ()=>{
    try{
    const resp = await api.get(`/top-headlines?country=ng&apiKey=${newsApiKey}` )

    return resp.data
    } catch (e){
        console.log(e)
    }
}   
