import Card from "./Componants/Card";
import NavBar from "./Componants/NavBar";
import { createClient } from 'pexels';
import { useEffect , useState } from "react";
const client = createClient('ZSjOnt4sEf56eVz9tcFPA1yXDQ4RubPeAdrVfeCowG2trYS2vFEhr8UE');




function App() {
  const [photoList , setPhotos] = useState([]);
  const [pageNo , setPageNo] = useState(Math.floor(Math.random() * 700));
  const [sPage , setSpage] = useState(1);
  const [query , setQuery] = useState("");
  const [loading , setLoading] = useState(true);


  
  const handleScrollEvent = () =>{
    try {
      if((window.innerHeight + document.documentElement.scrollTop + 6) >= document.documentElement.scrollHeight){
        setPageNo((prev) => prev+1);
        setSpage((prev) => prev+1);
      }
      
    } catch (error) {
      setLoading(true);

      console.log(error);
      
    }
  }

  useEffect(()=>{  
    try {
      
      client.photos.curated({ per_page: 10 ,page:pageNo }).then(photosOb => {
        setPhotos((prev) => [...photosOb.photos] );
        setLoading(false);
        setPageNo((prev) => prev+1)
      });
    } catch (error) {
      
      setLoading(true);
      
    }
  } , [] );

  useEffect(()=>{
    try {
      if(query===""){
        client.photos.curated({ per_page: 1 ,page:pageNo }).then(photosOb => {
          setPhotos((prev) => [ ...prev , ...photosOb.photos] );
          setLoading(false);
        });
      }

      else{
        client.photos.search({ query, per_page: 10 , page:sPage }).then(photosOb => {
          setPhotos((prev) => [...prev , ...photosOb.photos]);
        });
      }
      
    } catch (error) {
      
      setLoading(true);
      
    }
  } , [pageNo , sPage ])

  useEffect(()=>{
    window.addEventListener('scroll' , handleScrollEvent);

  },[]);

  


  const onSubmitHan = ()=>{
    client.photos.search({ query, per_page: 10 }).then(photosOb => {
      setPhotos(photosOb.photos);
    });
    
  }


  return (
    console.log(photoList),
   

    
    <div className="App bg-gray-900 ">
      <header className="App-header">

       <NavBar query = {query} setQuery = {setQuery} setPhotoList = {onSubmitHan}></NavBar>
       <div className="min-h-full  columns-1 md:columns-4 gap-3 p-5">
        
        { loading? <div>
          <h1 className="text-white h-screen text-center flex justify-center items-center">Loading...</h1>
        </div>: photoList.map((photo)=>{
          return (
            <Card key = {photo.id} link = {photo.src.large}  downloadLink = {photo.src.large2x} ></Card>
          )
        })}
        
       </div>

      </header>
    </div>
  );
}

export default App;
