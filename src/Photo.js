import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
const photosDataUrl = 'https://jsonplaceholder.typicode.com/photos'
export default function Photo(){
  const {photoId} = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData(){try{
      const response = await fetch(photosDataUrl)
      const respData = await response.json()
      setData(respData)
    }
    catch(error){
      console.error('Ooops',error)
      throw error
    }
  }
  fetchData()
  }, []
  );
  const currentPhotos = data.filter(e=>e.albumId === +photoId)
  console.log(currentPhotos)
  return(
    <div>
      {currentPhotos.map(e=>(<div key={e.id}><img src={e.url}></img></div>))}
    </div>
  )
}