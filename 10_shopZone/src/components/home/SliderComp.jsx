import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 !px-6">
          <div className="">
            <div className="text-6xl font-bold">Ezber bozan ayakkabılar</div>
            <div className="text-lg !my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              delectus ipsum inventore! Iure officia, totam deleniti nostrum
              temporibus maxime numquam quod in quasi fuga id repellendus ex
              cumque facere cum!
            </div>
            <div className="!border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            className="bg-gray-100 !w-[400px] !h-[400px]"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b9739f66-98f6-42a7-8fe6-6b25ef0b9d83/NIKE+AIR+MAX+PLUS.png"
            alt="img1"
          />
        </div>
        <div className="!flex items-center bg-gray-100 !px-6">
          <div className="">
            <div className="text-6xl font-bold">Ezber bozan ayakkabılar</div>
            <div className="text-lg !my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              delectus ipsum inventore! Iure officia, totam deleniti nostrum
              temporibus maxime numquam quod in quasi fuga id repellendus ex
              cumque facere cum!
            </div>
            <div className="!border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>

          <img
            className="bg-gray-100 !w-[400px] !h-[400px]"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/978c1e3b-30b2-4dbd-bb6e-26a0a2edd858/AIR+MAX+DN+SE.png"
            alt="img2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
