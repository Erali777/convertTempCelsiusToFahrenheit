import React from 'react';
import BoilingVerdict from './boilingVerdict';
import TemperatureInput from './temperatureInput';

class Calculator extends React.Component {
   constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handlefahrenheitChange = this.handlefahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'}; 
   }
   handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
   }
   handlefahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
   }
   tryConvert(temperature, convert) {
      const input = parseFloat(temperature);
      if(Number.isNaN(input)) {
         return '';
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
   }
   toCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5 / 9;
   }
   tofahrenheit(celsius) {
      return (celsius * 9 / 5) + 32;
   }
   render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.tofahrenheit) : temperature;

      return (
         <div>
            <TemperatureInput 
               scale='c' 
               temperature={celsius}
               onTemperatureChange={this.handleCelsiusChange} />
            <TemperatureInput
               scale='f'
               temperature={fahrenheit}
               onTemperatureChange={this.handlefahrenheitChange} />
            <BoilingVerdict
               celsius={parseFloat(celsius)} />
         </div>
      )
   }
}
export default Calculator;