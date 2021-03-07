import React,{useState, useEffect} from 'react';

function Timer({}) {
    var intervalId = 0;
    const [count,setCount] = useState(0); //object destructure
    const [countInterval,setCountInterval] = useState(0); //object destructure

    useEffect(()=> {
        console.log(">> componentDidMount");
        startTimer(); //at the time of componentDidMount
        return ()=>{ //componentDidUnmount
            console.log(">> componentDidUnMount");
            clearInterval(intervalId);
        }
    },[]);
    
    var startTimer = () =>{
        let interval = setInterval(()=>{
            console.log("interval " +count );
            setCount( (a)=>( a+1));
            //setCount((currentValue)=> (currentValue+1));
        }, 1000);
        console.log("interval:"+interval)
        intervalId = interval;
        setCountInterval(old =>(interval));

    }
    var stopTimer = () =>{
        clearInterval(countInterval);
    }
    var restartTimer = () =>{
        setCount(0);
    }
        return (
            <div >
              <h4>Functional Timer</h4>
              <h5>{count}</h5>   
              <button onClick={startTimer} >Start Counter</button> |  
              <button onClick={stopTimer} >Stop Counter</button> | 
              <button onClick={restartTimer} >Reset Counter</button> | 
              <hr/>
            </div>
          );
    }


  export default Timer;