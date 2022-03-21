import React from "react";
import Card from "./Card";
import data from "../utils/data";

import "./Main.css";

function Main(){
    return (
        <div className="main">
        {data.map(item => {
            return (
                <Card 
                title={item.title}
                description={item.description}
                key={item.id}
                id={item.id}
                inputs={item.inputs}
                />
            );
        })} 
        </div>
    );
}
export default Main;