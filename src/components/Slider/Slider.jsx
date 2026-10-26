import 'swiper/css';
import './Slider.scss';
import classNames from 'classnames';
import SliderNavigation from "./components/SliderNavigation";

const defaultSliderParams = {
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 20,
  breakpoints: {
    481: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      allowTouchMove: false,
    },
    1441: {
      spaceBetween: 30,
      slidesPerView: 5,
      slidesPerGroup: 5,
    }
  }
}

const Slider = (props) => {
  const {
    className,
    children,
    navigationTargetElementId = null,
    sliderParams = defaultSliderParams,
    isBeyondTheViewPortOnMobileS,
    hasScrollBar = true
  } = props;

  return (
    <div
      className={classNames('slider', {
        'slider--beyond-the-view-port-on-mobile-s': isBeyondTheViewPortOnMobileS,
      })}
      data-js-slider={JSON.stringify({
          sliderParams,
          navigationTargetElementId,
      })}
    >
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => {
            return (
              <li
                className="slider__item swiper-slide"
                key={index}
              >
                {slide}
              </li>
            )
          })}
        </ul>
        {!navigationTargetElementId && (
          <SliderNavigation
            className="slider__navigation"
          />
        )}

        {hasScrollBar && (
          <div
            className="slider__scrollbar visible-mobile"
            data-js-slider-scrollbar=""
          />
        )}
      </div>
    </div>
  )
}

export default Slider;