import React, { Component } from "react";
import Slider from "../../components/Slider";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderName: "Display Name",
      defaultValue: 10,
    };
  }

  handleSliderChange = (event) => {
    this.setState({
        defaultValue: event.target.value,
    });
  };

  render() {
    const { defaultValue, sliderName } = this.state;
    const { min, max, step } = objectDetail;
    return (
      <Slider
        handleSliderChange={this.handleSliderChange}
        slidersWeights={defaultValue}
        slidersLabels={sliderName}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        sliderClass="slider"
        conatinerCss={{
          marginTop: "20px",
          marginBottom: "20px",
          margin: "10% 30%",
        }}
        headingCss={{
          fontSize: "30px",
          marginBottom: "6px",
          fontWeight: "400",
          fontFamily: "serif",
        }}
      />
    );
  }
}
const objectDetail = {
  min: 0,
  max: 100,
  step: 1,
};
