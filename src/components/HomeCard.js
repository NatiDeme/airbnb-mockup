/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

const slideStyles = {
  width: '90%',
  height: '200px',
  borderRadius: '27px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  margin: '20px',
};

const rightArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  right: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

const leftArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  left: '32px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

const sliderStyles = {
  position: 'relative',
  height: '100%',
};

const dotsContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
};

const dotStyle = {
  margin: '0 3px',
  cursor: 'pointer',
  fontSize: '20px',
};

const HomeCard = (props) => {
  const me = props;
  const mee = me.slides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? mee.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === mee.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${mee[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground} />
      <div style={dotsContainerStyles}>
        {mee.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
