// pages/index.js
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

// Pastikan CSS dari slick-carousel diimpor dengan benar
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Gambar di folder public
const Slider1 = "/assets/images/main/NISEEF AISEEF 2025-244.jpg";
const Slider2 = "/assets/images/main/aisef2.jpg";
const Slider3 = "/assets/images/main/NISEEF AISEEF 2025-39.jpg";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div className="owl-next la la-angle-right" onClick={onClick} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div
        className="owl-prev la la-angle-left"
        onClick={onClick}
        style={{ zIndex: 1 }}
      />
    </div>
  );
}

const HomeOwlSlider = () => {
  const settings = {
    arrows: true,
    dots: true,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider
      className="owl-slider owl-carousel owl-theme owl-none"
      {...settings}
    >
      <div className="item slide-item">
        <div className="slide-item-img">
          <Image src={Slider1} alt="Slider Image 1" width={1200} height={800} />
        </div>

        <div className="slide-content overlay-primary">
          <div className="slide-content-box container">
            <div className="max-w600 text-white">
              <h2 className="text-white font-weight-400">
                ASEAN INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                <br />
              </h2>

              <h2 className="text-white font-weight-400">
                <b>Close Registration for 2026</b>
                <br />
              </h2>

              <a
                href="https://youtu.be/LAvjaf3Ztjs?si=4nFmtyUo3JITJ5n9"
                rel="noreferrer noopener"
                target="_blank"
                className="site-button m-r10 white button-lg"
              >
                After Movie
              </a>
              <Link href="" legacyBehavior>
                <a
                  rel="noreferrer noopener"
                  className="site-button m-r10 white button-lg"
                >
                  Close Regist
                </a>
              </Link>

              <a
                href="https://drive.google.com/file/d/15pFq6pdV92j0LhJ5_P8-qTwgJCr3_t7-/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="site-button m-r10 white button-lg"
              >
                Guide Book
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="item slide-item">
        <div className="slide-item-img">
          <Image src={Slider2} alt="Slider Image 2" width={1200} height={800} />
        </div>
        <div className="slide-content overlay-primary">
          <div className="slide-content-box container">
            <div className=" text-white">
              <h2 className="text-white font-weight-400">
                ASEAN INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                <br />
              </h2>

              <h2 className="text-white font-weight-400">
                <b>Close Registration for 2026</b>
                <br />
              </h2>

              <a
                href="https://youtu.be/LAvjaf3Ztjs?si=4nFmtyUo3JITJ5n9"
                rel="noreferrer noopener"
                target="_blank"
                className="site-button m-r10 white button-lg"
              >
                After Movie
              </a>
              <Link href="" legacyBehavior>
                <a
                  rel="noreferrer noopener"
                  className="site-button m-r10 white button-lg"
                >
                  Close Regist
                </a>
              </Link>
              <a
                href="https://drive.google.com/file/d/15pFq6pdV92j0LhJ5_P8-qTwgJCr3_t7-/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="site-button m-r10 white button-lg"
              >
                Guide Book
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="item slide-item">
        <div className="slide-item-img">
          <Image src={Slider3} alt="Slider Image 3" width={1200} height={800} />
        </div>
        <div className="slide-content overlay-primary">
          <div className="slide-content-box container">
            <div className="max-w600 text-white">
              <h2 className="text-white font-weight-400">
                ASEAN INNOVATIVE SCIENCE ENVIRONMENTAL AND ENTREPRENEUR FAIR
                <br />
              </h2>

              <h2 className="text-white font-weight-400">
                <b>Close Registration for 2026</b>
                <br />
              </h2>

              <a
                href="https://youtu.be/LAvjaf3Ztjs?si=4nFmtyUo3JITJ5n9"
                rel="noreferrer noopener"
                target="_blank"
                className="site-button m-r10 white button-lg"
              >
                After Movie
              </a>
              <Link href="" legacyBehavior>
                <a
                  rel="noreferrer noopener"
                  className="site-button m-r10 white button-lg"
                >
                  Close Regist
                </a>
              </Link>
              <a
                href="https://drive.google.com/file/d/15pFq6pdV92j0LhJ5_P8-qTwgJCr3_t7-/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="site-button m-r10 white button-lg"
              >
                Guide Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HomeOwlSlider;
