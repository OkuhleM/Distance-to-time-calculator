import React from 'react';
import { useState } from 'react'

export default function DistanceToTime() {
    const [distance, setDistance] = React.useState({ walking: 0, driving: 0, flying: 0});
   
    var averageSpeedWhenWalking = 3.6;
    var averageSpeedWhenDriving = 50;
    var averageSpeedWhenFlying = 800;

    const updateWalkingValue = e => setDistance ({
        value: e.target.value,
        walking: ((+e.target.value *60)/averageSpeedWhenWalking).toFixed(1),
        driving: ((+e.target.value *60)/averageSpeedWhenDriving).toFixed(0),
        flying: ((+e.target.value *60)/averageSpeedWhenFlying ).toFixed(1)
    })
    const updateDrivingValue = e => setDistance ({
        value: e.target.value,
        driving: ((+e.target.value *60)/averageSpeedWhenDriving).toFixed(2),
        
    })

    const updateFlyingValue = e => setDistance ({
        value: e.target.value,
        flying: ((+e.target.value *60)/averageSpeedWhenFlying ).toFixed(1)

        
    })

   

    return (
        <div>
               <form className="container">
               <div>
        <h1>Enter The Distance</h1>
        <input
            type = "number"
            value = {distance.value}
            onChange = {updateWalkingValue} >
          </input>
          </div>
                    </form>
      
                    {/* Time it When Walking:<br/>
                    <input type="number" 
                    value = {distance.walking} 
                    onChange = {updateWalkingValue}></input><br/>
                    Distance when Driving<br/>
                    <input type="number" 
                    value = {distance.driving} 
                    onChange = {updateDrivingValue}></input><br/>
                    Distance When Flight<br/>
                    <input type="number" 
                    value = {distance.flying} 
                    onChange = {updateFlyingValue}></input><br/> */}

                    <p>{updateDrivingValue.driving}</p>
                
        </div>
    )
}
