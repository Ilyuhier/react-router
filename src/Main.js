import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
const usersDataUrl = 'https://jsonplaceholder.typicode.com/users'
export default function Main(){
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(usersDataUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <div className="userList">
      {data.map(e=>(<div key={e.id} className="userBlock">
        <p>{e.name}</p>
        <Link to={`album/${e.id}`}>Album</Link>
      </div>))}
    </div>
  ) 
}