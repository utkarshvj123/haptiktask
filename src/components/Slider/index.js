import React from "react";
import "./style.scss";

export default function Slider(props) {
  const {
    slidersLabels,
    slidersWeights,
    handleSliderChange,
    min,
    max,
    step,
    sliderClass,
    defaultValue,
    conatinerCss,
    headingCss,
  } = props;
  return (
    <div style={conatinerCss}>
      <span className="other" id={slidersLabels} style={headingCss}>
        {slidersLabels} {slidersWeights}%
      </span>
      <input
        id={slidersLabels}
        type="range"
        defaultValue={defaultValue}
        min={min}
        max={max}
        className={sliderClass}
        onChange={handleSliderChange}
        step={step}
      />
    </div>
  );
}
