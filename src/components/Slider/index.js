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
        defaultValue={defaultValue ? defaultValue : defaultPropsObject.defaultValue}
        min={min ? min : defaultPropsObject.min}
        max={max ? max : defaultPropsObject.max}
        className={sliderClass}
        onChange={handleSliderChange}
        step={step ? step : defaultPropsObject.step}
      />
    </div>
  );
}
//-----if you are not sending this as a prop then it will use this props so that code will not break
const defaultPropsObject = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 0,
};
