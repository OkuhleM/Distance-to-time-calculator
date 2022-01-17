import React from 'react';
import { useState } from 'react'

export default function DistanceToTime() {
    const [distance, setDistance] = useState({ value:"0", walking: 0, driving: 0, flying: 0 });

    var averageSpeedWhenWalking = 3.6;
    var averageSpeedWhenDriving = 50;
    var averageSpeedWhenFlying = 800;

    const updateDstanceValue = e => setDistance({
        value: e.target.value,
        walking: ((+e.target.value * 60) / averageSpeedWhenWalking).toFixed(1),
        driving: ((+e.target.value * 60) / averageSpeedWhenDriving).toFixed(1),
        flying: ((+e.target.value * 60) / averageSpeedWhenFlying).toFixed(1)
    })
    



    return (
        <div>
            <form className="container">
                <div>
                    <h1>Enter The Distance</h1><hr />
                    <input
                        type="number"
                        value={distance.value}
                        onChange={(e) =>updateDstanceValue(e)}
                    >
                    </input>
                </div>
            </form>

            <p>{distance.walking}</p>
            <p>{distance.driving}</p>
            <p>{distance.flying}</p>


           
        </div>
    )
}
