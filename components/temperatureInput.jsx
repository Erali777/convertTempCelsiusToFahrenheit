import React from 'react';
import BoilingVerdict from './boilingVerdict';

const scaleNames = {
   c: 'Celsius',
   f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {temperature: ''};
      this.handleChange = this.handleChange.bind(this);
   }
   handleChange(e) {
      //this.setState({temperature: e.target.value});
      this.props.onTemperatureChange(e.target.value);
   }
   
   render() {
      //const temperature = this.state.temperature;
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
         <fieldset>
            <legend>Add temperature in {scaleNames[scale]}:</legend>
            <input value={temperature} onChange={this.handleChange}/>
            {/* <BoilingVerdict celsius={parseFloat(temperature)}/> */}
         </fieldset>
      )
   }
}

export default TemperatureInput;