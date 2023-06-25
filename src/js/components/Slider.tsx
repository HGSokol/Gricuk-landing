import { useState, useEffect } from 'react';
import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import slider4 from '../../assets/slider4.jpg';

const img = [
  <img
    src={slider1}
    alt="slider1"
    className="w-[655rem] h-[525rem] bg-gray-200 text-[black] text-[20rem] object-cover"
  />,
  <img
    src={slider2}
    alt="slider1"
    className="w-[655rem] h-[525rem] bg-gray-200 text-[black] text-[20rem] object-cover"
  />,
  <img
    src={slider3}
    alt="slider1"
    className="w-[655rem] h-[525rem] bg-gray-200 text-[black] text-[20rem] object-cover"
  />,
  <img
    src={slider4}
    alt="slider1"
    className="w-[655rem] h-[525rem] bg-gray-200 text-[black] text-[20rem] object-cover"
  />,
];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const res = current === img.length - 1 ? 0 : current + 1;

        return res;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <>
      <div className="relative w-[655rem] h-[525rem] rounded-[12rem] m-auto flex items-center overflow-hidden box-border">
        <div
          className="absolute w-full h-full transition-all duration-[500ms] -translate-x-[100%]"
          key={prevImgIndex}
        >
          {img[prevImgIndex]}
        </div>
        <div className="absolute w-full h-full transition-all duration-[500ms]" key={activeIndex}>
          {img[activeIndex]}
        </div>
        <div
          className="absolute w-full h-full transition-all duration-[500ms] translate-x-[100%] "
          key={nextImgIndex}
        >
          {img[nextImgIndex]}
        </div>
      </div>
    </>
  );
}

export default Slider;
