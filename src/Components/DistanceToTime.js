import React from 'react';
import { useState } from 'react'

export default function DistanceToTime() {
    const [distance, setDistance] = useState({ value:"0", walking: 0, driving: 0, flying: 0 });

    var averageSpeedWhenWalking = 3.6;
    var averageSpeedWhenDriving = 50;
    var averageSpeedWhenFlying = 800;

    const updateDstanceValue = e => setDistance({
        value: e.target.value,
        walking: ((+e.target.value * 60) / averageSpeedWhenWalking).toFixed(0),
        driving: ((+e.target.value * 60) / averageSpeedWhenDriving).toFixed(0),
        flying: ((+e.target.value * 60) / averageSpeedWhenFlying).toFixed(0),
        
    })

    const convertTime = (n) => {
        var givenNumber = n;
        var convertedHours = (givenNumber / 60);
        var minutes = Math.floor(givenNumber / 60);
        var minutesToBeReturned = ((convertedHours - minutes) / 60).toFixed(0);
        var convertedMinutes = Math.round(minutesToBeReturned);
        return minutes + " hour(s) and " +  minutesToBeReturned   + " minutes";
    }

    // function timeConvert(n) {
    //     var num = n;
    //     var hours = (num / 60);
    //     var rhours = Math.floor(hours);
    //     var minutes = (hours - rhours) * 60;
    //     var rminutes = Math.round(minutes);
    //     return num  + " hour(s) and " + rminutes + " minute(s).";
    //     }
        


    return (
        <div>
            <form className="container">
                <div>
                    <h1>Enter The Distance In Km</h1>
                    <input
                        type="number"
                        value={distance.value}
                        onChange={(e) =>updateDstanceValue(e)}
                    >
                    </input>
                   
                </div>
            </form>
<div>
            <h2>Distance When Walking:</h2>
            <p>{convertTime(distance.walking)}</p>
            <h2>Distance When Driving:</h2>
            <p>{convertTime(distance.driving)}</p>
            <h2>Distance When Using A Flight:</h2>
            <p>{convertTime(distance.flying)}</p>

            </div>
           
        </div>
    )
}
