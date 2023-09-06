// components/CarouselControls.tsx
import classNames from "classnames";

const CarouselControls = (props) => {
  return (
    <div className="flex justify-between absolute w-[50%] md:px-[7em] md:-mt-[18em] z-10 -mt-[9em]">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          "bi bi-arrow-left text-white bg-gray-600/50": true
        })}
      >
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          "bi bi-arrow-right text-white bg-gray-600/50": true
        })}
      >
      </button>
    </div>
  );
};
export default CarouselControls;
