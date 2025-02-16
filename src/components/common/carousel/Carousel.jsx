import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselImages from "../../../data/carousel";

const Carousel = () => {
  var settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true, // Enables spacing
    centerPadding: "0px",
  };
  return (
    <div className="h-fit w-full overflow-hidden rounded-xl mb-3">
      <Slider {...settings}>
        {carouselImages.map((image) => (
          <div key={image} className="px-2">
            <img src={image} className="object-cover h-40 rounded-xl" alt="Image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
