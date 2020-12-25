import React from 'react';
import style from './image.module.css'
import ReactPlayer from 'react-player'

const Image = ({title,explanation, url, copyright}) => {
return(
    <div className={style.container}>
        <img src={url} alt="" className={style.image}></img>
        <h1>{title}</h1>       
        <h2>{copyright}</h2>            
        <p>{explanation}</p>
        <ReactPlayer url={url} playing />
        <h1>About this Site:</h1>
        <p>Images and information courtesy of NASA's <a href='https://apod.nasa.gov/apod/astropix.html'>Astronomy Picture of the Day</a>. The data is obtained through NASA's <a href='https://api.nasa.gov/'>API site</a>.</p>          
        <p>The source code for this React project can be found here: <a href="https://github.com/bcreedon/NASA-Daily-Image">https://github.com/bcreedon/NASA-Daily-Image</a></p>
<p>I am a Flagstaff, Arizona programmer who loves AWS and the cloud. Having spent most of past two decades in .NET, this is an exciting new adventure for me. This site was built using 
    a REACT UI and is hosted in an S3 bucket. It is behind Route53 and CloudFront. It also uses an API Gateway with a Lambda Function. I was motivated to build this as part of my AWS Solutions Architect Associate training.</p>
    <p><a href = "https://www.linkedin.com/in/williamcreedon/">linkedin.com/in/williamcreedon/</a></p>
    <p><a href='https://www.privacypolicies.com/privacy/view/f82d0aaea9bfe7a76d4d9d0f577d5982'>Privacy Policy</a> | <a href='https://www.privacypolicies.com/agreement/view/807b8fcfbdcbfaf374562226e85dd911'>Cookies Policy</a></p>
    </div>
);
}

export default Image