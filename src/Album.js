import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import fetchData from "./Fetch"
const AlbumsDtataUrl ='https://jsonplaceholder.typicode.com/albums'
export default function Album(){
  const {albumId} = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData(){try{
      const response = await fetch(AlbumsDtataUrl)
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
  const currentAlbums = data.filter(e=>e.userId === +albumId)
  console.log(currentAlbums)
  return(
    <div>
      {currentAlbums.map(e => (<div key={e.id}>
        <h5>{e.title}</h5>
        <Link to={`/photos/${e.id}`} relative="replace">Photos</Link>
        </div>))}
    </div>
  )
}