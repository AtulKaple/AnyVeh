import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);
  const changeSlide = (direction) => {
    if(direction==='left'){
        if (imageIndex===0) {
            setImageIndex(images.length-1)
        }else{
            setImageIndex(imageIndex-1)
        }
    }else{
        if (imageIndex===images.length-1) {
            setImageIndex(0)
        } else {
            setImageIndex(imageIndex+1)
        }

    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="https://img.icons8.com/?size=100&id=vUrV095nbqeJ&format=png&color=FFFFFF" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="https://img.icons8.com/?size=100&id=vUrV095nbqeJ&format=png&color=FFFFFF" alt="" className="right" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            <img src="https://img.icons8.com/?size=100&id=3062&format=png&color=FFFFFF" alt="" />
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[2]} alt="" onClick={() => setImageIndex(2)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
