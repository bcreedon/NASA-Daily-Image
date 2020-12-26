import React, {useEffect, useState} from 'react';
import Image from "./image"
import './App.css';

const App = ()  => {

  const [images,setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const headers = { 'Content-Type': 'application/json', 'authorizationToken': 'allow','x-api-key': 'BBFpMSexiSaaIlmjFdFOr2JNYMrc8KgJ54n8rHBR' }
    const response = await fetch(
      "https://9momhjfvcj.execute-api.us-east-1.amazonaws.com/default/nasa-daily-image",{ headers });
    const data = await response.json();
    setImages(data.body);
    console.log(data);
  };
  //comment

  if (images) {
  return (
    <div className="App">
      <div className="images">


        <Image 
        copyright={images.copyright}
        url={images.url}  
        title={images.title}  
        explanation={images.explanation}           
        />

      </div>
    </div>
  );
      }
      else
      {return null}
}

export default App;
