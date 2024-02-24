import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import './App.css';
import fetchData from "./Fetch";
import Album from "./Album";
import Photo from "./Photo";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path="album/:albumId" element={<Album/>} />
          <Route path="photos/:photoId" element={<Photo/>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
