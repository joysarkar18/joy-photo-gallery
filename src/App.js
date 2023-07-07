import Card from "./Componants/Card";
import NavBar from "./Componants/NavBar";
import { createClient } from 'pexels';
import { useEffect , useState } from "react";

const client = createClient('ZSjOnt4sEf56eVz9tcFPA1yXDQ4RubPeAdrVfeCowG2trYS2vFEhr8UE');
const query = 'cat';




function App() {
  const [photoList , setPhotos] = useState([]);
  useEffect(()=>{
    client.photos.search({ query, per_page: 60 }).then(photosOb => {
      setPhotos(photosOb.photos);
    });
  } , [] );


  return (
   
    console.log(photoList),
    
    <div className="App bg-gray-900 ">
      <header className="App-header">

       <NavBar></NavBar>
       <div className="columns-1 md:columns-4 gap-3 p-5">

        {photoList.map((photo)=>{
          return (
            <Card link = {photo.src.large} ></Card>
          )
        })}
        
       </div>

      </header>
    </div>
  );
}

export default App;
