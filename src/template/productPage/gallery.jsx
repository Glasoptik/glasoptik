import React, { useEffect, useRef, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Slider from "react-slick";

const Gallery = ({ media }) => {
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
    setGalleryImages(media.filter((image, index) => activeImage !== index));
  }, [activeImage]);

  return (
    <div className="flex-[0.54] max-w-[712px] w-full">
      <div className="relative">
        <Slider ref={(c) => (slider = c)} {...settings}>
          {media.map((image, index) => (
            <div className="space-x-2 z-40" key={index}>
              <GatsbyImage
                image={image.image.gatsbyImageData}
                alt={`${image.altText} || Image ${index + 1}`}
                objectFit="contain"
                className="w-full h-full"
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
            <GatsbyImage
              image={image.image.gatsbyImageData}
              alt={`${image.altText} || Image ${index + 1}`}
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
