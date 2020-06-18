import React, {useState,useEffect} from "react";
import Button from "@material-ui/core/Button";


const Counter = (props)=>{

    //Hooks setter
    const [counter,setCounter] = useState(0);

    const handleIncrement = (event)=>{
        setCounter(counter + 1);
    }
    const handleDecrement = (event)=>{
        setCounter(counter - 1);
    }

    useEffect(()=>{
        //Change document title when state changed 
        document.title = `Vous avez cliqué le bouton ${counter} fois`;

        //Hooks effects cleaner
        return (()=>{
            console.log('Hooks effects Cleaner');
        });

    });


    return (
        <div className="Container">
             <h2>Counter = <span style={{color: 'green'}}>{counter}</span></h2>
                <Button variant="contained" color="primary" onClick={(e)=>handleIncrement(e)} style={{marginRight:'1%'}}>+</Button>
                <Button variant="contained" color="secondary" onClick={(e)=>handleDecrement(e)}>-</Button>
        </div>
    )
};

export default Counter;