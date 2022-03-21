import React, { useState } from "react";
import { 
    rule72,
    compoundInterest,
    breakEven,
    loan,
    pricePerUnit,
    profit
 } from "../utils/utils";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import "../App.css";
import "./Card.css";

function Card(props){
    const [isExpanded, setExpanded] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);
    const [result, setResult] = useState("");
    const [inputs, setInputs] = useState({
        i1: 0,
        i2: 0,
        i3: 0,
        i4: 0
    });
    function expand(){
        if (isExpanded) {
            setExpanded(false);
            setSubmitted(false);
        } else {
            setExpanded(true);
        }
    }  
    function handleChange(event) {
        const { name, value } = event.target;
    
        setInputs(prevInputs => {
          return {
            ...prevInputs,
            [name]: value
          };
        });
        console.log(inputs);
      }
    
    function handleClick(event){
        setSubmitted(true);
        event.preventDefault();
        calculateResult(inputs.i1, inputs.i2, inputs.i3, inputs.i4);
    }
    function calculateResult(i1, i2, i3, i4){
        switch (props.id) {
            case 1:
                setResult(rule72(i1));
                break;
            case 2:
                setResult(compoundInterest(i1, i2, i3));
                break;
            case 3: 
                setResult(breakEven(i1, i2, i3));
                break;
            case 4: 
                setResult(loan(i1, i2, i3));
                break;
            case 5:
                setResult(pricePerUnit(i1, i2, i3, i4));
                break;
            case 6:
                setResult(profit(i1, i2, i3, i4));
                break;
            default:
                break;
        } 
    }
     
    return (
        <div className="Card">
            <div className="card"> 
                <div onClick={expand} className={`card-header ${isExpanded && "card-header-click"}`}>
                    <div className="flex-text"/*"grid-4"*/ >
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    </div>
                    <div className=/*"grid-1"*/"flex-arrow">
                        {isExpanded ? (<ArrowDropUpIcon fontSize="large" />) : (<ArrowDropDownIcon fontSize="large" />)}
                        
                    </div>
                </div>

                {isExpanded && (<form className="form-control">

                    {props.inputs.map(item => {
                            return (
                                <div className="input-group input-group-sm ">
                                <span className="input-group-text" id="inputGroup-sizing-sm">{item.title}</span>
                                <input onChange={handleChange} name={item.name} type="Number" className="form-control" />
                                </div>
                            );
                            })
                    } 
                    <button className="calculate-btn btn btn-outline-dark" onClick={handleClick} >Calculate</button>
                    {isSubmitted &&
                        <div className="results">
                            <p>{result}</p>
                        </div>
                    }
                </form>)}
                
                </div>
        </div>
    )
}
export default Card; 