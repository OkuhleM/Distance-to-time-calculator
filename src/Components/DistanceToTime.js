import React from 'react';
import { useState } from 'react'

export default function DistanceToTime() {
    const [distance, setDistance] = useState({ value:"0", walking: 0, driving: 0, flying: 0 });

    var averageSpeedWhenWalking = 3.6;
    var averageSpeedWhenDriving = 50;
    var averageSpeedWhenFlying = 800;

    const updateDstanceValue = e => setDistance({
        value: e.target.value,
        walking: ((+e.target.value * 60) / averageSpeedWhenWalking) ,
        driving: ((+e.target.value * 60) / averageSpeedWhenDriving),
        flying: ((+e.target.value * 60) / averageSpeedWhenFlying),
        
    })


// var distancwhene = Number(n);
const distanceWhenWalking =()=>{
    var whour = (distance.walking - distance.walking % 60 ) / 60;
    var wminutes = distance.walking % 60;
    var wseconds = wminutes / 60;
    
        console.log("walking", `hours :${whour.toFixed(0)}, min :${wminutes.toFixed(0)}, sec: ${wseconds.toFixed(0)} `);
        return `hours :${whour.toFixed(0)}, min :${wminutes.toFixed(0)}, sec: ${wseconds.toFixed(0)} `
}
    const distanceWhenDriving = () =>{
    var dhour = (distance.driving - distance.driving % 60 ) / 60;
    var dminutes = distance.driving % 60;
    var dseconds = dminutes / 60;
    
    console.log("driving", `hours :${dhour.toFixed(0)}, min :${dminutes.toFixed(0)}, sec: ${dseconds.toFixed(0)} `);
    return  `hours :${dhour.toFixed(0)}, min :${dminutes.toFixed(0)}, sec: ${dseconds.toFixed(0)} `
    }

    const distanceWhenUsingAflight = ()=>{
    var fhour = (distance.flying - distance.flying % 60 ) / 60;
    var fminutes = distance.flying % 60;
    var fseconds = fminutes/60;
    
    console.log("flight", `hours :${fhour.toFixed(0)}, min :${fminutes.toFixed(0)}, sec: ${fseconds.toFixed(0)} `);
    return `hours :${fhour.toFixed(0)}, min :${fminutes.toFixed(0)}, sec: ${fseconds.toFixed(0)} `
    }


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
            <p>{distanceWhenWalking(distance.walking)}</p>
            <h2>Distance When Driving:</h2>
            <p>{distanceWhenDriving(distance.driving)}</p>
            <h2>Distance When Using A Flight:</h2>
            <p>{distanceWhenUsingAflight(distance.flying)}</p>

            </div>
           
        </div>
    )
}
