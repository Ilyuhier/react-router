import { baseUrl } from "./consts";

export default async function fetchData(url){
  try{
    const response = await fetch(url)
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    const data = await response.json()
    // console.log(typeof(data))
    return data
  }
  catch(error){
    console.error('Error fetching data:', error)
    throw error
  }
}