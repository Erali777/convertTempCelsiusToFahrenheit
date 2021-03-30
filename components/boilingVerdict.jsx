function BoilingVerdict(props) {
   if(props.celsius >= 100) {
     return <p>Water is boiling!</p>
   } else {
     return <p>Sorry, water is not boiling!</p>
   }
}

export default BoilingVerdict;