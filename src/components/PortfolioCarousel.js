import React from 'react';
import Slider from 'react-slick';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';
import Image from 'next/image';

const contentBlog = [
  { images: "/assets/images/main/aisef1.jpg", desc: 2020, alt: "foto1" },
  { images: "/assets/images/main/aisef2.jpg", desc: 2024, alt: "foto2" },
  { images: "/assets/images/main/aisef3.jpg", desc: 2020, alt: "foto3" },
  { images: "/assets/images/main/aisef4.jpg", desc: 2020, alt: "foto4" },
  { images: "/assets/images/main/aisef5.jpg", desc: 2021, alt: "foto5" },
  { images: "/assets/images/main/aisef6.jpg", desc: 2021, alt: "foto6" },
  { images: "/assets/images/main/aisef7.jpg", desc: 2021, alt: "foto7" },
  { images: "/assets/images/main/aisef8.jpg", desc: 2021, alt: "foto8" },
  { images: "/assets/images/main/aisef9.JPG", desc: 2022, alt: "foto9" },
  { images: "/assets/images/main/aisef10.JPG", desc: 2024, alt: "foto10" },
  { images: "/assets/images/main/aisef11.JPG", desc: 2022, alt: "foto11" },
  { images: "/assets/images/main/aisef12.jpg", desc: 2022, alt: "foto12" },
  { images: "/assets/images/main/23-12.jpg", desc: 2023, alt: "foto13" },
  { images: "/assets/images/main/23-13.jpg", desc: 2023, alt: "foto14" },
  { images: "/assets/images/main/23-14.jpg", desc: 2023, alt: "foto15" },
];



const PortfolioCarousel = () => {
  const settings = {
    arrows: false,
    slidesToShow: 4,
    speed: 300,
    navSpeed: 300,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <Slider
          className="img-carousel-content text-center text-white"
          {...settings}
        >
          {contentBlog.map((item, index) => (
            <div className="item p-3" key={index}>
              <div className="dlab-box portfolio-box">
                <div className="dlab-media dlab-img-effect dlab-img-overlay1">
                  <Image
                    src={item.images}
                    alt={`Image ${item.alt}`}
                    layout="responsive"
                    width={600}
                    height={400}
                  />
                  <div className="overlay-bx">
                    <div className="overlay-icon text-white">
                      <h5>{item.desc}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default PortfolioCarousel;
