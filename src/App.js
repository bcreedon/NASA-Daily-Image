import React, {useEffect, useState} from 'react';
import Image from "./image"
import './App.css';

const App = ()  => {

  const [images,setImages] = useState(0);

  useEffect(() => {
    getImages();
  }, []);

  //Get an APIkey from https://api.nasa.gov/ and add it below:
  const getImages = async () => {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY");
    const data = await response.json();
    setImages(data);
    console.log(data);
  };


  return (
    <div className="App">
      <div className="images">
      {
        <Image
        url={images.url}
        copyright={images.copyright}
        title={images.title}         
        explanation={images.explanation}
        
        />
     }
      </div>
    </div>
  );

}

export default App;
