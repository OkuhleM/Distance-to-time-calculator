import React, { Component } from 'react'

export default class DistanceToTime extends Component {
    constructor(props){
        super(props)
        this.state = {
            timeRemaining: {}
        }
        this.getTimeRemaining = this.getTimeRemaining.bind(this);
    }

getTimeRemaining = (distance) => {

    var giveDistance = new Date(distance);
    const today = new Date();
    var destination = giveDistance.getTime() - today.getTime();

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(destination);
    var days = 3;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    

    return{
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    }


}



componentWillMount = () => {
    this.setState = {
        timeRemaining: this.getTimeRemaining()
    }
}

    render() {
        const data = this.state.timeRemaining
        console.log("Hello World")
        return (
            <div>
        <form>
        <label> distance</label>
        <input type="number" placeholder="enter your distance"/>
        <button>Calculate</button>
        </form>
                <div>Days{data.days}</div>
                <div>hours{data.state.hours}</div>
                <div>minutes{data.minutes}</div>
                <div>seconds{data.seconds}</div>
                
            </div>
        )
    }
    componentDidMount = () => {
        this.distance = this.props.distanceFormState.startTime.toString();
    }
}
