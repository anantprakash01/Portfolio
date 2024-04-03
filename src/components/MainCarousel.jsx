import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MainCarousel = ({images}) => {
  const isMobile = window.innerWidth <= 600;
  const imgStyle={
    height:isMobile?'80%':'60%',
  }
  return (
            <Carousel showThumbs={false}
            autoPlay='true'
            infiniteLoop
            dynamicHeight={true}
            width='100%'
            height='100%'
            interval={1500}            
            >
          {images.map((image, index) => (
            <div style={{height:"100%" }} key={index}>
              <img style={imgStyle} src={image}  className="img-fluid" alt="" />
            </div>
          ))}
        </Carousel>
  )
}

export default MainCarousel
