import React, { useState } from "react";


const Clock = () => {


const now = new Date().toLocaleTimeString();

const [time, setTime] = useState(now)

const updateTime =() =>{
    setInterval(updateTime,1000)
    const newTime = new Date().toLocaleTimeString();
setTime(newTime)
}

    return (
        <div>
<h2> {time}</h2>

<button className ="time-btn" onClick = {updateTime}>Get time</button>
        </div>

    )
};

export default Clock;