/* eslint-disable no-unused-vars */
import { useState } from 'react';

function HomeCard(props) {
  const modal = props;
  const slideModal = modal.slides;
  const [currentIndex, setCurrentIndex] = useState(0);

  for (let i = 0; i < slideModal[currentIndex].links.length; i += 1) {
    console.log(slideModal[currentIndex].links.url);
  }

  const slideBackground = {

    backgroundImage: `url(${slideModal[currentIndex].links[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideModal.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slideModal.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      {slideModal.map((i) => (
        <div className="relative h-full" key={i}>
          <div>
            <button
              onClick={goToPrevious}
              type="button"
              className="absolute top-1/3 anslate-x-2/4 translate-y-0 left-10 text-4xl text-white md:z-50 cursor-pointer"
            >
              ❰
            </button>
            <button
              onClick={goToNext}
              type="button"
              className="absolute top-1/3 translate-x-2/4 translate-y-0 right-16 text-4xl text-white md:z-50 cursor-pointer"
            >
              ❱
            </button>
          </div>
          <div
            style={slideBackground}
            className=" h-52 rounded-3xl bg-cover bg-center m-5 sm:w-80"
          />
          <p>
            {i.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HomeCard;
