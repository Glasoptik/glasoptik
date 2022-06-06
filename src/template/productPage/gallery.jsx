import React, { Component, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const images = [
  "https://img.freepik.com/free-vector/realistic-fashion-sun-glasses-men-with-transparent-background_6431-92.jpg?w=2000",
  "https://p7.hiclipart.com/preview/409/887/626/aviator-sunglasses-computer-icons-sunglasses.jpg",
  "https://p7.hiclipart.com/preview/601/953/79/sunglasses-white-goggles-black-sunglasses.jpg",
  "https://i.pinimg.com/originals/47/d1/98/47d198868577a721b6b60cdca7c75067.jpg",
  "https://img.freepik.com/free-vector/realistic-fashion-sun-glasses-men-with-transparent-background_6431-92.jpg?w=2000",
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);

  let slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveImage(next),
  };

  useEffect(() => {
    setGalleryImages(images.filter((image, index) => activeImage !== index));
  }, [activeImage]);

  return (
    <div className="flex-[0.58] max-w-[712px] w-full">
      <div className="relative">
        <Slider ref={(c) => (slider = c)} {...settings}>
          {images.map((image, index) => (
            <div className="space-x-2 z-40" key={index}>
              <img
                src={image}
                alt="slider"
                className="w-full h-[712px] object-contain"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute z-[99999999]  bottom-5 left-5 flex items-center space-x-5 ">
          <button onClick={() => slider.slickPrev()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="7"
              viewBox="0 0 76 7"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g
                  fill="#000"
                  fillRule="nonzero"
                  transform="translate(-1156 -730)"
                >
                  <g transform="translate(1156.5 732.5)">
                    <path d="M6.611-2.25v3H75.25v.5H6.611v3l-7-3.25 7-3.25z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <button onClick={() => slider.slickNext()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="76"
              height="7"
              viewBox="0 0 76 7"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g
                  fill="#000"
                  fillRule="nonzero"
                  transform="translate(-1291 -730)"
                >
                  <g transform="translate(1156.5 732.5)">
                    <path d="M203.389-2.25l7 3.25-7 3.25-.001-3H134.75v-.5h68.638v-3z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-2">
        {galleryImages.map((image, index) => (
          <div className="w-full" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* <Slider
        asNavFor={nav1}
        ref={(slider) => (slider2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className="w-full grid grid-cols-2"
      >
      <div>
      <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}
    </div>
  );
};

export default Gallery;
