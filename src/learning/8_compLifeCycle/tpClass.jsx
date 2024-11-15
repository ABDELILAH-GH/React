import {Component} from "react"
export default class Clock extends Component {
   constructor (props){
      super(props);
      this.state = {
         time : new Date ()
      }
   }
   componentDidMount () {
      this.interval = setInterval(() => {
         this.setState({ time: new Date() });
       }, 1000);
   }
   componentWillUnmount () {
      clearInterval(this.interval)
   }
   render () {
    const { time } = this.state;
    const formatTimeUnit = (unit) => unit.toString().padStart(2, "0");

    const hours = formatTimeUnit(time.getHours());
    const minutes = formatTimeUnit(time.getMinutes());
    const seconds = formatTimeUnit(time.getSeconds());
    

      return (<>
      <h3 className="h1">Horloge </h3>
      <p>{hours} : {minutes} : {seconds}</p>
      </>)
   }
}